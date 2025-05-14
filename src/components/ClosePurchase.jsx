import { useState } from "react";
import AdressForm from "./AddressForm";
import { ArrowLeftToLine } from "lucide-react";

const ClosePurchase = ({ cartItems, setOpenClosePurchase }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [address, setAddress] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
  });

  const [error, setError] = useState(false);

  const validateForm = () => {
    if (!address.rua.trim() || !address.numero.trim() || !address.bairro.trim() || !address.cidade.trim()) {
      setError(true); 
      return false;
    }
    setError(false);
    return true;
  };


  const sendToWhatsapp = () => {
    if (!validateForm()) return;

    const pedido = cartItems
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - R$ ${item.price.toFixed(2)}`
      )
      .join("\n");

    const message = `📦 Novo pedido para entrega:\n📝 *Itens do pedido:*\n${pedido}\n\n📍 *Endereço:*\nRua: ${
      address.rua
    }, Nº: ${address.numero}${
      address.complemento ? `, Compl: ${address.complemento}` : ""
    }\nBairro: ${address.bairro}\nCidade: ${
      address.cidade
    }\n\n💰 *Total: ${total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}*`;

    const phone = "5519996213636";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };


  return (
    <div className="flex h-screen w-full fixed z-50 top-0 right-0 bg-black/30">
      <div className="h-[25rem] w-[20.6rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[25rem] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 flex flex-col justify-between">
        <div className="flex mb-2">
          <button onClick={() => setOpenClosePurchase(false)} className="text-red-500 transition transform active:scale-50">
            <ArrowLeftToLine />
          </button>
          <div className=" flex w-[84%] justify-center">
            <h1 className="text-center font-bold text-[1.12rem]">
              Resumo da Compra
            </h1>

          </div>
          
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b border-zinc-100">
              <p className="text-[0.93rem]">
                {item.quantity} <span className="text-zinc-500">x</span>{" "}
                <span>{item.name}</span>
              </p>
            </div>
          ))}

          <AdressForm
            cartItems={cartItems}
            total={total}
            setAddress={setAddress}
            address={address}
            error={error}
          />
        </div>

        <div className="pt-2">
          <p className="text-right font-semibold">
            Total:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            onClick={() => sendToWhatsapp()}
            
            className="mt-2 bg-red-500 text-white rounded-lg px-2 py-1 w-full"
          >
            Enviar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosePurchase;

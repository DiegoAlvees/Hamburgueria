import { CirclePlus, CircleMinus } from "lucide-react";
import { useEffect, useState } from "react";
import ClosePurchase from "./ClosePurchase";



const Cart = ({ cartItems, setFlowCart, increaseItems, decreaseItems }) => {
  useEffect(() => {
    if (cartItems.length === 0) {
      setFlowCart(false);
    }
  }, [cartItems, setFlowCart]);

  const [openClosePurchase, setOpenClosePurchase] = useState(false);
  
  return (
    <div className="flex h-screen w-full bg-black/60 fixed z-50 top-0 right-0">
      <div className="h-[25rem] w-[20.6rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[25rem] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 flex flex-col">
        <h1 className="text-center font-bold text-[18px] mb-2">
          Itens adicionados
        </h1>

        <div className="flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-2 mb-2"
            >
              <div className="flex gap-2">
                <img className="h-[3.12rem] w-[3.75rem]" src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <div className="flex gap-5 items-center ">
                    <p className="text-[0.87rem] font-bold">
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-zinc-500 italic text-[1rem]">
                        {(item.price * item.quantity).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-xl px-1 py-1">
                <button onClick={() => decreaseItems(item.id)}>
                  <CircleMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseItems(item.id)}>
                  <CirclePlus />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-2">
          <button
            onClick={() => setFlowCart(false)}
            className="bg-red-500 text-white rounded-lg px-2 py-1"
          >
            Adicionar mais itens
          </button>
          <button onClick={() => setOpenClosePurchase(true)} className="bg-red-500 text-white rounded-lg px-2 py-1">
            Encerrar Compra
          </button>
        </div>
      </div>
          {openClosePurchase && <ClosePurchase cartItems={cartItems} setOpenClosePurchase={setOpenClosePurchase}/>}
      
    </div>
  );
};

export default Cart;

import { CirclePlus, CircleMinus } from "lucide-react";


const Cart = ({ cartItems, setFlowCart }) => {
  return (
    <div className="flex h-screen w-full bg-black/60 fixed z-50 top-0 right-0">
      <div className="h-[300px] w-[330px] bg-white opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 flex flex-col">
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
                <img className="h-[50px] w-[60px]" src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <p>{(item.price * item.quantity).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}
                      </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-xl px-1 py-1">
                <button>
                  <CircleMinus />
                </button>
                <span>{item.quantity}</span>
                <button>
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
          <button className="bg-red-500 text-white rounded-lg px-2 py-1">
            Encerrar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

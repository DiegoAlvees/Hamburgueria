import { CirclePlus, CircleMinus } from 'lucide-react';

const Cart = () => {
  return (
    <div className="flex h-screen w-full bg-black/60 fixed z-50 top-0 right-0">
      <div className="h-[300px] w-[330px] bg-white opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1">
        <h1 className="text-center font-bold text-[18px]">Itens adicionados</h1>
        <div className="flex justify-between items-center gap-2 ">
          <div className="flex gap-2">
            <img
              className="h-[50px] w-[60px]"
              src="/lanches/x-bacon.jpg"
              alt=""
            />
            <div>
              <p>Noah's Bacon</p>
              <p>R$30,00</p>
            </div>
          </div>
          <div className='flex items-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-xl px-1 py-1'>
            <button><CircleMinus /></button>
            <span>1</span>
            <button><CirclePlus /></button>
          </div>
      <div className='flex justify-around items-center mb-2 h-5 w-[305px] fixed bottom-0 '>
      <button className='bg-red-500 rounded-lg px-1'>Adicionar item</button> 
      <button className='bg-red-500 rounded-lg px-1'>Encerrar Compra</button>
      </div>
      
          
        </div>
      </div>
    </div>
  );
};

export default Cart;

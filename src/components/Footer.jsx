import { ShoppingBasket } from 'lucide-react';

const Footer = ({setFlowCart, cartItems}) => {
    return (
        <footer className={`flex justify-center item items-center ${cartItems.length === 0 ? 'bg-stone-400' : 'bg-red-500' } h-[2.18rem] lg:h-[2rem] text-zinc-50 fixed bottom-0 w-full`}>
           <button onClick={() => cartItems > '' ? setFlowCart(true) : setFlowCart(false)} className='flex gap-3 w-full justify-center'>
           <ShoppingBasket /> Carrinho 
           </button>
        </footer>
    )
}

export default Footer;


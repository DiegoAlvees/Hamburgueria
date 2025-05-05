import { ShoppingBasket } from 'lucide-react';

const Footer = ({setFlowCart, cartItems}) => {
    return (
        <footer className='flex justify-center item items-center bg-red-500 h-[35px] text-zinc-50 fixed bottom-0 w-full'>
           <button onClick={() => cartItems > '' ? setFlowCart(true) : setFlowCart(false)} className='flex gap-3'>
           <ShoppingBasket /> Carrinho 
           </button>
        </footer>
    )
}

export default Footer;


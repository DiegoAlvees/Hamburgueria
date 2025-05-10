import ItemList from "./ItemList";

const Menu = ({ data, addToCart }) => {
  return (
    <div className=" h-full w-full bg-zinc-50 px-[2rem] mb-8 relative">
      <ItemList title={"Lanches"} items={data.lanches} addToCart={addToCart} />
      <ItemList title={"Bebidas"} items={data.bebidas} addToCart={addToCart} />
    </div>
  );
};

export default Menu;

import ItemList from "./ItemList";

const Menu = ({ data, addToCart }) => {
  return (
    <div className="w-full bg-red-50 px-[2rem] lg:px-[5rem] pb-12 pt-5 relative">
      <ItemList className={"border-b border-b-black"} title={"Lanches"} items={data.lanches} addToCart={addToCart} />
      <ItemList className={"border-b border-b-black"} title={"Porções"} items={data.porcoes} addToCart={addToCart} />
      <ItemList title={"Bebidas"} items={data.bebidas} addToCart={addToCart} />
    </div>
  );
};

export default Menu;

import ItemList from "./ItemList";

const Menu = ({ data, addToCart }) => {
  return (
    <div className="w-full bg-red-50 px-[2rem] lg:px-[5rem] mb-8 relative">
      <ItemList title={"Lanches"} items={data.lanches} addToCart={addToCart} />
      <ItemList title={"Bebidas"} items={data.bebidas} addToCart={addToCart} />
    </div>
  );
};

export default Menu;

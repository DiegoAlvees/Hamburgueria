import { ShoppingCart } from "lucide-react";

const ItemList = ({title, items, addToCart }) => {
    return (
        <>
        <h1 className="text-center text-[1.63rem] font-bold py-5">{title}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items &&
          items.map((item) => (
            <section
              key={item.id}
              className="grid grid-cols-[4fr_6fr] sm:grid-cols-[4fr_12fr] md:grid-cols-[3fr_6fr] xl:grid-cols-[3fr_10fr] items-center gap-4 pb-4"
            >
              <img
                className="w-[6.9rem] h-[6.9rem] rounded-lg"
                src={item.image}
                alt="imagem do lanche"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{item.name}</p>
                <span>{item.description}</span>
                <div className="flex justify-between lg:justify-start xl: gap-3 pt-2 items-center">
                  <p className="font-bold pt-1">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className="text-slate-300 bg-black rounded-lg py-[0.13rem] px-[0.13rem]  transition transform active:scale-50"
                  >
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            </section>
          ))}
      </div>
        </>
    )
}

export default ItemList
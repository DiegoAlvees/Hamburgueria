import { ShoppingCart } from "lucide-react";

const Menu = ({ data,  }) => {
  return (
    <div className="h-full w-full bg-zinc-50 px-[2rem] mb-8 relative">
      <h1 className="text-center text-[26px] font-bold py-5">Lanches</h1>
      <div className="grid gap-4">
        {data &&
          data.lanches.map((item) => (
            <section
              id={item.id}
              className="grid grid-cols-[4fr_6fr] items-center gap-4 pb-4"
            >
              <img
                className="w-[110px] h-[110px] rounded-lg"
                src={item.image}
                alt="foto do lanche"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{item.name}</p>
                <span>{item.description}</span>
                <div className="flex justify-between items-center">
                  <p className="font-bold pt-1">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button className="text-slate-300 bg-black rounded-lg py-[2px] px-[2px]">
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            </section>
          ))}

<h1 className="text-center text-[26px] font-bold py-5">Bebidas</h1>
{data &&
          data.bebidas.map((item) => (
            <section
              id={item.id}
              className="grid grid-cols-[4fr_6fr] items-center gap-4 pb-4"
            >
              <img
                className="w-[110px] h-[120px] rounded-lg"
                src={item.image}
                alt="foto do lanche"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">{item.name}</p>
                <span>{item.description}</span>
                <div className="flex justify-between items-center">
                  <p className="font-bold pt-1">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button className="text-slate-300 bg-black rounded-lg py-[2px] px-[2px]">
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default Menu;


const AdressForm = ({setAddress, address}) => {
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  

  return (
    <div>
      <h1 className="text-center font-bold text-[18px] my-2">
        Endereço de Entrega
      </h1>
      <form className="flex flex-col gap-2">
        <input
          name="rua"
          value={address.rua}
          onChange={handleChange}
          required
          type="text"
          placeholder="Rua"
          className="border border-zinc-300 rounded-lg px-2 py-1"
        />
        <input
          name="numero"
          value={address.numero}
          onChange={handleChange}
          required
          type="text"
          placeholder="Número"
          className="border border-zinc-300 rounded-lg px-2 py-1"
        />
        <input
          name="complemento"
          value={address.complemento}
          onChange={handleChange}
          type="text"
          placeholder="Complemento"
          className="border border-zinc-300 rounded-lg px-2 py-1"
        />
        <input
          name="bairro"
          value={address.bairro}
          onChange={handleChange}
          required
          type="text"
          placeholder="Bairro"
          className="border border-zinc-300 rounded-lg px-2 py-1"
        />
        <input
          name="cidade"
          value={address.cidade}
          onChange={handleChange}
          required
          type="text"
          placeholder="Cidade"
          className="border border-zinc-300 rounded-lg px-2 py-1"
        />
      </form>
    </div>
  );
};

export default AdressForm;

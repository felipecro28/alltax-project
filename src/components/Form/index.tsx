import { useState } from "react";
import "./styles.css";
import { productsArray } from "../../utils/data";

const categorias = [
  ...new Set(productsArray.map((product) => product.categoria)),
];

const Form: React.FC<{ listenBrandChange: (brand: string) => void }> = ({
  listenBrandChange,
}) => {
  const [categoria, setCategoria] = useState("");
  const [produto, setProduto] = useState("");
  const [marca, setMarca] = useState("");

  const produtos = [
    ...new Set(
      productsArray.map((product) =>
        product.categoria === categoria ? product.produto : ""
      )
    ),
  ].filter((p) => p != "");

  const marcas = [
    ...new Set(
      productsArray.map((product) =>
        product.produto === produto ? product.marca : ""
      )
    ),
  ].filter((p) => p != "");

  return (
    <form>
      <div>
        <label className="form-label" htmlFor="categoria">
          Categoria:
        </label>
        <select
          className="form-select"
          id="categoria"
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            setProduto("");
            setMarca("");
            listenBrandChange("");
          }}
        >
          <option>Selecione uma categoria</option>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label" htmlFor="produto">
          Produto:
        </label>
        <select
          className="form-select"
          id="produto"
          value={produto}
          onChange={(e) => {
            setProduto(e.target.value);
            listenBrandChange("");
          }}
        >
          <option>Selecione um produto</option>
          {produtos.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label" htmlFor="marca">
          Marca:
        </label>
        <select
          className="form-select"
          id="marca"
          value={marca}
          onChange={(e) => {
            setMarca(e.target.value);
            listenBrandChange(e.target.value);
          }}
        >
          <option value="">Selecione uma marca</option>
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Form;

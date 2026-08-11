import { useState } from "react";

const Contador = () => {
  const [contador, setcontador] = useState(0);
  //let contador = 0;

  /*const incrementar = () => {
    //contador = contador + 1;
   setcontador(contador + 1);
    console.log(contador)
  };*/

  return (
    <section className="border rounded-3 text-center py-3">
      <h2>Contador</h2>
      <p className="lead">{contador}</p>
      <button
        className=" btn btn-primary me-2"
        onClick={() => setcontador(contador + 1)}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setcontador(contador - 1)}
      >
        -
      </button>
    </section>
  );
};

export default Contador;

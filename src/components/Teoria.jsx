const Teoria = ({ comision, modulo }) => {
  return (
    <section>
      <h2>Componentes de react</h2>
      <p>
        Uno de los conceptos clave de react son los componentes ,{" "}
        <span className="fw-bold resaltar-parrafo">
          {" "}
          un componente es una pieza reutilizable{" "}
        </span>
        de la interfaz de usuario que se encarga de representar una parte
        especifica de la pantalla . Los componentes pueden ser tan simples como
        un botón o tan complejos como un formulario completo. React permite la
        creacion de componentes tanto de clase como funcionales , aunque los
        componentes funcionales se han vuelto mas populares con la introducción
        de los Hooks, Cada componente en React puede tener su propio estado
        (state) y propiedades (props). El estado es una forma de almacenar y
        manejar datos internos del componente , mientras que las propiedades son
        datos que se pasan de un componente padre a un componente hijo , Al
        combinar estos elementos , React permite la creacion de interfaces
        interactivas , donde los cambios en los datos se reflejan
        automaticamente en la interfaz de ususario
      </p>
      <div className="alert alert-primary" role="alert">
        Comisión : {comision} - Módulo : {modulo}
      </div>
    </section>
  );
};

export default Teoria;

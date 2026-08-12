import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <form>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            Ingresa una Tarea
          </label>
          <input
            type="text"
            placeholder="Ej: tarea1"
            className="form-control"
            id="tarea"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ListaTarea/>
    </section>
  );
};

export default FormularioTarea;

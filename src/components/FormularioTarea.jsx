import { useState } from "react";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);
const [tarea, setTarea]=useState('')
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
            onChange={(e)=> setTarea(e.target.value)}
            value={tarea}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ListaTarea />
    </section>
  );
};

export default FormularioTarea;

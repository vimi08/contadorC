import { useState } from "react";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaExistente = tareas.find(
      (item) => item.toLowerCase().trim() === tarea.toLowerCase().trim()
    );
    if (tareaExistente) {
      return alert("No puedes cargar una tarea duplicada");
    }
    console.log("hola");
    setTareas([...tareas, tarea]);
    // limpiar el formulario
    setTarea("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            Ingresa una Tarea
          </label>
          <input
            type="text"
            placeholder="Ej: tarea1"
            className="form-control"
            id="tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ListaTarea tareas={tareas} />
    </section>
  );
};

export default FormularioTarea;

import { useState } from "react";
import ListaTarea from "./ListaTarea";
import { useEffect } from "react";

const FormularioTarea = () => {
  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("tareasKey")) || [];

  const [tareas, setTareas] = useState(tareasLocalstorage);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaExistente = tareas.find(
      (item) => item.toLowerCase().trim() === tarea.toLowerCase().trim(),
    );
    if (tareaExistente) {
      return alert("No puedes cargar una tarea duplicada");
    }
    setTareas([...tareas, tarea]);
    setTarea(""); // limpiar input
  };

  const borrarTarea = (tareaEliminar) => {
    const tareasFiltradas = tareas.filter((item) => item !== tareaEliminar);
    setTareas(tareasFiltradas); // ✅ corregido
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
      <ListaTarea tareas={tareas} borrarTarea={borrarTarea} />{" "}
      {/* ✅ corregido */}
    </section>
  );
};

export default FormularioTarea;

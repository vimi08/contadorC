import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas , borrarTarea }) => {
  return (
    <ul className="list-group my-4">
      {tareas.map((tarea, indice) => (
  <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}/>
))}

    </ul>
  );
};

export default ListaTarea;

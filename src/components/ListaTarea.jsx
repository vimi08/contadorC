import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas }) => {
  return (
    <ul className="list-group my-4">
      {tareas.map((tarea, indice) => (
  <ItemTarea key={indice} tarea={tarea} />
))}

    </ul>
  );
};

export default ListaTarea;

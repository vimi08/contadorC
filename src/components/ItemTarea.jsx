import React from "react";

const ItemTarea = ({tarea}) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center
        "
    >
      {tarea} <button className="btn btn-danger">Eliminar</button>
    </li>
  );
};

export default ItemTarea;

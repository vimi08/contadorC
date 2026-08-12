import React from "react";
import { LuArchiveX } from "react-icons/lu";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center
        "
    >
      {tarea}{" "}
      <button className="btn btn-danger" onClick={() => borrarTarea(tarea)}>
        <LuArchiveX />
      </button>
    </li>
  );
};

export default ItemTarea;
3;

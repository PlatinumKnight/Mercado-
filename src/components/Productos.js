import React from "react";

const Productos = (props) => {
  const { ProductosLista, agregar } = props;
  return (
    <div className="w-50 p-3">
      <h1>Productos</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ProductosLista.map((p, index) => (
            <tr key={index}>
              <td>{p.codigo}</td>
              <td>{p.descripcion}</td>
              <td>
                <img src={p.url} className="h-6" alt="logo" />
              </td>
              <td>${p.precio}</td>
              <td>
                <button className="btn btn-success" onClick={() => agregar(p)}>
                  Agregar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;

import React from "react";
import img1 from "../img/Basura.png";

const Listado = (props) => {
  const { lista, eliminar, eliminarCarrito } = props;
  return (
    <div className="w-50 p-3">
      <h4>Mi Carrito</h4>
      {lista.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <div>
          <p>
            Total:$
            {props.total}
          </p>

          <div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => eliminarCarrito()}
            >
              Eliminar todo
            </button>
            <img
              src={img1}
              className="h-7 center rounded float-left"
              alt="logo"
            />
          </div>

          <table className="table table-responsive-sm table-striped table-bordered">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {lista.map((p, index) => (
                <tr key={index}>
                  <td>{p.cantidad}</td>
                  <td>{p.codigo}</td>
                  <td>{p.descripcion}</td>
                  <td>${p.precio}</td>
                  <td>${p.cantidad * p.precio}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar(p, index)}
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Listado;

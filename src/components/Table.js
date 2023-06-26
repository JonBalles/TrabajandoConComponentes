import React from "react";
import PropTypes from "prop-types";
import { TableFrame } from "./TableFrame.js";


const dataMovie = [
    {
        id: 1,
        titulo: "Billy Elliot",
        calificacion: 5,
        premios: 2,
        duracion: "132 minutos",
        generos: ["Drama", "Comedia"]
    },
    {
        id: 2,
        titulo: "Alicia en el país de las maravillas",
        calificacion: 4.8,
        premios: 3,
        duracion: "142 minutos",
        generos: ["Drama", "Accion", "Comedia"]
    }
]


export const Table = () => {
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Duración</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Generos</th>
                                </tr>
                            </thead>
                            {dataMovie.map((row, index) => {
                                return <TableFrame {...row} key={index} />
                            })}

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
Table.propTypes = {
    title: PropTypes.string.isRequired,
    icono: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
}
Table.defaultProps = {
    color: "border-left-primary",
}
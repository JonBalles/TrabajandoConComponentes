import React from "react";
import PropTypes  from "prop-types";


export const TableFrame = ({titulo, calificacion, premios, duracion, generos}) =>{
    return(
        <>
              <tbody>
				<tr>
					<td>{titulo}</td>
                    <td>{duracion}</td>
					<td>{calificacion}</td>
                    <td>{premios}</td>
                    <td><ul>{generos.map((genre , i) => 
                        <li key={i}>{genre}</li>
                    ) }</ul></td>
                   
                    
				</tr>
			</tbody>

        </>
    )
}
TableFrame.propTypes = {
	titulo: PropTypes.string,
	calificacion: PropTypes.number,
	premios: PropTypes.number,
	duracion: PropTypes.number
}
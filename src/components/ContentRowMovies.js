import PropTypes from "prop-types";

export const ContentRowMovies = (props) => {
   
   
    return (
        <div class="col-md-4 mb-4">
							<div class={`card border-left-${props.color} shadow h-100 py-2`}>
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
										<div class={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.titulo}</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
										</div>
										<div class="col-auto">
											<i class={`fas fa-${props.icono} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
}


ContentRowMovies.protTypes = {
icono: PropTypes.string.isRequired,
cifra: PropTypes.number.isRequired,
color: PropTypes.string.isRequired,
titulo: PropTypes.string.isRequired
}

ContentRowMovies.defaultProps = {
	titulo: "Sin datos",
	color: "primary",
	cifra: 0,
	icono: "",
};
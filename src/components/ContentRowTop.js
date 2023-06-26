import { GenresInDB } from "./GenresInDB.js"
import { LastMovieInDb } from "./LastMovieInDB.js"
import { ContentRowMovies } from "./ContentRowMovies.js"


export const ContentRowTop = () => {
   
	const datos = [
		{
			  titulo: "Movies in Data Base",
			  cifra: 21,
			  color: "primary",
			  icono: "film",
		},
		{
			  titulo: "Total awards",
			  cifra: 79,
			  color: "success",
			  icono: "award",
		},
		{
			  titulo: "Actors quantity",
			  cifra: 49,
			  color: "warning",
			  icono: "user",
		},
	]

	
	return (
        <>
        	<div class="container-fluid">
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					
					<div class="row">

					{datos.map((dato, i) => (
                                    <ContentRowMovies key={i} titulo={dato.titulo} cifra={dato.cifra} color={dato.color} icono={dato.icono}/>
                              ))}
					</div>
					
					
	
					
					<div class="row">
						<LastMovieInDb />
						
						<GenresInDB />

						
						
					</div>
				</div>
        </>
    )
}
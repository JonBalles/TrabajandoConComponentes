export const BodyCard = (props) => {
    return (
        <>
        <div class="col-lg-6 mb-4">
                        <div class="card bg-dark text-white shadow">
                            <div class="card-body">
                                {props.nombre}
                            </div>
                        </div>
                    </div>
        </>
    )
}
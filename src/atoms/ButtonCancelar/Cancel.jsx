import "./Cancel.css"


const cancelado =  ()=>{
    console.log("pedido cancelado");
    alert("pedido cancelado");
}
function Cancel(){
    return(
        <button className="button" onClick={cancelado}>Cancelar</button>
    )
}
export default Cancel
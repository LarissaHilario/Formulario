import "./button.css"

function Button({button}){
    const submit =  ()=>{
        console.log("Pedido realizado");
        alert("pedido realizado");
    }
    return(
        <div >
          <button className="btn" onClick={submit}>{button}</button>
        </div>
    )
}

export default Button
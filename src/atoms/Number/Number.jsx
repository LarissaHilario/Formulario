import "./number.css"
function Number({text}){
    return(
        <div >
          <input className="Number" type="number" placeholder={text}/>
        </div>
    )

}

export default Number;
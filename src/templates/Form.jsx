
import Submit from "../molecules/Submit"
import Cake from "../organisms/Cake"
import General from "../organisms/General"
import Order from "../organisms/Order"
import "../assets/styles/Form.css"
function Form() {
    return (
        <div className="wrapper">
            <div className="checkout_wrapper">
                <Order></Order>
                <div className="form">
                <General>
                </General>
                <Cake></Cake>
                </div>
            </div>
        </div>
    )
}

export default Form
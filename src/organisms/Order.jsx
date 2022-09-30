import Subtitle from "../atoms/Subtitle/Subtitle"
import "../assets/styles/Order.css"
function Order(){

    return (
        <div className="product_info">
        <img src={"/images/chocolateCake1.png"} alt='logo'/>
        <div className="content">
          <Subtitle title={"Pastel Fiesta de chocolate"}></Subtitle>
          <p>$500</p>
        </div>
       </div>
    )
}

export default Order
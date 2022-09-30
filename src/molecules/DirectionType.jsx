import RadioButton from "../atoms/RadioButton/RadioButton"
import Subtitle from "../atoms/Subtitle/Subtitle"

function DirectionType(){
    return(
        <>
        <div>
            <Subtitle title={"Tipo de dirección"}></Subtitle>
            <br></br>
            <RadioButton text={"Casa"} text1={"Oficina"} option={"place"}></RadioButton>
        </div>
        </>
    )
}

export default DirectionType
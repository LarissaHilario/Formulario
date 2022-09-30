import Select from "../atoms/ComboBox/Select";
import InputText from "../atoms/InputText/InputText";
import Number from "../atoms/Number/Number";
import Title from "../atoms/Title/Title";

function Info(){
    return(
        <>
        <Title title={"Información General"}></Title>
        <InputText text={"Nombre"}></InputText>
        <InputText text={"Apellido"}></InputText>
        <InputText text={"Calle"}></InputText>
        <Number text={"Número de casa"}></Number>
        <Select title={"Colonia"}
                text1={"Colonia Madero"}
                text2={"Fraccionamiento Bugambilias"} 
                text3={"Avenida Central"}
                text4={"Colonia Reforma"}/>
                <br></br>
        <InputText text={"Código Postal"}></InputText>
        <InputText text={"Teléfono"}></InputText>
    </>)
}

export default Info;
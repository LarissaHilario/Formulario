import RadioButton from "../atoms/RadioButton/RadioButton"
import Subtitle from "../atoms/Subtitle/Subtitle"
import React, { useState } from 'react';
function Note(){
    const [Response,setResponse] = useState(null);
    const QuestionField = ["Si"];
    return(
        <>
        <br></br>
        <Subtitle title={"¿Desea escribir alguna nota especial?"}></Subtitle>
        <br></br>
        <RadioButton text={"Si"} text1={"No"} option={"note"}value={Response}></RadioButton>
        </>
    )
}
export default Note
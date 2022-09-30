function RadioButton({text,text1,option}){
    return(
        <div>
          <input type="radio" id="si" name={option} value="si"/>
          <label >{text}</label>
          <input type="radio" id="no" name={option} value="no"/>
          <label >{text1}</label>
        </div>
    )
}

export default RadioButton
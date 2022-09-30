import "./Select.css"
function Select({title,text1,text2,text3,text4}){
    return(
        <div className="select">
            <select>
              <option defaultValue="title">{title}</option>
              <option value="col1">{text1}</option>
              <option value="Col2">{text2}</option>
              <option value="Col3">{text3}</option>
              <option value="Col4">{text4}</option>
            </select>
        </div>
    )

}

export default Select;


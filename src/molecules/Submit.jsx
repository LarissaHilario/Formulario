import Button from "../atoms/Button/Button";
import Cancel from "../atoms/ButtonCancelar/Cancel";


const imprimir = ()=>{

    let user= document.getElementById("user").value;
    let password= document.getElementById("password").value;
    let email= document.getElementById("email").value;
    let registro={email,user,password}
    if (user!=""&& password!="" && email!=""){ 
        lista.push(registro); 
        texto="Registro exitoso, bienvenido "+user;
        console.log(lista);
        alert(texto);
    }
    else{
       texto="Datos incompletos, vuelve a intentarlo";
        console.log(texto);
        alert(texto)
    }
     console.log(lista);
    }

function Submit(){
    return(
        <>
        <Button button={"Realizar Pedido"} ></Button>
        <Cancel></Cancel>
        </>
    )
}

export default Submit;
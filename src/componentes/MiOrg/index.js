import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
//Estado - hooks funcioalidades que ayudan a trabajar funcionalidades de react
//useState
//useState()
//const [nombreVariable,funcionActualizada] = useState(valorInicial)
//const [nombre,actulizarNombre] = useState("harlan")
console.log(props)
/*const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/
    return <section className="orgSection"> 
    <h3 className="title">Mi organización </h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg
import './Formulario.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
import { useState } from 'react';
const Formulario = (props) => {

    const { equipos, registrarColaborador, crearNuevoEquipo } = props;

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [nuevoEquipo, setNuevoEquipo] = useState("");
    const [color, setColor] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosFormulario = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosFormulario);
    }

    const manejarNuevoEquipo = (e) => { 
        e.preventDefault();
        crearNuevoEquipo({titulo: nuevoEquipo, colorSecundario: color});
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" valor={nombre} modificarValor={setNombre} required />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" valor={puesto} modificarValor={setPuesto} required />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" valor={foto} modificarValor={setFoto} required />
            <ListaOpciones equipos={equipos} valor={equipo} actualizarEquipo={setEquipo} />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Equipo" placeholder="Ingresar nombre de nuevo equipo" valor={nuevoEquipo} modificarValor={setNuevoEquipo} required />
            <Campo type="color" titulo="Color" placeholder="Ingresar color" valor={color} modificarValor={setColor} required />
            <Boton>
                Crear Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario;
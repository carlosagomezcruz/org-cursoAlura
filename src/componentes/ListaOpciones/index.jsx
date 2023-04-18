import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const {equipos, valor, actualizarEquipo }  = props;

    const manejarCambio = (e) => {
        actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;
import './Campo.css';

const Campo = (props) => {
    const propPlaceHolderModificada = `${props.placeholder}...`;

    const {type="text"} = props;

    const cambiarValor = (e) => {
        props.modificarValor(e.target.value);
    }
    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} placeholder={propPlaceHolderModificada} required={props.required} value={props.valor} onChange={cambiarValor} />

    </div>
}

export default Campo;
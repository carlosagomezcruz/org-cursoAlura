import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, colorSecundario, eliminarColaborador, like }) => {
    return <div className="colaborador">
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(colaborador.id)} />
        <div className="encabezado" style={{ backgroundColor: colorSecundario }}>
            <img src={colaborador.foto} alt={colaborador.nombre} />
        </div>
        <div className="info">
            <h4>{colaborador.nombre}</h4>
            <h5>{colaborador.puesto}</h5>
            {colaborador.fav ? <AiFillHeart color='red' onClick={() => like(colaborador.id)} /> : <AiOutlineHeart onClick={() => like(colaborador.id)} />}
        </div>
    </div>
}

export default Colaborador;
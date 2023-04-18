import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Equipo.css';

const Equipo = ({ colaboradores, datos, eliminarColaborador, actualizarColor, like }) => {

    const { titulo, colorPrimario, colorSecundario, id } = datos;


    return <>
        {(colaboradores.length > 0) &&
            <section className="equipo" style={{ backgroundColor: hexToRgba(colorSecundario, 0.4) }}>
                <input
                    type="color"
                    className='input-color'
                    value={colorSecundario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id);
                    }}
                />
                <h3 style={{ borderColor: colorSecundario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            key={index}
                            colaborador={colaborador}
                            colorSecundario={colorSecundario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}

                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;
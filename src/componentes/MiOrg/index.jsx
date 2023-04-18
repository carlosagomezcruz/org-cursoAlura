import './MiOrg.css';

const MiOrg = (props) => {
    return <section className='orgSection'>
        <h3 className='title'>Mi Organizacion</h3>
        <img src="/img/botonMiOrg.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;
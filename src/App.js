import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import { personal } from './datos/personal';
import { equipos } from './datos/equipos';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
function App() {

  const [mostrarFormulario, actualizarForm] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState(personal);

  const [teams, updateTeams] = useState(equipos);


  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = teams.map((team) => {
      if (team.id === id) {
        team.colorSecundario = color;
      }
      return team;
    });
    updateTeams(equiposActualizados);
  }

  const cambiarMostrar = () => {
    actualizarForm(!mostrarFormulario);
  }

  const crearNuevoEquipo = (nuevoEquipo) => {

    updateTeams([...teams, { ...nuevoEquipo, id: uuid() }]);

  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
     });
      actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header />

      {mostrarFormulario && <Formulario
        registrarColaborador={registrarColaborador}
        equipos={teams.map(equipo => equipo.titulo)}
        crearNuevoEquipo={crearNuevoEquipo}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        teams.map((equipo, index) => <Equipo
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          datos={equipo}
          key={index}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;

import fotoPerfil from '../img/fotoPerfil.jpeg'
import icono from '../img/icono.png'
import musica from '../sounds/one_piece.mp3'
import "../CSS/Main.css"

function Main({ alumno }) {
    
  const reproducirSonido = () => {
    const sonido = new Audio(musica);
    sonido.play();
  };  

  return (
    <main>
      <div className="card">
        <img src={fotoPerfil} alt="Foto de perfil" style={{ width: "200px", borderRadius: "10px" }} />
        <h2>{alumno.nombre} {alumno.apellido}</h2>
        <p><strong>Edad:</strong> {alumno.edad}</p>
        <p><strong>Lenguajes:</strong> {alumno.lenguajes.join(", ")}</p>
        <p><strong>Correo:</strong> <a href={`mailto:${alumno.correo}`}>{alumno.correo}</a></p>
        <p><strong>Sobre mí:</strong> {alumno.sobreMi}</p>
        <img src={icono} alt="Sello pirata" className="sello-img" onClick={reproducirSonido} 
        style={{ cursor: "pointer" }} />
      </div>
    </main>
  );
}

export default Main;

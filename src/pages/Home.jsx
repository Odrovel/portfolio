import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Home() {

    const alumno = {
        nombre: "Octavio A.",
        apellido: "Vera Coronel",
        edad: 23,
        lenguajes: ["JavaScript", "React", "Java", "CSS"],
        correo: "octavio.vera.2001@gmail.com",
        sobreMi: "Soy estudiante de programación en la Universidad Tecnogolica Nacional."
      };
  return (
    <div>
      <Header />
      <Main alumno={alumno} />
      <Footer />
    </div>
  );
}

export default Home;

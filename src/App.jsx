import Header from "./components/Header";
import Teoria from "./components/Teoria";
import Footer from "./components/Footer";

function App() {
  //AQUI VA LA LÓGICA DEL COMPONENTE
  const anio = new Date().getFullYear()
  return (
    <>
      {/*AQUI COMIENZ<A LA ZONA DEL HTML}
      {/*<Header></Header>*/}
      <Header />
      <main className="container">
        <Teoria comision="c25" modulo={2} anio={anio} />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

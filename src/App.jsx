import Header from "./components/Header";
import Teoria from "./components/Teoria";
import Footer from "./components/Footer";

function App() {
  //AQUI VA LA LÓGICA DEL COMPONENTE
  return (
    <>
      {/*AQUI COMIENZ<A LA ZONA DEL HTML}
      {/*<Header></Header>*/}
      <Header />
      <main className="container">
        <Teoria comision="c25" modulo={2} />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

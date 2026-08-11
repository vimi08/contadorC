

function App() {
  //AQUI VA LA LÓGICA DEL COMPONENTE
  return (
    <>
      {/*AQUI COMIENZ<A LA ZONA DEL HTML}
      {/*<Header></Header>*/}
      <Header />
      <main className="container">
        <Teoria></Teoria>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

function App() {
  return (
    <>
      <header className="text-center my-3">
        <h1>Lista de Tareas</h1>
      </header>
      <main className="container my-3">
        <FormularioTarea/>
      </main>
      <footer className="bg-black text-center py-3"><p>&copy; Todos los derechos reservados</p></footer>
    </>
  );
}


export default App

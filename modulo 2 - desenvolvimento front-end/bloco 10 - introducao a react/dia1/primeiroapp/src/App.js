import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const array = ['caio', 'luana', 'amanda', 'lucas']


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const itensLista = array.map((nome) => Task(nome))

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App;

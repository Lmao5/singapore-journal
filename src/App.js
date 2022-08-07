// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <NavBar />
      <section className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default App;

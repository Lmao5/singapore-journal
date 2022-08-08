// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import { cardData } from "./data";

function App() {

  const cards = cardData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}/>
    )
  })

  return (
    <>
      <NavBar />
      <section className="card-list">
        {cards}
      </section>
    </>
  );
}

export default App;

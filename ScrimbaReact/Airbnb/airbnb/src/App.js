import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;

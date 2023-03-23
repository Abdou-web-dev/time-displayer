import "./App.css";
import { CurrentTime } from "./components/CurrentTime.js";
import { Title } from "./components/Title.js";

function App() {
  return (
    <div className="App">
      {/* <Draft /> <br /> */}
      <Title></Title>
      <CurrentTime />
    </div>
  );
}

export default App;

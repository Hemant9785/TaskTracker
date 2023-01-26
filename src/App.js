import "./App.css";
import Styles from "./CssModule.module.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;

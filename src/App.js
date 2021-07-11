import { makeStyles } from "@material-ui/core";
import "./App.css";
import { SimpleButton } from "./components/SimpleButton";

const useStyle = makeStyles((theme) => {
  return {
    title: {
      fontWeight: "bold",
    },
  };
});

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <header className="App-header">
        <p className={classes.title}>Reactを学びましょう</p>
        <SimpleButton>start</SimpleButton>
      </header>
    </div>
  );
}

export default App;

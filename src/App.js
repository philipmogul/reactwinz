//import logo from './logo.svg';
//import './App.css';
import MovieCard from "./components/MovieCard";


function App() {
  return ( /* This allows inclusion of multiple html components */
    <>
    <MyName />
    <Greeting name="PHIL_VALUE_NEM" />
    <MovieCard movie={{ title: "Inception", release_date: "2010" }} />
    </>
  );
}

// Creating components in React
// My Name Component
function MyName() {
  return (
    <div>
      <h2>My Name is PHILIP VALUE!</h2>
      <p>I am a software developer.</p>
    </div>
  );
}

// Props => Properties in components we want to pass data to components
// Example of a component that takes props
function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to the React world!</p>
    </div>
  );
}

export default App;

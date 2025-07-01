//import logo from './logo.svg';
//import './App.css';
// import MovieCard from "./components/MovieCard";
// import './bootstrap/css/bootstrap.min.css';
import HomeMain from "./pages/HomeMain";

/*
REMEMBER !!! ALL COMPONENTS BEGIN WITH A CAPITAL LETTER
*/

/* I HAD PASTED THE FOLLOWING COMPONENTS BELOW: 
   I PASTED THE HOME COMPONENT BECAUSE THAT IS HOW REACT CAN LOAD DIFFERENT WEB PAGES AS COMPONENTS
    <MyName />
    <Greeting name="PHIL_VALUE_NEM" />
    <MovieCard movie={{ title: "Inception", release_date: "2010" }} />
*/


function App() {
  return ( /* This allows inclusion of multiple html components */
    <>
    <HomeMain />
    </>
  );
}

export default App;

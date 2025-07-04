//import logo from './logo.svg';
//import './App.css';
// import MovieCard from "./components/MovieCard";
// import './bootstrap/css/bootstrap.min.css';
import HomeMain from "./pages/HomeMain";

// I installed bootstrap the following way : 
// Terminal: npm install bootstrap
// I also added the following line to index.js and App.js:
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

// then i used bootstrap classes in the components



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
    <h2>Bootstrap Section</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Bootstrap Grid Example</h3>
          <p>This is an example of a full-width section using Bootstrap's grid system.</p>
        </div>
        </div>
        <br /><br /><br />
    </div>
    </>
  );
}

export default App;

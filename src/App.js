//import logo from './logo.svg';
//import './App.css';


function App() {
  return ( /* This allows inclusion of multiple html components */
    <>
    <Text />
    <MyName />
    </>
  );
}

// Creating components in React
// Text Component 
function Text(){
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

// My Name Component
function MyName() {
  return (
    <div>
      <h2>My Name is PHILIP VALUE!</h2>
      <p>I am a software developer.</p>
    </div>
  );
}


export default App;

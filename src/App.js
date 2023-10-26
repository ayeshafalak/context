import './App.css';
import ParentComponent from './Components/ParentComponent';
import { MyContextProvider } from './MyContext';

function App() {
  return (
    <div className="App">
     <h1>WELCOME TO THE TUTORIAL OF PROP DRILLING & CONTEXT API at e-Labs</h1>
     <MyContextProvider>
       <ParentComponent />
     </MyContextProvider>
    

    </div>
  );
}

export default App;

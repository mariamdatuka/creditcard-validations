import Images from "./components/Images";
import CardDetails from './components/CardDetails'
import {useState} from 'react';
import Thanks from "./components/Thanks";



function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
 <>
 <div className='App'>
 <Images/>
 {isVisible?<Thanks/>:<CardDetails setIsVisible={setIsVisible}/>}
 </div>
 </>
  );
}

export default App;

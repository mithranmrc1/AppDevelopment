import{BrowserRouter,Routes,Route,Redirect} from 'react-router-dom';

import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
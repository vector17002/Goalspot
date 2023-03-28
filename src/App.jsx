import './App.css'
import {Home} from './components'
import { BrowserRouter } from 'react-router-dom';
import {Registration , SignUp} from './components'
function App() {
  return (
    <BrowserRouter>
    {/* <Home/>
    <Registration/> */}
    <SignUp/>
    </BrowserRouter>
  )
}

export default App

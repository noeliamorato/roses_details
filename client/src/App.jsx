
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/informativa';
import Login from './pages/dashboard/login';
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element = {<Index/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App

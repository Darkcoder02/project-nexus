import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
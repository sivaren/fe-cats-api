import { Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard/Dashboard'
import IntroduceYours from './pages/IntroduceYours/IntroduceYours'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Dashboard/> } />
          <Route path='/introduce-yours' element={ <IntroduceYours/> } />
        </Routes>
    </div>
  )
}

export default App;

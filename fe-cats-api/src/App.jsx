import { Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard/Dashboard'
import IntroduceYours from './pages/IntroduceYours/IntroduceYours'
import ExploreColony from './pages/ExploreColony/ExploreColony'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Dashboard/> } />
          <Route path='/introduce-yours' element={ <IntroduceYours/> } />
          <Route path='/explore-colony' element={ <ExploreColony/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
    </div>
  )
}

export default App;

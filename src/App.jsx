import './App.css'
import NavBar from './components/NavBar';
import NewPlayersForm from './components/NewPlayerForm';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePLayer';
import { Routes ,Route }from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <NewPlayersForm />
        <div>
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            <Route path="/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App;

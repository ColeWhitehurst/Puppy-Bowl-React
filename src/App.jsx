import './App.css'
import NavBar from './components/NavBar';
import NewPlayersForm from './components/NewPlayerForm';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePLayer';
import { Routes ,Route }from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllPlayers } from './API';

function App() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllPlayers() {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
            setPlayers(APIResponse.data.players);
        } else {
            setError(APIResponse.error.message);
        }
    }
    getAllPlayers();
}, []);

  return (
    <>
      <div>
        <NavBar />
        <NewPlayersForm players={players} setPlayers={setPlayers}/>
        <div>
          <Routes>
            <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers} error={error} />} />
            <Route path="/:id" element={<SinglePlayer />} />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App;

import { fetchAllPlayers, fetchSinglePlayer } from "../API";
import { removePlayer } from "../API";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

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

    const playersToDisplay = searchParam ? players.filter((player => player.name.toLowerCase().includes(searchParam))) : players;

    async function handleDetails(playerId) {
        const APIResponse = await fetchSinglePlayer(playerId);
        // console.log(APIResponse);
        navigate(`/${playerId}`)
    }

    async function handleDelete(id) {
        const APIResponse = await removePlayer(id);
        console.log(`Hello`, APIResponse);
        
    }

    return ( 
    <>
     <div>
        <label>
            Search:{" "}
            <input 
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
        </label>
     </div>

     {playersToDisplay.map((player) => {
        return (
            <div key={player.id} className="player">
                <h4>{player.name}</h4>
                <button className="details" onClick={()=>handleDetails(player.id)}>More Details</button><br />
                <button className="delete" onClick={()=>handleDelete(player.id)}>Delete</button>
            </div>
        )
     })}
    </>
     );
}
 
export default AllPlayers;
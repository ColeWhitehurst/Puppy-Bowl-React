import { fetchAllPlayers } from "../API";
import { useState, useEffect } from 'react';

const AllPlayers = () => {
    const [players, setPlayers] = useState([])

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

    return ( 
    <>
     <div>
        <label>
            Search:{" "}
            <input 
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
        </label>
     </div>

     {playersToDisplay.map((player) => {
        return (
            <div>
                <h4>{player.name}</h4>
            </div>
        )
     })}
    </>
     );
}
 
export default AllPlayers;
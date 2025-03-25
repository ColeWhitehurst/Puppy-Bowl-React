import { fetchAllPlayers, fetchSinglePlayer } from "../API";
import { removePlayer } from "../API";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const AllPlayers = ({players, setPlayers}) => {
    // const [players, setPlayers] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    // useEffect(() => {
    //     async function getAllPlayers() {
    //         const APIResponse = await fetchAllPlayers();
    //         if (APIResponse.success) {
    //             setPlayers(APIResponse.data.players);
    //         } else {
    //             setError(APIResponse.error.message);
    //         }
    //     }
    //     getAllPlayers();
    // }, []);

    const playersToDisplay = searchParam ? players.filter((player => player.name.toLowerCase().includes(searchParam))) : players;

    async function handleDetails(playerId) {
        const APIResponse = await fetchSinglePlayer(playerId);
        // console.log(APIResponse);
        navigate(`/${playerId}`)
    }

    async function handleDelete(e, id) {
        e.preventDefault();
        try {
            await removePlayer(id);
            setPlayers(players => players.filter(player => player.id !== id));
        } catch (error) {
            console.error("Cannot delete")
        }
    };

    return ( 
    <>
     <div>
        <label className="search">
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
                <img src={player.imageUrl} alt="puppy"/>
                <button className="details" onClick={()=>handleDetails(player.id)}>More Details</button><br /><br />
                <button className="delete" onClick={(e)=>handleDelete(e, player.id)}>Delete</button>
            </div>
        )
     })}
    </>
     );
}
 
export default AllPlayers;
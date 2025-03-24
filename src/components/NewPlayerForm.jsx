import { useState, useEffect } from 'react';
import { addNewPlayer, fetchAllPlayers } from '../API';


const NewPlayersForm = ({players, setPlayers}) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("field");
    const [image,setImage] = useState("");


    // useEffect(() => {
    //     setName("");
    //     async function refresh() {
    //         setPlayers(await fetchAllPlayers());
    //     }
    //     refresh();
    // }, []);
    

    return ( 
    <>
       <form className="form">
            <label htmlFor="name">
                Name:{" "}
                <input value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/>
            </label>
            
            <label>
                {" "}Breed:{" "}
                <input value={breed} placeholder="Enter Breed" onChange={(e) => setBreed(e.target.value)} required/>
            </label><br />

            <label htmlFor="status">{" "}Status:{" "}</label>
            <select name="status" onChange={((e) => setStatus(e.target.value))}>
                <option defaultValue value="field">Field</option>
                <option value="bench">Bench</option>
            </select>

            <label htmlFor="imageUrl">{" "}Image Link:{" "}</label>
            <input type="text" id="image"></input><br />

            <button onClick={()=>
                addNewPlayer({name: name, breed: breed, status: status})
            }>Submit</button>
        </form>
    </>
     );
}
 
export default NewPlayersForm;
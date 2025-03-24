import { useState } from 'react';
import { addNewPlayer } from '../API';

const NewPlayersForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");



    return ( 
    <>
       
            <label htmlFor="name">
                Name:{" "}
                <input value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/>
            </label>
            
            <label>
                {" "}Breed:{" "}
                <input value={breed} placeholder="Enter Breed" onChange={(e) => setBreed(e.target.value)} required/>
            </label><br />

            <label htmlFor="status">{" "}Status:{" "}</label>
            <select name="status">
                <option value="field">Field</option>
                <option value="bench">Bench</option>
            </select>

            <label htmlFor="imageUrl">{" "}Image Link:{" "}</label>
            <input type="text" id="image"></input><br />

            <button onClick={()=>addNewPlayer({name: name, breed: breed})}>Submit</button>
        
    </>
     );
}
 
export default NewPlayersForm;
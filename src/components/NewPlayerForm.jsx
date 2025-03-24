import { useState } from 'react';
import { addNewPlayer } from '../API';

const NewPlayersForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    // useEffect(() => {
    //     async function addPlayer() {
    //         const APIResponse = await addNewPlayer();
    //         if (APIResponse.success) {

    //         }
    //     }
    //     addPlayer();
    // }, [])


    return ( 
    <>
        <form className="newPlayer">
            <label htmlFor="name">
                Name:{" "}
                <input value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/>
            </label><br />
            
            <label>
                Breed:{" "}
                <input value={breed} placeholder="Enter Breed" onChange={(e) => setBreed(e.target.value)} required/>
            </label>

            <label htmlFor="status">Status:{" "}</label>
            <select name="status">
                <option value="field">Field</option>
                <option value="bench">Bench</option>
            </select><br />

            <label htmlFor="imageUrl">Image Link:{" "}</label>
            <input type="text" id="image"></input>

            <button type="submit">Submit</button>
        </form>
    </>
     );
}
 
export default NewPlayersForm;
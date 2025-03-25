import { useState, useEffect } from 'react';
import { addNewPlayer, fetchAllPlayers } from '../API';


const NewPlayersForm = ({players, setPlayers}) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("field");
    const [image,setImage] = useState("");
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, breed, status, image}),
            });
            window.location.reload();
        } catch (error) {
            setError(error.message);
        }
        setName("");
        setBreed("");
        setImage("");
    }
    

    return ( 
    <>
       <form className="form" onSubmit={handleSubmit}>
            <label>
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
            <input type="text" id="image" placeholder="Enter Link        " onChange={((e) =>setImage(e.target.value))}></input><br />

            <button type="submit">Submit</button>
        </form>
    </>
     );
}
 
export default NewPlayersForm;
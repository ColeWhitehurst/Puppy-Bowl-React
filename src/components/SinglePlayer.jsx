import { useEffect, useState } from 'react';
import { fetchSinglePlayer } from '../API';

const SinglePLayer = () => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function selectPlayer() {
            const APIResponse = await fetchSinglePlayer();
            if (APIResponse.success) {
                setPlayer(APIResponse.data.id)
            } else {
                setPlayer(APIResponse.error)
            }
        }
        selectPlayer();
    }, []);

    return ( 
        <div>
      {player && (
        <div>
          <p>
            <b>Name:</b> {player.name}
          </p>
          <p>
            <b>Breed:</b> {player.breed}
          </p>
          <p>
            <b>Status:</b> {player.status}
          </p>
          <p>
            <b>Picture:</b> {player.imageURL}
          </p>
        </div>
      )}
      <button>
        Back
      </button>
    </div>
     );
}
 
export default SinglePLayer;
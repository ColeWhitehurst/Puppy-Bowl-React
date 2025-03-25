import { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams, useNavigate } from "react-router-dom";

const SinglePLayer = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function selectPlayer() {
      const APIResponse = await fetchSinglePlayer(id);
    //   console.log("single player fetch call", APIResponse);
      setPlayer(APIResponse);
    }
    selectPlayer();
  }, []);

  return (
    <>
      <div className="player">
        {player && (
          <div className="puppy">
            <p>
              <b>Name:</b> {player.name}
            </p>
            <p>
              <b>Breed:</b> {player.breed}
            </p>
            <p>
              <b>Status:</b> {player.status}
            </p>
            <img src={player.imageUrl} alt="puppy" />
          </div>
        )}
      </div>
      <button className="back" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default SinglePLayer;

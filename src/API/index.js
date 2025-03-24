const API = `https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(API);
        const result = await response.json();
        return result;
        // console.log(json.data.players);
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API}/${playerId}`);
        const json = await response.json();
        // state.players.id = json.data.player.id;
        // console.log(json.data.player);
        console.log(json);
        
        return json.data.player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

export const addNewPlayer = async (playerObj) => {
   
    try {
        const response = await fetch(API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playerObj),
        });
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    };
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API}/${playerId}`, {
            method: 'DELETE',
        });
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};


const API = `https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(API);
        const json = await response.json();
        state.players = json.data.players;
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
        console.log(json.data.player);
        return json.data.player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

export const addNewPlayer = async (playerObj) => {
    playerObj.preventDefault();
    const newPlayer = {
        name: puppyForm.name.value,
        breed: puppyForm.breed.value,
        status: puppyForm.status.value,
        imageUrl: puppyForm.image.value,
    };
    // console.log(newPlayer);
    

    try {
        const response = await fetch(API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPlayer),
        });
        const json = await response.json();
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
    puppyForm.reset();
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API}/${playerId}`, {
            method: 'DELETE',
        });
        init();
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};
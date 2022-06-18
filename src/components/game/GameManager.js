export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("game", {})
        .then()
}

export const getGameTypes = () => {
    return fetch("gametypes", {})
        .then()
}

//f”MyValue: {myValue}”
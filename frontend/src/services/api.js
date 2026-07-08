const BASE_URL = import.meta.env.VITE_API_URL;

export async function getPlayer(id) {
    const response = await fetch(`${BASE_URL}/api/v1/player/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch player.");
    }

    return response.json();
}

export async function getPlayers(params) {
    const response = await fetch(`${BASE_URL}/api/v1/player?${params.toString()}`);

    if (!response.ok) {
        throw new Error("Failed to fetch players.");
    }

    return response.json();
}

export async function getTeam(abbr) {
    const response = await fetch(`${BASE_URL}/api/v1/team/tabb/${abbr.toUpperCase()}`);

    if (!response.ok) {
        throw new Error("Failed to fetch team.");
    }

    return response.json();
}
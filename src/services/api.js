import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = [
  "x-rapidapi-key: f84c4bfbc9msh6ec17799bb7b814p136410jsnbe0325355c8e",
  "x-rapidapi-host: cricket-live-line1.p.rapidapi.com",
];

export default getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };
  try {
    const response = await axios.request(options);
    console.log("response data", response.data);
    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("There was error fetching the data");
    throw error;
  }
};

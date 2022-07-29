import axios from "axios";

const limitPage = 27;

export const getCharacters = async (setState, page) => {
  try {
    const petition = await axios.get(
      `https://www.breakingbadapi.com/api/characters?limit=${limitPage}&offset=${
        page * limitPage
      }`
    );
    setState(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getCharacter = async (setState, id) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/characters/" + id
    );
    setState(petition.data[0]);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getEpisodes = async (setState) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/episodes"
    );
    setState(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getQuotes = async (setState, id) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/quotes/" + id
    );
    setState(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getDeaths = async (setState) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/deaths"
    );
    setState(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

import axios from "axios";

export const getCharacters = async (state) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/characters"
    );
    state(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getCharacter = async (state, id) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/characters/" + id
    );
    state(petition.data[0]);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getEpisodes = async (state) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/episodes"
    );
    state(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getQuotes = async (state) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/quotes"
    );
    state(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

export const getDeaths = async (state) => {
  try {
    const petition = await axios.get(
      "https://www.breakingbadapi.com/api/deaths"
    );
    state(petition.data);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("process done");
  }
};

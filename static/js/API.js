export default class API {
  async getCharacter(id) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
}

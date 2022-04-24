export default class serviceMorty {
  async getDataCharacters(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Fetch error chatacters');
    }
    return await response.json();
  }
  async getCharacter(name: string) {
    for (let i = 0; i < 3; i++) {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
      if (!response.ok) {
        throw new Error('Fetch error chatacters');
      }
      return await response.json();
    }
  }
}

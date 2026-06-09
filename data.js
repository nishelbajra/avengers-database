const characters = [
  {
    id: "iron-man",
    name: "Iron Man",
    realName: "Tony Stark",
    team: "Avengers",
    ability: "Powered armor suit with advanced weapons",
    firstAppearance: "Iron Man (2008)",
    description: "A genius billionaire who built a powered suit of armor to save the world.",
    image: "https://cdn.marvel.com/content/1x/002irm_ons_crd_03.jpg",
    threatLevel: "High"
  },
  {
    id: "captain-america",
    name: "Captain America",
    realName: "Steve Rogers",
    team: "Avengers",
    ability: "Super soldier strength, vibranium shield",
    firstAppearance: "Captain America: The First Avenger (2011)",
    description: "A WWII soldier transformed into the world's first super soldier.",
    image: "https://cdn.marvel.com/content/1x/003cap_ons_crd_03.jpg",
    threatLevel: "High"
  },
  {
    id: "thor",
    name: "Thor",
    realName: "Thor Odinson",
    team: "Avengers",
    ability: "God of Thunder, wields Mjolnir",
    firstAppearance: "Thor (2011)",
    description: "The Asgardian god of thunder and one of the most powerful Avengers.",
    image: "https://cdn.marvel.com/content/1x/004tho_ons_crd_03.jpg",
    threatLevel: "Cosmic"
  },
  {
    id: "black-widow",
    name: "Black Widow",
    realName: "Natasha Romanoff",
    team: "Avengers",
    ability: "Master spy, martial arts, Widow's Bite",
    firstAppearance: "Iron Man 2 (2010)",
    description: "A highly trained spy and assassin turned S.H.I.E.L.D. agent.",
    image: "https://cdn.marvel.com/content/1x/011blw_ons_crd_03.jpg",
    threatLevel: "Medium"
  },
  {
    id: "thanoss",
    name: "Thanos",
    realName: "Thanos",
    team: "Villain",
    ability: "Infinity Gauntlet, superhuman strength",
    firstAppearance: "Avengers: Infinity War (2018)",
    description: "A warlord obsessed with wiping out half of all life in the universe.",
    image: "https://cdn.marvel.com/content/1x/019tha_ons_crd_03.jpg",
    threatLevel: "Cosmic"
  }
];

function findCharacterById(id) {
  const normalizedId = String(id || '').trim().toLowerCase();

  return characters.find((character) => String(character.id).toLowerCase() === normalizedId);
}

module.exports = characters;
module.exports.characters = characters;
module.exports.findCharacterById = findCharacterById;
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.floor(Math.random() * 100) <= this.luck;
    }
  
    attackPokemon(pokemon) {
      if (this.isLucky()) {
        let damages = this.attack - pokemon.defense;
        pokemon.hp -= damages;
        console.log(
          `${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp ! ${pokemon.name} a désormais ${pokemon.hp}!`
        );
      } else {
        console.log(`${this.name} a raté son attaque !`);
      }
    }
  }
  
  let Rayquaza = new Pokemon("Rayquaza", 78, 56, 150, 77);
  let Arceus = new Pokemon("Arceus", 84, 49, 155, 63);
  
  while (Rayquaza.hp > 0 && Arceus.hp > 0) {
    Rayquaza.attackPokemon(Arceus);
    if (Arceus.hp <= 0) {
      console.log(`Arceus a perdu le combat, il est K.O.`);
      break;
    }
    Arceus.attackPokemon(Rayquaza);
    if (Rayquaza.hp <= 0) {
      console.log(`Arceus a perdu le combat, il est K.O.`);
      break;
    }
  }
  console.log("Le combat est terminé");
  
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _characterOne: Fighter;
  private _characterTwo: Fighter;

  constructor(characterOne: Fighter, characterTwo: Fighter) {
    super(characterOne);
    this._characterOne = characterOne;
    this._characterTwo = characterTwo;
  }

  fight(): number {
    let result = 0;
    while (this._characterOne.lifePoints > 0
      && this._characterTwo.lifePoints > 0) {
      this._characterOne.attack(this._characterTwo);
      this._characterTwo.attack(this._characterOne);

      if (this._characterOne.lifePoints <= 0) {
        result = -1;
      } else {
        result = 1;
      }
    }
    return result;
  }
}
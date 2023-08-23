import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _characterOne: Fighter;
  private _monster: (SimpleFighter | Fighter)[];

  constructor(characterOne: Fighter, monster: (SimpleFighter | Fighter)[]) {
    super(characterOne);
    this._characterOne = characterOne;
    this._monster = monster;
  }

  fight(): number {
    let result = 0;
    this._monster.forEach((m) => {
      while (this._characterOne.lifePoints > 0
        && m.lifePoints > 0) {
        this._characterOne.attack(m);
        m.attack(this._characterOne);
  
        if (this._characterOne.lifePoints <= 0) {
          result = -1;
        } else {
          result = 1;
        }
      }
    });
    return result;
  }
}
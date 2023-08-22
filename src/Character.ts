import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = Character.randomAttributeValue;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomAttributeValue;
    this._defense = Character.randomAttributeValue;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomAttributeValue,
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  static get randomAttributeValue(): number {
    return Math.ceil(Math.random() * 10);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    switch (true) {
      case damage > 0:
        this._lifePoints -= damage;
        break;
      default:
        this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += Character.randomAttributeValue;
    this._strength += Character.randomAttributeValue;
    this._dexterity += Character.randomAttributeValue;
    this._defense += Character.randomAttributeValue;

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength + Character.randomAttributeValue);
  }
}
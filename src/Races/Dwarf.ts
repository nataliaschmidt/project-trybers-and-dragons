import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._racesInstancesCount += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return this._racesInstancesCount;
  }
}

export default Dwarf;
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _archetypeInstancesCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._archetypeInstancesCount += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return this._archetypeInstancesCount;
  }
}
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

/// /////////////// PLAYERS /// ///////////////
const player1 = new Character('Selena');
player1.levelUp();
player1.levelUp();
const player2 = new Character('Frerin');
const player3 = new Character('Arthas');

/// /////////////// MONSTERS /// ///////////////
const monster1 = new Monster();
const monster2 = new Dragon();

/// /////////////// BATTLES /// ///////////////
const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  return battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
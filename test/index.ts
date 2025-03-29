'use strict';

import { expect } from 'chai';
import { ListParser } from '../src/index';

const testList = `
Folger Other Clone (2000 Points)

Adeptus Custodes
Solar Spearhead
Strike Force (2000 Points)

CHARACTERS

Blade Champion (145 Points)
  • 1x Vaultswords
  • Enhancements: Adamantine Talisman

Telemon Heavy Dreadnought (260 Points)
  • Warlord
  • Solar Spearhead Keywords: Character
  • 1x Arachnus storm cannon
  • 1x Armoured feet
  • 1x Spiculus bolt launcher
  • 1x Telemon caestus
  • 1x Twin plasma projector
  • Enhancements: Augury Uplink

OTHER DATASHEETS

Caladius Grav-tank (215 Points)
  • 1x Armoured hull
  • 1x Twin arachnus heavy blaze cannon
  • 1x Twin lastrum bolt cannon

Caladius Grav-tank (215 Points)
  • 1x Armoured hull
  • 1x Twin arachnus heavy blaze cannon
  • 1x Twin lastrum bolt cannon

Custodian Wardens (210 Points)
  • 4x Custodian Warden
     ◦ 4x Guardian spear
     ◦ 1x Vexilla

Prosecutors (40 Points)
  • 1x Prosecutor Sister Superior
     ◦ 1x Boltgun
     ◦ 1x Close combat weapon
  • 3x Prosecutor
     ◦ 3x Boltgun
     ◦ 3x Close combat weapon

Prosecutors (40 Points)
  • 1x Prosecutor Sister Superior
     ◦ 1x Boltgun
     ◦ 1x Close combat weapon
  • 3x Prosecutor
     ◦ 3x Boltgun
     ◦ 3x Close combat weapon

Prosecutors (40 Points)
  • 1x Prosecutor Sister Superior
     ◦ 1x Boltgun
     ◦ 1x Close combat weapon
  • 3x Prosecutor
     ◦ 3x Boltgun
     ◦ 3x Close combat weapon

Telemon Heavy Dreadnought (225 Points)
  • 1x Arachnus storm cannon
  • 1x Armoured feet
  • 1x Spiculus bolt launcher
  • 1x Telemon caestus
  • 1x Twin plasma projector

Venerable Contemptor Dreadnought (170 Points)
  • 1x Combi-bolter
  • 1x Contemptor combat weapon
  • 1x Multi-melta

Venerable Contemptor Dreadnought (170 Points)
  • 1x Combi-bolter
  • 1x Contemptor combat weapon
  • 1x Multi-melta

Venerable Contemptor Dreadnought (170 Points)
  • 1x Combi-bolter
  • 1x Contemptor combat weapon
  • 1x Multi-melta

ALLIED UNITS

Callidus Assassin (100 Points)
  • 1x Neural shredder
  • 1x Phase sword and poison blades

Exported with App Version: v1.29.0 (2), Data Version: v579
`;

describe('Basic list parsing', () => {

	it('parse a valid list', () => {

		const list = new ListParser();
		const parsedList = list.parse(testList);
		expect(parsedList.name).to.equal('Folger Other Clone', 'List name');
		expect(parsedList.faction).to.equal('Adeptus Custodes', 'Faction');
		expect(parsedList.detachment.name).to.equal('Solar Spearhead', 'Detachment');
		expect(parsedList.points).to.equal(2000, 'Points');
		expect(parsedList.battleSize).to.equal('Strike Force', 'Battle size');

		expect(parsedList.units[0].name).to.equal('Blade Champion', 'Unit name');
		expect(parsedList.units[0].points).to.equal(145, 'Unit points');
		expect(parsedList.units[0].category).to.equal('CHARACTERS', 'Unit category');
		expect(parsedList.units[0].models[0].name).to.equal('Blade Champion', 'Model name');
		expect(parsedList.units[0].models[0].count).to.equal(1, 'Model count');
		expect(parsedList.units[0].models[0].weapons[0].name).to.equal('Vaultswords', 'Weapon');
		expect(parsedList.units[0].models[0].weapons[0].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[0].models[0].enhancements[0]).to.equal('Adamantine Talisman', 'Enhancement');

		expect(parsedList.units[1].name).to.equal('Telemon Heavy Dreadnought', 'Unit name');
		expect(parsedList.units[1].points).to.equal(260, 'Unit points');
		expect(parsedList.units[1].category).to.equal('CHARACTERS', 'Unit category');
		expect(parsedList.units[1].models[0].name).to.equal('Telemon Heavy Dreadnought', 'Model name');
		expect(parsedList.units[1].models[0].count).to.equal(1, 'Model count');
		expect(parsedList.units[1].models[0].weapons[0].name).to.equal('Arachnus storm cannon', 'Weapon');
		expect(parsedList.units[1].models[0].weapons[0].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[1].models[0].weapons[1].name).to.equal('Armoured feet', 'Weapon');
		expect(parsedList.units[1].models[0].weapons[1].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[1].models[0].weapons[2].name).to.equal('Spiculus bolt launcher', 'Weapon');
		expect(parsedList.units[1].models[0].weapons[2].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[1].models[0].weapons[3].name).to.equal('Telemon caestus', 'Weapon');
		expect(parsedList.units[1].models[0].weapons[3].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[1].models[0].weapons[4].name).to.equal('Twin plasma projector', 'Weapon');
		expect(parsedList.units[1].models[0].weapons[4].count).to.equal(1, 'Weapon count');
		expect(parsedList.units[1].models[0].enhancements[0]).to.equal('Augury Uplink', 'Enhancement');
		expect(parsedList.units[1].models[0].warlord).to.equal(true, 'Warlord');


		expect(parsedList.units[4].name).to.equal('Custodian Wardens', 'Unit name');
		expect(parsedList.units[4].points).to.equal(210, 'Unit points');
		expect(parsedList.units[4].category).to.equal('OTHER DATASHEETS', 'Unit category');
		expect(parsedList.units[4].models[0].name).to.equal('Custodian Warden', 'Model name');
		expect(parsedList.units[4].models[0].count).to.equal(4, 'Model count');
		expect(parsedList.units[4].models[0].weapons[0].name).to.equal('Guardian spear', 'Weapon');
		expect(parsedList.units[4].models[0].weapons[0].count).to.equal(4, 'Weapon count');
	});

});

'use strict';

import { expect } from 'chai';
import { ListParser } from '../src/index';

describe('Basic list parsing', () => {
	it('throw an error if the list is empty string', () => {
		const list = new ListParser();
		expect(() => list.parse('')).to.throw('Invalid GW list string');
	});

	it('throw an error if list string does not have at least one "CHARACTERS" "BATTLELINE" "OTHER DATASHEETS" "ALLIED UNITS" lines', () => {
		const list = new ListParser();
		expect(() => list.parse('   ')).to.throw('Invalid GW list string');
	});

	it('parse a dummy valid list with no units', () => {
		const dummyList = `
Folger Other Clone

Adeptus Custodes
Solar Spearhead
Strike Force (2000 Points)

CHARACTERS
		`
		const list = new ListParser();
		const parsedList = list.parse(dummyList);
		expect(parsedList.name).to.equal('Folger Other Clone');
		expect(parsedList.faction).to.equal('Adeptus Custodes');
		expect(parsedList.detachment.name).to.equal('Solar Spearhead');
		expect(parsedList.points).to.equal(2000);
		expect(parsedList.battleSize).to.equal('Strike Force');
		expect(parsedList.units).to.be.empty;
	});

	it('parse a dummy valid list with one unit', () => {
		const dummyList = `
Folger Other Clone

Adeptus Custodes
Solar Spearhead
Strike Force (2000 Points)

CHARACTERS

Blade Champion (145 Points)
  • 1x Vaultswords
  • Enhancements: Adamantine Talisman
`
		const list = new ListParser();
		const parsedList = list.parse(dummyList);
		expect(parsedList.name).to.equal('Folger Other Clone', 'List name');
		expect(parsedList.faction).to.equal('Adeptus Custodes', 'Faction');
		expect(parsedList.detachment.name).to.equal('Solar Spearhead', 'Detachment');
		expect(parsedList.points).to.equal(2000, 'Points');
		expect(parsedList.battleSize).to.equal('Strike Force', 'Battle size');
		expect(parsedList.units).to.have.lengthOf(1, 'Units');
		expect(parsedList.units[0].name).to.equal('Blade Champion', 'Unit name');
		expect(parsedList.units[0].points).to.equal(145, 'Unit points');
		expect(parsedList.units[0].category).to.equal('CHARACTERS', 'Unit category');
		expect(parsedList.units[0].models).to.have.lengthOf(1, 'Models');
		expect(parsedList.units[0].models[0].name).to.equal('Blade Champion', 'Model name');
		expect(parsedList.units[0].models[0].count).to.equal(1, 'Model count');
		expect(parsedList.units[0].models[0].enhancements).to.have.lengthOf(1, 'Enhancements');
		expect(parsedList.units[0].models[0].enhancements[0]).to.equal('Adamantine Talisman', 'Enhancement');
		expect(parsedList.units[0].models[0].weapons).to.have.lengthOf(1, 'Weapons');
		expect(parsedList.units[0].models[0].weapons[0]).to.equal('Vaultswords', 'Weapon');
		expect(parsedList.units[0].models[0].weapons[0].count).to.equal(1, 'Weapon count');

	});

});

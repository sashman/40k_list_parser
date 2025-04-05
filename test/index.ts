'use strict';

import { expect } from 'chai';
import { ListParser } from '../src/index';
import * as fs from 'fs';
import chai from 'chai';
import chaiDeepEqualInAnyOrder from 'deep-equal-in-any-order';
import { Warhammer40kList } from '../src/list';


chai.use(chaiDeepEqualInAnyOrder);

describe('Basic list parsing', () => {
	it('parses gw_app_custodes_2000.txt', () => {
		const testList = fs.readFileSync(
			'test/example_lists/gw_app_custodes_2000.txt',
			'utf8'
		);

		const list = new ListParser();
		const parsedList = list.parse(testList);

		expect(parsedList).to.deep.equalInAnyOrder({
			name: 'Folger Other Clone',
			points: 2000,
			battleSize: 'Strike Force',
			battleSizePoints: 2000,
			faction: 'Adeptus Custodes',
			detachment: { name: 'Solar Spearhead' },
			units: [
				{
					name: 'Blade Champion',
					points: 145,
					category: 'CHARACTERS',
					models: [
						{
							name: 'Blade Champion',
							count: 1,
							weapons: [{ name: 'Vaultswords', count: 1 }],
							enhancements: ['Adamantine Talisman'],
							warlord: false,
						},
					],
				},
				{
					name: 'Telemon Heavy Dreadnought',
					points: 260,
					category: 'CHARACTERS',
					models: [
						{
							name: 'Telemon Heavy Dreadnought',
							count: 1,
							weapons: [
								{ name: 'Arachnus storm cannon', count: 1 },
								{ name: 'Armoured feet', count: 1 },
								{ name: 'Spiculus bolt launcher', count: 1 },
								{ name: 'Telemon caestus', count: 1 },
								{ name: 'Twin plasma projector', count: 1 },
							],
							enhancements: ['Augury Uplink'],
							warlord: true,
						},
					],
				},
				{
					name: 'Caladius Grav-tank',
					points: 215,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Caladius Grav-tank',
							count: 1,
							weapons: [
								{ name: 'Armoured hull', count: 1 },
								{ name: 'Twin arachnus heavy blaze cannon', count: 1 },
								{ name: 'Twin lastrum bolt cannon', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Caladius Grav-tank',
					points: 215,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Caladius Grav-tank',
							count: 1,
							weapons: [
								{ name: 'Armoured hull', count: 1 },
								{ name: 'Twin arachnus heavy blaze cannon', count: 1 },
								{ name: 'Twin lastrum bolt cannon', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Custodian Wardens',
					points: 210,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Custodian Warden',
							count: 4,
							weapons: [
								{ name: 'Guardian spear', count: 4 },
								{ name: 'Vexilla', count: 1 },
							],
						},
					],
				},
				{
					name: 'Prosecutors',
					points: 40,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Prosecutor Sister Superior',
							count: 1,
							weapons: [
								{ name: 'Boltgun', count: 1 },
								{ name: 'Close combat weapon', count: 1 },
							],
						},
						{
							name: 'Prosecutor',
							count: 3,
							weapons: [
								{ name: 'Boltgun', count: 3 },
								{ name: 'Close combat weapon', count: 3 },
							],
						},
					],
				},
				{
					name: 'Prosecutors',
					points: 40,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Prosecutor Sister Superior',
							count: 1,
							weapons: [
								{ name: 'Boltgun', count: 1 },
								{ name: 'Close combat weapon', count: 1 },
							],
						},
						{
							name: 'Prosecutor',
							count: 3,
							weapons: [
								{ name: 'Boltgun', count: 3 },
								{ name: 'Close combat weapon', count: 3 },
							],
						},
					],
				},
				{
					name: 'Prosecutors',
					points: 40,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Prosecutor Sister Superior',
							count: 1,
							weapons: [
								{ name: 'Boltgun', count: 1 },
								{ name: 'Close combat weapon', count: 1 },
							],
						},
						{
							name: 'Prosecutor',
							count: 3,
							weapons: [
								{ name: 'Boltgun', count: 3 },
								{ name: 'Close combat weapon', count: 3 },
							],
						},
					],
				},
				{
					name: 'Telemon Heavy Dreadnought',
					points: 225,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Telemon Heavy Dreadnought',
							count: 1,
							weapons: [
								{ name: 'Arachnus storm cannon', count: 1 },
								{ name: 'Armoured feet', count: 1 },
								{ name: 'Spiculus bolt launcher', count: 1 },
								{ name: 'Telemon caestus', count: 1 },
								{ name: 'Twin plasma projector', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Venerable Contemptor Dreadnought',
					points: 170,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Venerable Contemptor Dreadnought',
							count: 1,
							weapons: [
								{ name: 'Combi-bolter', count: 1 },
								{ name: 'Contemptor combat weapon', count: 1 },
								{ name: 'Multi-melta', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Venerable Contemptor Dreadnought',
					points: 170,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Venerable Contemptor Dreadnought',
							count: 1,
							weapons: [
								{ name: 'Combi-bolter', count: 1 },
								{ name: 'Contemptor combat weapon', count: 1 },
								{ name: 'Multi-melta', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Venerable Contemptor Dreadnought',
					points: 170,
					category: 'OTHER DATASHEETS',
					models: [
						{
							name: 'Venerable Contemptor Dreadnought',
							count: 1,
							weapons: [
								{ name: 'Combi-bolter', count: 1 },
								{ name: 'Contemptor combat weapon', count: 1 },
								{ name: 'Multi-melta', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
				{
					name: 'Callidus Assassin',
					points: 100,
					category: 'ALLIED UNITS',
					models: [
						{
							name: 'Callidus Assassin',
							count: 1,
							weapons: [
								{ name: 'Neural shredder', count: 1 },
								{ name: 'Phase sword and poison blades', count: 1 },
							],
							enhancements: [],
							warlord: false,
						},
					],
				},
			],
			meta: {
				footer: {
					full: 'Exported with App Version: v1.29.0 (2), Data Version: v579',
					app_version: '1.29.0 (2)',
					data_version: '579',
				},
			},
		} as Warhammer40kList);
	});
});

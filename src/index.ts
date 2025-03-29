'use strict';

import { Warhammer40kList } from './list';
import * as peggy from 'peggy';
import * as fs from 'fs';
import * as path from 'path';

const parser = peggy.generate(
	fs.readFileSync(path.resolve(__dirname, './grammar/GWListGrammar.peggy'), 'utf8'),
	{		
		cache: true,
		allowedStartRules: ['start'],
	}
)

function parseGWList(list_string: string): Warhammer40kList {
	const parsedList = parser.parse(list_string);

	const units = parsedList['section'].map((section: any) => {
		return section['units'].map((unit: any) => {
			const unitName = unit['unit']['name'];
			const unitPoints = unit['unit']['points'];
			const unitCategory = section['category'];

			const unitHasModels = unit['subitems'].some((subitem: any) => subitem['type'] === 'model');

			const subitems = unit['subitems']
				.filter((subitem: Record<string, string>) => subitem['type'] === 'model')
				.map((model: any) => {
					const modelName = model['name'];
					const modelCount = model['quantity'];
					const modelWeapons = model['subitems']
						.map((weapon: any) => {
							return {
								name: weapon['name'],
								count: weapon['quantity']
							}
						})

					return {
						name: modelName,
						count: modelCount,
						weapons: modelWeapons,
					}
				}).flat()

			const singleModelUnitModels = [
				{
					name: unitName,
					count: 1,
					weapons: unit['subitems']
						.filter((subitem: any) => subitem['type'] === 'unit_item' && !isNaN(subitem['quantity']))
						.map((weapon: any) => {
							return {
								name: weapon['name'],
								count: weapon['quantity']
							}
						}),
					enhancements: unit['subitems']
						.filter((subitem: any) => subitem['type'] === 'enhancements')
						.map((enhancement: any) => enhancement['name']),
					warlord: unit['subitems'].some((subitem: any) => subitem['type'] === 'warlord'),			
				}
			]

			return {
				name: unitName,
				points: unitPoints,
				category: unitCategory,
				models: unitHasModels ? subitems : singleModelUnitModels,
			}
		})
	}).flat()

	const list: Warhammer40kList = {
		name: parsedList['header']['list_name'],
		points: parsedList['header']['points'],
		battleSize: parsedList['header']['battle_size'],
		battleSizePoints: parsedList['header']['battle_size_points'],
		faction: parsedList['header']['faction_name'],
		detachment: {
			name: parsedList['header']['detachments_name'],
		},
		units,
		meta: {
			footer: parsedList['footer']
		}
	}
		
	return list;
}

export class ListParser {
	/* Public Instance Methods */

	public parse(list_string: string): Warhammer40kList {		
		return parseGWList(list_string);
	}
}

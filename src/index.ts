'use strict';

import { Warhammer40kList } from './list';

function parseGWList(list_string: string): Warhammer40kList {

	// valid GW list must start with 4 non blank lines and contrain at least one "CHARACTERS" "BATTLELINE" "OTHER DATASHEETS" "ALLIED UNITS" lines
	// use regex to check the list format
	// if the list is not valid return an error
	// if the list is valid parse the list

	if (!list_string || list_string.length === 0) {
		throw new Error('Invalid GW list string');
	}

	// check for at least one of each of the following lines
	const valid_list = /CHARACTERS|BATTLELINE|OTHER DATASHEETS|ALLIED UNITS/;
	if (!valid_list.test(list_string)) {
		throw new Error('Invalid GW list string');
	}
	
	// split the list into lines and remove empty lines
	const lines = list_string.split('\n').filter((line) => line.trim().length > 0);
	const listName = lines[0].trim();
	const listFaction = lines[1].trim();
	const listDetachment = lines[2].trim();
	// use regex to extract the battle size from the 4th line, everything before the first '('
	const battleSize = lines[3].match(/.*(?=\()/);
	if (!battleSize) {
		throw new Error('Invalid GW list string');
	}

	const listBattleSize = battleSize[0].trim();
	// use regex to extract the points from the 3rd line
	const points = lines[3].match(/\d+/);
	const listPoints = points ? parseInt(points[0]) : 0;

	// parse the list in an event driven way, an event could be a start or end of a unit, a model, a weapon
	// a unit always starts with a line that ends with 'Points)'
	// repalce all • with a single whitespace, do not trim the lines
	// make sure to rely on whitespace to determine the start of models or weapons
	// if a line starts with 4 spaces it can be a model of a unit or a weapon
	// if a line starts with 6 spaces it is a weapon
	// if a line that looks like a model has no weapons it is a weapon
	// all models must have at least one weapon
	// if a unit has not models create a model that replicates the unit

	
	return {
		name: listName,
		faction: listFaction,
		detachment: { name: listDetachment },
		battleSize: listBattleSize,
		points: listPoints,
		units: units
	};
}

export class ListParser {
	/* Public Instance Methods */

	public parse(list_string: string): Warhammer40kList {		
		return parseGWList(list_string);
	}
}

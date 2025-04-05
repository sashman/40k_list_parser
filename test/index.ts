'use strict';

import { expect } from 'chai';
import { ListParser } from '../src/index';
import * as fs from 'fs';
import chai from 'chai';
import chaiDeepEqualInAnyOrder from 'deep-equal-in-any-order';
import { Warhammer40kList } from '../src/list';


chai.use(chaiDeepEqualInAnyOrder);

describe('Basic list parsing', () => {
	const parser = new ListParser();

	[
		{file: 'gw_app_custodes_2000'}
	].forEach(({file}) => {
		it(`parses ${file}`, () => {
			
			const testList = fs.readFileSync(`test/example_lists/${file}.txt`, 'utf8');
			const parsedList = parser.parse(testList);
			const expectedList = JSON.parse(fs.readFileSync(`test/example_lists/${file}.json`, 'utf-8')) as Warhammer40kList;

			expect(parsedList).to.deep.equalInAnyOrder(expectedList);
		});
	});

});

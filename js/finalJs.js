import { graphql } from 'graphql';
import {schema1,schema2,root1,root2,data} from './graphql.js';
import {buildDom} from './buildDom';

window.onload = function () {
	let oContext1= document.getElementById('context1');
	let oContext2 = document.getElementById('context2');

	graphql(schema1,'{share}',root1).then((response) => {
		buildDom(response,'share','olFirst',oContext1);

	}).then(() => {
		graphql(schema2,'{shared}',root2).then((response) => {
		buildDom(response,'shared','olSecond',oContext2);
	})
	});
	
};
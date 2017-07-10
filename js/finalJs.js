import { graphql } from 'graphql';
import {schema1,root1,data,getObj} from './graphql.js';
import {buildDom} from './buildDom';

window.onload = function () {
	let oContext1= document.getElementById('context1');
	let oContext2 = document.getElementById('context2');

	var query =`
		{
			getObj {
				share
				shared
  		}
 	} 
 	`;
	graphql(schema1,query,root1).then((response) => {
		buildDom(response,'share','olFirst',oContext1);

		buildDom(response,'shared','olSecond',oContext2);

	})
};
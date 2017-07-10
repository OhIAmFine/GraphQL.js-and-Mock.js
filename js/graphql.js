import { buildSchema } from 'graphql';
import {data} from './mock.js';


var schema1 = buildSchema(`
    	type Query {
   		share: [[String]]
 	 	}
	`);
	var schema2 = buildSchema(`
    	type Query {
   		shared: [[String]]
 	 	}
	`);
	var root1 = {
		share : () => {
			return data.share;
		}
	};
	var root2 = {
		shared :() =>{
			return data.shared;
		}
	};
export {schema1,schema2,root1,root2,data};
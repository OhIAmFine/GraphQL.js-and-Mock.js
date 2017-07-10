import { buildSchema } from 'graphql';
import {data} from './mock.js';


var schema1 = buildSchema(`
		type obj{
		share: [[String]],
   		shared: [[String]]
		},
    	type Query {
   		getObj : obj
 	 	}
	`);
	class getObj  {
		share() {
			return data.share;
		}

		shared() {
			return data.shared;
		}
	}
	var root1 = {
		getObj : () => {
			return new getObj();
		}
	};
export {schema1,root1,data,getObj};
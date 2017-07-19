import { buildSchema } from 'graphql';
import {data} from './mock.js';


var schema = buildSchema(`
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
	var root = {
		getObj : () => {
			return new getObj();
		}
	};
export {schema,root,data,getObj};
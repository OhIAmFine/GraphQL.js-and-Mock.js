const Mock = require('mockjs');
const Random = Mock.Random;
	  Random.sentence(5);
	  Random.url('http');
	  Random.name();
const template = {
		'share|1-10':[['@sentence(5)','@url(http)','@name']],
		'shared|1-10':[['@sentence(5)','@url(http)','@name']]
	}

const data = Mock.mock(template);
	  // console.log(JSON.stringify(data,null,4));
export {data};
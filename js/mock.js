const Mock = require('mockjs');
const Random = Mock.Random;
	  Random.sentence(5);
	  Random.url('http');
	  Random.name();
//定义模板
const template = {
		'share|1-10':[['@sentence(5)','@url(http)','@name']],
		'shared|1-10':[['@sentence(5)','@url(http)','@name']]
	}
//mock数据导出
const data = Mock.mock(template);
export {data};
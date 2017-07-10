export function buildDom(response,shareObj,calssName,target){
		let data = response.data[shareObj];
		console.log(JSON.stringify(data));
		let str = '';
		let oUl = document.createElement('ol');
		oUl.className = calssName;
		for (let i = 0;i < data.length; i++){
			str += '<li><strong>' + shareObj +' data :</strong> ' + data[i][0] + ' <strong>website from : </strong>'+data[1] + ' <strong>author is:</strong> ' + data[i][2] +'</li>'  ;
		}
		oUl.innerHTML = str;
		target.appendChild(oUl);
	};
let webroot = 'https://buy.123biu.com/';
let popular;
let city = '广州';
let isCityChange = false;
let currentSeller = "";
let webUrl = "";
let amapKey = '870a49b7b09c53a9c2b046056c39579e';
let qqMapKey = 'GAFBZ-F6KLP-755D5-V5C4P-75SH2-5SFMG';
let sellerList = [{
		id:1,
		name: "北京中关村",
		latitude: "33.8704155509",
		longitude: "109.2041015625"
	},
	{
		id:2,
		name: "广州天河电脑城",
		latitude: "23.1332",
		longitude: "113.336182"
	},
	{
		id:3,
		name: "深圳华强北",
		latitude: "22.542381",
		longitude: "114.082993"
	},{
		id:4,
		name: "汕头市潮南区成田镇",
		latitude: "23.187889",
		longitude: "116.488739"
	},{
		id:4,
		name: "汕头市潮南区成田镇",
		latitude: 23.187889,
		longitude: 116.488739
	}
]

function phoneCall(phone) {
	
	uni.makePhoneCall({
		phoneNumber: phone,
		success: function(res) {
			console.log(res);
			console.log('拨打电话成功!');
		}
	})
}


function request(params) {
	wx.request({
		url: webUrl + params.url,
		method: params.method,
		data: params.data,
		header: params.header,
		success: (res) => {
			params.success(res);
		},
		fail: (err) => {
			params.fail(err);
		}
	})
}
//数组排序,根据对象属性排序'
function sortByProp(prop) {
	return function(obj1, obj2) {
		var val1 = obj1[prop];
		var val2 = obj2[prop];
		if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
			val1 = Number(val1);
			val2 = Number(val2);
		}
		if (val1 < val2) {
			return -1;
		} else if (val1 > val2) {
			return 1;
		} else {
			return 0;
		}
	}
}
function Convert(obj){
	for(let i in obj){
		obj[i].latitude = parseFloat(obj[i].latitude);
		obj[i].longitude = parseFloat(obj[i].longitude);
	}
	return obj;
}
export default {
	city,
	isCityChange,
	request,
	amapKey,
	qqMapKey,
	sellerList,
	sortByProp,
	currentSeller,
	webroot,
	Convert,
	popular,
	phoneCall
}
//

//var customerAverages = {
//	//location: [minCust, maxCust, Avg Cookies]
//	Seattle: [23, 65, 6.3],
//	Tokyo: [3, 24, 1.2],
//	Dubai: [11, 38, 3.7],
//	Paris: [20, 38, 2.3],
//	Lima: [2, 16, 4.6],
//	randCustomer: function (minCustomer, maxCustomer) {
//		//
//		return (Math.random() * (maxCustomer - minCustomer)) + minCustomer;
//	}
//}

var seattle = {
	minCustomer: 23,
	maxCustomer: 65,
	avgCookies: 6.3,
	randCustomer: function () {
		var customerCount = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
		return customerCount;
	},
	salesHourly: function() {
		var hourlySales = [];
		var customerCount = 0;
		var totalCookies = 0;
		for (var i = 6; i < 20; i++){
			customerCount = this.randCustomer();
			console.log(customerCount);
			totalCookies+=Math.floor(customerCount*this.avgCookies);
			if (i < 12){
				hourlySales.push(i + 'am: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
			} else if (i = 12) {
				hourlySales.push('12pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
			} else {
				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
			}
		}
		hourlySales.push('Total: ' + totalCookies + ' cookies');
		return hourlySales;
	},
}

// var tokyo = {
// 	minCustomer: 3,
// 	maxCustomer: 24,
// 	avgCookies: 1.2,
// 	salesHourly: [],
// 	randCustomer: function () {
// 		var customerCount = Math.floor((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
// 		return customerCount;
// 	},
// 	salesHourly: function() {
// 		var hourlySales = [];
// 		var customerCount = 0;
// 		var totalCookies = 0;
// 		for (var i = 6; i < 20; i++){
// 			customerCount = this.randCustomer();
// 			totalCookies+=Math.floor(customerCount*this.avgCookies);
// 			if (i < 12){
// 				hourlySales.push(i + 'am: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else if (i = 12) {
// 				hourlySales.push('12pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else {
// 				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			}
// 		}
// 		hourlySales.push('Total: ' + totalCookies + ' cookies');
// 		return hourlySales;
// 	},
// }

// var dubai = {
// 	minCustomer: 11,
// 	maxCustomer: 38,
// 	avgCookies: 3.7,
// 	salesHourly: [],
// 	randCustomer: function () {
// 		var customerCount = Math.floor((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
// 		return customerCount;
// 	},
// 	salesHourly: function() {
// 		var hourlySales = [];
// 		var customerCount = 0;
// 		var totalCookies = 0;
// 		for (var i = 6; i < 20; i++){
// 			customerCount = this.randCustomer();
// 			totalCookies+=Math.floor(customerCount*this.avgCookies);
// 			if (i < 12){
// 				hourlySales.push(i + 'am: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else if (i = 12) {
// 				hourlySales.push('12pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else {
// 				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			}
// 		}
// 		hourlySales.push('Total: ' + totalCookies + ' cookies');
// 		return hourlySales;
// 	},
// }

// var paris = {
// 	minCustomer: 20,
// 	maxCustomer: 38,
// 	avgCookies: 2.3,
// 	salesHourly: [],
// 	randCustomer: function () {
// 		var customerCount = Math.floor((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
// 		return customerCount;
// 	},
// 	salesHourly: function() {
// 		var hourlySales = [];
// 		var customerCount = 0;
// 		var totalCookies = 0;
// 		for (var i = 6; i < 20; i++){
// 			customerCount = this.randCustomer();
// 			totalCookies+=Math.floor(customerCount*this.avgCookies);
// 			if (i < 12){
// 				hourlySales.push(i + 'am: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else if (i = 12) {
// 				hourlySales.push('12pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else {
// 				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			}
// 		}
// 		hourlySales.push('Total: ' + totalCookies + ' cookies');
// 		return hourlySales;
// 	},
// }

// var lima = {
// 	minCustomer: 2,
// 	maxCustomer: 16,
// 	avgCookies: 4.6,
// 	salesHourly: [],
// 	randCustomer: function () {
// 		var customerCount = Math.floor((Math.random() * (this.minCustomer - this.minCustomer)) + this.minCustomer);
// 		return customerCount;
// 	},
// 	salesHourly: function() {
// 		var hourlySales = [];
// 		var customerCount = 0;
// 		var totalCookies = 0;
// 		for (var i = 6; i < 20; i++){
// 			customerCount = this.randCustomer();
// 			totalCookies+=Math.floor(customerCount*this.avgCookies);
// 			if (i < 12){
// 				hourlySales.push(i + 'am: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else if (i = 12) {
// 				hourlySales.push('12pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			} else {
// 				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*this.avgCookies) + ' cookies');
// 			}
// 		}
// 		hourlySales.push('Total: ' + totalCookies + ' cookies');
// 		return hourlySales;
// 	},
// }
//tokyo, dubai, paris, lima

function sales_DOM() {
	var locations = document.getElementById("locations");
	var stores = [seattle];

	for(var i = 0; i < stores.length; i++){
		//create the estimated spreadhseet
		var salesArr = stores[i].salesHourly();

		//create seperate sections for each store
		var section = document.createElement("section");
		locations.append(section);
		section.textContent = stores[i].name;
		section.setAttribute("id", stores[i].name);

		//append an unorder list to each store
		var ul = document.createElement("ul");
		section.append(ul);

		//for each store ul, create hourly breakdown
		for(var j = 0; j < salesArr.length; j++){
			var li = document.createElement("li");
			li.textContent = salesArr[j];
			ul.append(li);
		}
	}
}

sales_DOM();
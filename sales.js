'using strict'

// var customerAverages = {
// 	//location: [name, minCust, maxCust, Avg Cookies]
// 	seattle: ['Seattle', 23, 65, 6.3],
// 	tokyo: ['Tokyo', 3, 24, 1.2],
// 	dubai: ['Dubai', 11, 38, 3.7],
// 	paris: ['Paris', 20, 38, 2.3],
// 	lima: ['Lima', 2, 16, 4.6],
// 	randCustomer: function (name) {
// 		return Math.floor(Math.random() * (name[2] - name[1])) + name[1];
// 	},
// 	salesHourly: function(name) {
// 		var hourlySales = [];
// 		var customerCount = 0;
// 		var totalCookies = 0;
// 		for (var i = 6; i < 20; i++){
// 			customerCount = this.randCustomer(name);
// 			totalCookies+=Math.floor(customerCount*name[3]);
// 			if (i < 12){
// 				hourlySales.push(i + 'am: ' + Math.floor(customerCount*=name[3]) + ' cookies');
// 			} else if (i == 12) {
// 				hourlySales.push('12pm: ' + Math.floor(customerCount*name[3]) + ' cookies');
// 			} else {
// 				hourlySales.push(i-12 + 'pm: ' + Math.floor(customerCount*name[3]) + ' cookies');
// 			}
// 		}
// 		hourlySales.push('Total: ' + totalCookies + ' cookies');
// 		return hourlySales;
// 	},
// }

// function sales_DOM() {
// 	var locations = document.getElementById("locations");
// 	var stores = [customerAverages.seattle, customerAverages.tokyo, customerAverages.dubai, customerAverages.paris, customerAverages.lima];

// 	for(var i = 0; i < stores.length; i++){
// 		//create the estimated spreadhseet
// 		var salesArr = salesHourly(stores[i]);

// 		//create seperate sections for each store
// 		var divSet = document.createElement("div");
// 		locations.append(divSet);
// 		divSet.setAttribute("id", stores[i][0]);
// 		divSet.setAttribute("class", "storeLocations")
// 		var divHeader = document.createElement('h1');
// 		divSet.append(divHeader);
// 		divHeader.textContent = stores[i][0];
// 		divHeader.setAttribute("id", stores[i][0]);
// 		divHeader.setAttribute("class", "storeLocations");

// 		//append an unorder list to each store
// 		var ul = document.createElement("ul");
// 		divSet.append(ul);
// 		ul.setAttribute("id", stores[i][0]);
// 		ul.setAttribute("class", "storeLocations");

// 		//for each store ul, create hourly breakdown
// 		for(var j = 0; j < salesArr.length; j++){
// 			var li = document.createElement("li");
// 			li.textContent = salesArr[j];
// 			ul.append(li);
// 		}
// 	}
// }

function Store(name, minCust, maxCust, avgCookies){
	this.name = name;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCookies = avgCookies;
	this.salesArr = [];
	stores.push(this);
}

Store.prototype.renderStoreRow = function(){
	//find data table
	var dataTable = document.getElementById("dataTable");

	//Create store sales row
	var storeRow = document.createElement('tr');
	dataTable.append(storeRow);
	var storeNameCell = document.createElement('th');
	storeNameCell.textContent = this.name;
	storeRow.append(storeNameCell);
	for (var j = 6; j < 21; j++){
		var storeSales = document.createElement('td');
		storeSales.textContent = this.salesArr[j-6];
		storeRow.append(storeSales);
	}
}

var stores = [];
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

times_DOM();

for (var i = 0; i < stores.length; i++) {
	salesHourly(stores[i]);
	stores[i].renderStoreRow();
}

totals_DOM();

function salesHourly(storeName) {

	var customerCount = 0;
	var totalCookies = 0;
	var trafficRates = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
	for (var i = 6; i < 20; i++){
		customerCount = Math.floor(trafficRates[i-6] * storeName.maxCust);
		totalCookies += Math.floor(customerCount*storeName.avgCookies);
		storeName.salesArr.push(Math.floor(customerCount * storeName.avgCookies));
	}
	storeName.salesArr.push(totalCookies);
	return
}

function times_DOM() {
	var locations = document.getElementById("locations");

	//create the data table tr is row, th is header, td is data cell
	var table = document.createElement("table");
	locations.append(table);
	table.setAttribute("id", "dataTable");

	//create the time headers row
	var timesRow = document.createElement('tr');
	table.append(timesRow);
	var emptyCell = document.createElement('td');
	emptyCell.setAttribute('id', 'emptyCell');
	timesRow.append(emptyCell);
	for (h = 6; h < 20; h++){
		var timeSlot = document.createElement('th');
		if (h < 12){
			timeSlot.textContent = (h + ':00am');
			timesRow.append(timeSlot);
		} else if (h == 12) {
			timeSlot.textContent = ('12:00pm');
			timesRow.append(timeSlot);
		} else {
			timeSlot.textContent = (h-12 + ':00pm');
			timesRow.append(timeSlot);
		}
	}
	var timeSlot = document.createElement('th');
	timeSlot.textContent = 'Daily Location Total';
	timesRow.append(timeSlot);
}

function totals_DOM(){
	var dataTable = document.getElementById('dataTable');
	//create the total row
	var totalRow = document.createElement('tr');
	dataTable.append(totalRow);
	var totalHeader = document.createElement('th');
	totalHeader.textContent = 'Totals';
	totalRow.append(totalHeader);
	for (var h = 6; h < 21; h++){
		var totalCount = document.createElement('td');
		var tally = 0;
		for (var s = 0; s < stores.length; s++){
			tally += stores[s].salesArr[h-6];
		}
		totalCount.textContent = tally;
		totalRow.append(totalCount);
	}
}


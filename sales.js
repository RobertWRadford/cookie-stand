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
	this.tossersNeeded = [];
	stores.push(this);
}

Store.prototype.renderStoreRow = function(){
	//find data table
	var dataTable = document.getElementById("dataTable");
	var otherDataTable = document.getElementById('anotherDataTable');

	//Create store sales row
	let storeRowCookie = dataTable.insertRow(-1);
	// var storeRowCookie = document.createElement('tr');
	// dataTable.append(storeRowCookie);
	storeRowCookie.setAttribute('class', 'storeRow');
	let storeRowTosser = otherDataTable.insertRow(-1);
	// var storeRowTosser = document.createElement('tr');
	// otherDataTable.append(storeRowTosser);
	storeRowTosser.setAttribute('class', 'storeRow');

	//attach cells
	var storeNameCell = document.createElement('th');
	var storeNameCellDup = document.createElement('th');
	storeNameCell.textContent = this.name;
	storeNameCellDup.textContent = this.name;
	storeRowCookie.append(storeNameCell);
	storeRowTosser.append(storeNameCellDup);
	for (var j = 6; j < 21; j++){
		var storeSales = document.createElement('td');
		storeSales.textContent = this.salesArr[j-6];
		storeRowCookie.append(storeSales);
		var storeTossers = document.createElement('td');
		storeTossers.textContent = this.tossersNeeded[j-6];
		storeRowTosser.append(storeTossers);
	}
}

var stores = [];
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

function salesHourly(storeName) {

	var totalCookies = 0;
	var totalTossers = 0;
	var trafficRates = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
	for (var i = 6; i < 20; i++){
		//customerCount = Math.floor((Math.random() * (storeName.maxCust - storeName.minCust)) + storeName.minCust);
		// customerCount = Math.max(Math.floor(trafficRates[i-6] * storeName.maxCust), storeName.minCust);
		var customerCount = Math.floor( ( ( storeName.maxCust - storeName.minCust ) * trafficRates[i-6] ) + storeName.minCust );
		if (customerCount / 20 <= 2) {
			storeName.tossersNeeded.push(2);
			totalTossers += 2;
		} else {
			storeName.tossersNeeded.push(Math.ceil(customerCount / 20));
			totalTossers += Math.ceil(customerCount / 20);
		}
		totalCookies += Math.floor(customerCount * storeName.avgCookies);
		storeName.salesArr.push(Math.floor(customerCount * storeName.avgCookies));
	}
	storeName.salesArr.push(totalCookies);
	storeName.tossersNeeded.push(totalTossers);
	return
}

function times_DOM() {
	var locations = document.getElementById("locations");

	//create the data table tr is row, th is header, td is data cell
	var table = document.createElement("table");
	locations.append(table);
	table.setAttribute("id", "dataTable");
	var seperatingHeader = document.createElement('h1')
	seperatingHeader.textContent = 'Tossers Needed For Each Store By Hour';
	locations.append(seperatingHeader);
	var secondTable = document.createElement('table');
	locations.append(secondTable);
	secondTable.setAttribute("id", "anotherDataTable")

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
	let timesRowNew = timesRow.cloneNode(true);
	secondTable.append(timesRowNew);
}

function totals_DOM(){
	//tables
	var dataTable = document.getElementById('dataTable');
	var otherDataTable = document.getElementById('anotherDataTable')

	//create the total row for dataTable and otherDataTable
	var totalRowCookies = document.createElement('tr');
	dataTable.append(totalRowCookies);
	var totalRowTossers = document.createElement('tr');
	otherDataTable.append(totalRowTossers);

	//headers for each total row
	var totalHeader = document.createElement('th');
	totalHeader.textContent = 'Totals';
	var totalHeaderDup = document.createElement('th');
	totalHeaderDup.textContent = 'Totals';
	totalRowCookies.append(totalHeader);
	totalRowTossers.append(totalHeaderDup);
	
	loop1: for (var h = 6; h < 21; h++){
		var totalCountCookies = document.createElement('td');
		var totalCountTossers = document.createElement('td');
		var tallyCookies = 0;
		var tallyTossers = 0;

		loop2: for (var s = 0; s < stores.length; s++){
			tallyCookies += stores[s].salesArr[h-6];
			tallyTossers += stores[s].tossersNeeded[h-6];
		}

		totalCountCookies.textContent = tallyCookies;
		totalRowCookies.append(totalCountCookies);
		totalCountTossers.textContent = tallyTossers;
		totalRowTossers.append(totalCountTossers);
	}
}

//function calls for table
times_DOM();
for (var i = 0; i < stores.length; i++) {
	salesHourly(stores[i]);
	stores[i].renderStoreRow();
}
totals_DOM();


var newStoreSubmit = document.getElementById('newStoreRegistry');

function registerNewStore() {
	//fetch table elements
	var cookieTable = document.getElementById('dataTable');
	var tosserTable = document.getElementById('anotherDataTable');
	//Pull field entries
	var storeVarName = document.getElementById('storeCity').value;
	var newStoreMinCust = parseInt(document.getElementById('minCustomers').value);
	var newStoreMaxCust = parseInt(document.getElementById('maxCustomers').value);
	var newStoreAvgCookie = parseFloat(document.getElementById('avgCookies').value);
	//check if store already exists
	var oldStore = false;
	for (var i = 0; i < stores.length; i++) {
		if (stores[i].name == storeVarName) {
			oldStore = true;
			var indexVal = i+1;
			//if it exists modify the object values
			stores[i].minCust = newStoreMinCust;
			stores[i].maxCust = newStoreMaxCust;
			stores[i].avgCookies = newStoreAvgCookie;
			stores[i].salesArr = [];
			stores[i].tossersNeeded = [];
			console.log(stores[i]);
			//run sales hourly for the store
			salesHourly(stores[indexVal-1]);
			//find the current table row index for that store
			//remove the current row and attach a new row in that index
			cookieTable.deleteRow(indexVal);
			let storeRowCookie = cookieTable.insertRow(indexVal);
			tosserTable.deleteRow(indexVal);
			let storeRowTosser = tosserTable.insertRow(indexVal);
			//duplicated portion of render method that adds the data cells
			var storeNameCell = document.createElement('th');
			var storeNameCellDup = document.createElement('th');
			storeNameCell.textContent = stores[i].name;
			storeNameCellDup.textContent = stores[i].name;
			storeRowCookie.append(storeNameCell);
			storeRowTosser.append(storeNameCellDup);
			for (var j = 6; j < 21; j++){
				var storeSales = document.createElement('td');
				storeSales.textContent = stores[i].salesArr[j-6];
				storeRowCookie.append(storeSales);
				var storeTossers = document.createElement('td');
				storeTossers.textContent = stores[i].tossersNeeded[j-6];
				storeRowTosser.append(storeTossers);
			}
			//remove totals row to retally
			cookieTable.deleteRow(-1);
			tosserTable.deleteRow(-1);
		}
	}
	if (oldStore == false) {
	//initialize new store object
	eval('var ' + storeVarName + '= new Store(\'' + storeVarName + '\',' + newStoreMinCust + ',' + newStoreMaxCust + ',' + newStoreAvgCookie + ')');
	//run salesHourly for the new store
	salesHourly(stores[stores.length-1]);
	//remove total row
	cookieTable.deleteRow(-1);
	tosserTable.deleteRow(-1);
	//render new store row
	stores[stores.length-1].renderStoreRow();
	}
	//retally totals
	totals_DOM();
}

if (newStoreSubmit.addEventListener) {
	newStoreSubmit.addEventListener('submit', function(e) {
		e.preventDefault();
		registerNewStore();
	}, false);
} else {
	newStoreSubmit.attachEvent('onsubmit', function(e) {
		e.preventDefault();
		registerNewStore();
	});
}
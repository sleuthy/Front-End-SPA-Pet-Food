console.log("It works");

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
	console.log("The dog food data has loaded.");
	var data = JSON.parse(event.target.responseText);
	console.log("The dog food data is: ", data);

	showData(data);
}

function showData(data){
	var brandDiv = document.getElementById("all-dog-food");
	var brands = data.dog_brands;
	var foodData = "";

	for (var i = 0; i < brands.length; i++){
		foodData += `<h3>Name: ${brands[i].name}</h3>`
		var types = brands[i].types;
			for (var j = 0; j < types.length; j++){
				foodData += `<h4>Type: ${types[j].type}</h4>`
			var volumes = types[i].volumes;
			for (var k = 0; k < volumes.length; k++){
				foodData += `<p>Volume: ${volumes[k].name}</p><p>Price: $${volumes[k].price}</p>`
			}
		}
	}

	brandDiv.innerHTML += foodData;
	console.log("foodData", foodData);
}

function dataRequestFailed(event){
	console.log("An error prevented the data from loading.");
}

dataRequest.open("GET", "fooddata.json");
dataRequest.send();


var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequest2Error);

function dataRequest2LoadComplete(event){
	console.log("The cat food data has loaded.");
	var catData = JSON.parse(event.target.responseText);
	console.log("The cat food data is: ", catData);

	showData2(catData);
}

function showData2(catData){
	var catBrandDiv = document.getElementById("all-cat-food");
	var catBrands = catData.cat_brands;
	var catFoodData = "";

	for (var i = 0; i < catBrands.length; i++){
		catFoodData += `<h3>Name: ${catBrands[i].name}</h3>`
		var catTypes = catBrands[i].types;
			for (var j = 0; j < catTypes.length; j++){
				catFoodData += `<h4>Type: ${catTypes[j].type}</h4>`
			var catVolumes = catTypes[i].volumes;
			for (var k = 0; k < catVolumes.length; k++){
				catFoodData += `<p>Volume: ${catVolumes[k].name}</p><p>Price: $${catVolumes[k].price}</p>`
			}
		}
	}

	catBrandDiv.innerHTML += catFoodData;
	console.log("catFoodData", catFoodData);
}

function dataRequest2Error(event){
	console.log("dataRequest2 has error");
}

dataRequest2.open("GET", "catdata.json");
dataRequest2.send();



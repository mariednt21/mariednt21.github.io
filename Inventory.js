function setData(index){
	let object = document.getElementsByClassName('object');
	console.log(object[index].innerHTML);
	let storage1 = localStorage.getItem('inventory1');
	let storage2 = localStorage.getItem('inventory2');
	let storage3 = localStorage.getItem('inventory3');
	let storage4 = localStorage.getItem('inventory4');

	var check = false;
    var keys = Object.keys(localStorage);
	console.log(keys);

	for(var key of keys){
		console.log("key : "+key+" : Value : " +localStorage.getItem(key));

		if(object[index].innerHTML == localStorage.getItem(key))
		{
			alert("You already took that item");
			window.location.reload();
			check = true;
		}
	}

if(check == false)
{
	if(storage1 == null){
		localStorage.setItem('inventory1',object[index].innerHTML);
	}
	else if(storage2 == null){
		localStorage.setItem('inventory2',object[index].innerHTML);
	}
	else if(storage3 == null){
		localStorage.setItem('inventory3',object[index].innerHTML);
	}
	else if(storage4 == null){
		localStorage.setItem('inventory4',object[index].innerHTML);
	}
	else{
		console.log("No space remaining in inventory");
		alert("No space remaining in inventory");
	}
}

}

function getData(){
	var keys = Object.keys(localStorage);
	console.log(keys);

	for(var key of keys){
		console.log("key : "+key+" : Value : " +localStorage.getItem(key));
	}
}

function deleteData(key){
	localStorage.removeItem(key);
}


function checkData(object,link,message){

var check = false;

   var keys = Object.keys(localStorage);
	console.log(keys);

	for(var key of keys){
		console.log("key : "+key+" : Value : " +localStorage.getItem(key));
		if(localStorage.getItem(key) == object)
		{
			deleteData(key);
			document.getElementById("link").href = link;
			console.log("Element delete from inventory");
			check = true;
		}
	}
	if(check == false)
	{
		alert(message);
	}

}

function deleteInventory()
{
   var keys = Object.keys(localStorage);

	for(var key of keys){

		if(localStorage.getItem(key) != null)
		{
			deleteData(key);
		}
	}
}
/*

var inventory = [];
var object = 'coucou';
localStorage.setItem("item1","chat");
localStorage.setItem("item2","cool");


var lol = document.getElementsByTagName('button');
lol[0].addEventListener('click', function(){

	console.log("page 2");
	localStorage.setItem("item3","chat");
	sessionStorage.setItem("item4","time");

inventory.push('coton');
console.log(inventory);
});


var promptText = prompt('hibou lol');

function addObject(object){

	inventory.push(object,'chaise','chien','ece');
}




addObject(object);
console.log(inventory);


// Supprimer un element de l'inventaire
var index = -1;

for(var i = 0; i < inventory.length ; i++)
{
	if( 'chaise' == inventory[i])
	{
		index = i;
	}
}
console.log(index);
inventory.splice(index,1);
console.log(inventory);
*/


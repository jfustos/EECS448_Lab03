var duckList;
function initDuckList()
{
	// set up the ducks doubly linked list
	var duck      = { url:"../img/duck.jpg",      list:null };
	var mallard   = { url:"../img/Mallard2.jpg",  list:null };
	var uglyDuck  = { url:"../img/uglyDuck.jpg",  list:null };
	var duckTales = { url:"../img/duckTales.jpg", list:null };
	var daffyDuck = { url:"../img/daffyDuck.jpg", list:null };

	duck.list      = { next:mallard,   prev:daffyDuck };
	mallard.list   = { next:uglyDuck,  prev:duck      };
	uglyDuck.list  = { next:duckTales, prev:mallard   };
	duckTales.list = { next:daffyDuck, prev:uglyDuck  };
	daffyDuck.list = { next:duck,      prev:duckTales };
		
	// duck starts at the head
	return duck;
}

duckList = initDuckList();

function prev()
{
	var image = document.getElementById("duckImages");
	duckList = duckList.list.prev;
	image.src = duckList.url;
	return;
}

function next()
{
	var image = document.getElementById("duckImages");
	duckList = duckList.list.next;
	image.src = duckList.url;
	return;
}

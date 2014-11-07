window.addEventListener('load',function(){
	var xhr = new XMLHttpRequest();
	xhr.open('get','./options.json',false);
//	xhr.send()
	var options = //JSON.parse(xhr.responseText);
{
	head: [
		{next:'interest', value:"I'm interested in"},
		{next:'interest', value:"I want to study"},
		{next:'profession', value:"I want to be"},
	],
	interset: [
		{next: undefined, value:"programming"},
		{next: undefined, value:"graphics Design"},
		{next: undefined, value:"mathematics"},
	],
	profession: [
		{next: undefined, value:"a programmer"},
		{next: undefined, value:"a web designer"},
		{next: 'pokemon', value:"the very best"},
	],
	pokemon: [
		{next: undefined, value:"like no one ever was.  To catch them is my real test.  To train them is my cause"},
	],
	background: [
		{id:"cf29a5df9d45e176eeff809388b46c3a", value:"#00f", display:"Blue"},
	],
	style: [
		
	],
	none: [],
};
	var form = document.getElementById('form');

	function addDropDown(opts){
		var dropDown = document.createElement('select');
		for (var i in opts){
			var option = opts[i];
			var element = document.createElement('option');
			element.innerHTML = option.value;
			element.id = option.id;
			dropDown.appendChild(element);
		}
		var next = {
			remove: undefined,
			dropDown: undefined,
		}
		dropDown.addEventListener('change',function(){
			console.log(this.selectedOptions[0].value);
			next.remove = function(){
				//form.remove()
			}
			
			
		});
		form.appendChild(dropDown);
	}
	addDropDown(options.head)
});

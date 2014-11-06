window.addEventListener('load',function(){
	var xhr = new XMLHttpRequest();
	xhr.open('get','./options.json',false);
//	xhr.send()
	var options = //JSON.parse(xhr.responseText);
	{
	head: {
		{id:"557dc2ed05f2c2dc677967a90828021e", next:'interest', value:"I'm interested in"},
		{id:"0e32740b5ca002653dc59ebc03e6ffc8", next:'interest', value:"I want to study"},
	},
	interset: [
		{id:"13a64ac4f4b7d658642e461c7e48e969", next: undefined, value:"Programming"},
		{id:"13a64ac4f4b7d658642e461c7e48e969", next: undefined, value:"Graphics Design"},
		{id:"13a64ac4f4b7d658642e461c7e48e969", next: undefined, value:"Mathematics"},
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
				
			}
			
			
		});
		form.appendChild(dropDown);
	}
	addDropDown(options.head)
});

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
	interest: [
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
		{value:"#00f", display:"Blue"},
	],
	style: [
		
	],
	none: [],
};
	var form = document.getElementById('form');

	function addDropDown(opts){
		var self = {
			remove: function(){
					form.removeChild(self.element);
					if (self.next) self.next.remove();
				},
			element: document.createElement('select'),
			next: undefined,
		}
		
		//Add options to selection
		for (var i in opts){
			var element = document.createElement('option');
			element.innerHTML = opts[i].value;
			self.element.appendChild(element);
		}
		
		//Default selection is unselected
		var defaultSelection = document.createElement('option')
		self.element.appendChild(defaultSelection);
		defaultSelection.selected = true;
		defaultSelection.disabled = true;
		
		self.element.addEventListener('change',function(){
			console.log(this.selectedOptions[0].value);
			if (self.next)
				self.next.remove();
			if (opts[this.selectedIndex].next)
				self.next = addDropDown(options[opts[this.selectedIndex].next]);
		});
		form.appendChild(self.element);
		return self
	}
	addDropDown(options.head)
});

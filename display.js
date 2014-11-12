
addEventListener('load',function(){
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
	var index = 'head';
	location.href.split('?',2)[1]  //The characters after the "?" in the url
		.replace(/([^=&]+)=([^=&]+)(?:&|$)/g,function(_,key,value){ //Loop over "(key1)=(value1)&(key2)=(value2)&..." in string
			if (key.toLowerCase() == 'background')
				document.body.className += ' ' + value;
			else if (key.toLowerCase() == 'font')
				document.body.className += ' ' + value;
			else {
				var opt = options[index][value];
				document.body.appendChild(document.createElement('div')) //No semicolon //create a new line of text
					.innerHTML = opt.value; //Add text to the line we created
				index = opt.next;
			}
			return "";
		});
});
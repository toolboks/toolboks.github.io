---
layout: default
title: Bookmarklet creator
---

<script type="text/javascript">
	var scripts = [
		{
			title: 'Blank bookmarklet',
			script: `/*write your JavaScript here*/`
		},
		{
			title: 'Webpage to Markdown Link',
			script: `var getSelectionText = () => {
	var text = '';
	if (window.getSelection){
		text = window.getSelection().toString();
	}
	return text;
};
var clip = getSelectionText();

var texttocopy = ((clip)?clip+' ':'')+\`[\${document.title}](\${window.location})\`;

prompt('Copy the text:', texttocopy);`
		},
		{
			title: 'Save to Pocket',
			script: `window.open('https://getpocket.com/edit?url='+window.location);`
		},
		{
			title: 'Open via Hypothes.is',
			script: `window.open('https://via.hypothes.is/'+window.location);`
		}
	];

	var updateLink = () => {
		var link = document.querySelector('div#bookmarklet a');
		link.href = 'javascript:(function(){'+document.forms.textinput.script.value+'})();';
		link.innerText = document.forms.textinput.title.value;
	};

	document.addEventListener('DOMContentLoaded', e => {
		scripts.forEach((s,i)=>{
			console.log(s);
			document.getElementById('templates').innerHTML += `<li><button name="${i}" class="flatbtn">${s.title}</button></li>`;
		});

		if(localStorage.bookmarklet_script){
			document.forms.textinput.script.value = localStorage.bookmarklet_script;
		} else {
			localStorage.bookmarklet_script = document.forms.textinput.script.value;
		}
		if(localStorage.bookmarklet_title){
			document.forms.textinput.title.value = localStorage.bookmarklet_title;
		} else {
			localStorage.bookmarklet_title = document.forms.textinput.title.value;
		}
		updateLink();

		document.forms.textinput.script.addEventListener('keyup', e => {
			localStorage.bookmarklet_script = e.target.value;
			updateLink();
		}, false);

		document.forms.textinput.title.addEventListener('keyup', e => {
			localStorage.bookmarklet_title = e.target.value;
			updateLink();
		}, false);

		document.getElementById('templates').addEventListener('click', e => {
			if(e.target.name){
				var id = parseInt(e.target.name);
				document.forms.textinput.script.value = scripts[id].script;
				localStorage.bookmarklet_script = document.forms.textinput.script.value;
				document.forms.textinput.title.value = scripts[id].title;
				localStorage.bookmarklet_title = document.forms.textinput.title.value;
				updateLink();
			}
		}, false);
	}, false);
</script>

<style type="text/css">

	form[name = 'textinput'] {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		margin: 0;
	}

	form[name = 'textinput'] fieldset {
		border: none;
		box-shadow: .2em .2em .5em gray;
		background-color: lightgray;
		box-sizing: border-box;
		height: calc(100% - .5em);
		margin: 0 0 .5em 0;
		display: flex;
		flex-direction: column;

	}

	form[name = 'textinput'] input {
		width: 100%;
		border: solid 1px black;
	}

	form[name = 'textinput'] textarea {
		width: 100%;
		border: solid 1px black;
		height: calc(100% - 1em);
	}

	form[name = 'textinput'] span {
		display: block;
	}

	div#bookmarklet a {
		text-decoration: none;
	}

	ul#templates {
		list-style: none;
		margin: 0 .5em;
		padding: 0;
	}

	div#bookmarklet {
		padding: 0 .5em;
		flex: 1;
	}

	div#templ {
		padding: 0 .5em;
		flex: 1;
	}

	div#form {
		flex: 3;
		height: 100%;
	}

	.flatbtn {
		display: inline-block;
		text-align: center;
		margin: .5em;
		padding: .5em;
		border: solid 1px black;
		background-color: lightgray;
		color: black;
		box-shadow: .1em .1em .2em gray;
		box-sizing: border-box;
	}
	.flatbtn:active {
		box-shadow: 0em 0em .2em gray;
	}

</style>

<div style="display:flex;height: 100%;">
	<div id="templ">
		<p>Pick one of the templates:</p>
		<ul id="templates"></ul>
	</div>
	<div id="form">
		<form name="textinput">
			<fieldset>
				<label style="flex:none"><span>Title</span><input name="title" type="text" value="Bookmarklet" /></label>
				<label style="flex:1"><span>Script</span><textarea name="script"></textarea></label>
			</fieldset>
		</form>
	</div>
	<div id="bookmarklet">
		<p>Click the boolmarklet to test. Drag the bookmarklet to you toolbar</p>
		<p><a href="" class="flatbtn">Bookmarklet</a></p>
	</div>
</div>
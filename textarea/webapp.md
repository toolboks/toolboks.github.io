---
layout: webapp
title: textarea
headers : ['<link rel="manifest" href="manifest.webmanifest"/>']
---
<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function(e){
		document.forms.textinput.addEventListener('keyup', function(e) {
			localStorage.textarea_text = document.forms.textinput.text.value;
		}, false);
		if(localStorage.textarea_text){
			document.forms.textinput.text.value = localStorage.textarea_text;
		} else {
			localStorage.textarea_text = '';
		}
	}, false);
</script>
<form name="textinput">
	<textarea name="text"></textarea>
</form>
<style type="text/css">
	form[name = 'textinput'] {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	form[name = 'textinput'] textarea {
		display: flex;
		width: calc(100% - .4em);
		height: calc(100% - .4em);
		box-sizing: border-box;
		margin: .2em;
	}
</style>

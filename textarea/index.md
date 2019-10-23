---
layout: default
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
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	form[name = 'textinput'] textarea {
		box-sizing: border-box;
		margin: .2em;
		flex: 1;
		border: 1px solid black;
		background-color: transparent;
	}
</style>

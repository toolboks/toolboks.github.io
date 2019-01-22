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
<form style="width:100%; height:100%; box-sizing:border-box;" name="textinput">
	<textarea style="width:calc(100% - .4em); box-sizing:border-box; height:calc(100% - .4em); margin:.2em;" name="text"></textarea>
</form>

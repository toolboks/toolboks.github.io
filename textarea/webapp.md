---
layout: webapp
title: textarea
headers : ['<link rel="manifest" href="manifest.webmanifest"/>','<link rel='stylesheet' href='/textarea/webapp.css' />']
---
<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function(e){
		
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/textarea/sw.js', { scope: '/textarea/' }).then(function(reg) {
				if(reg.installing) {
					console.log('Service worker installing');
				} else if(reg.waiting) {
					console.log('Service worker installed');
				} else if(reg.active) {
					console.log('Service worker active');
				}

			}).catch(function(error) {
				// registration failed
				console.log('Registration failed with ' + error);
				});
		}

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
	}
</style>

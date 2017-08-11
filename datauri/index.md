---
layout: default
title: Data URI creator
---
<script type="text/javascript">
	var updatelink = ()=>{

		var text = localStorage.datauri_text;
		var base64 = '';

		if(localStorage.datauri_base64 == 'true'){
			text = window.btoa(text);
			base64 = ';base64';
		}

		document.links.link.attributes['href'].value = 'data:' + localStorage.datauri_mime + base64 + ',' + text;
	};

	document.addEventListener('DOMContentLoaded', ()=>{
		var form = document.forms.content;

		form.addEventListener('submit', e=>{
			e.preventDefault();
		}, false);

		if(localStorage.datauri_text){
			form.text.value = localStorage.datauri_text;
		} else {
			localStorage.datauri_text = form.text.value;
		}
		if(localStorage.datauri_base64){
			form.base64.value = localStorage.datauri_base64;
		} else {
			localStorage.datauri_base64 = form.base64.value;
		}
		if(localStorage.datauri_mime){
			form.mime.value = localStorage.datauri_mime;
		} else {
			localStorage.datauri_mime = form.mime.value;
		}
		updatelink();

		form.text.addEventListener('keyup', e=>{
			localStorage.datauri_text = e.target.value;
			updatelink();
		}, false);
		form.base64.addEventListener('change', e=>{
			localStorage.datauri_base64 = e.target.checked;
			updatelink();
		}, false);
		form.mime.addEventListener('blur', e=>{
			localStorage.datauri_mime = e.target.value;
			updatelink();
		}, false);

		form.file.addEventListener('change', e=>{
			var fr = new FileReader();
			
			fr.addEventListener('loadend', e=>{
				document.links.link.href = e.target.result;
			}, false);

			fr.readAsDataURL(e.target.files[0]);
		}, false);
	},false);
</script>

<style type="text/css">
	form[name = 'content'] {
		flex: 3;
		display: flex;
		flex-direction: column;
		padding: 0 0 .5em 0;
	}

	fieldset {
		display: flex;
		flex-direction: column;
	}

	form[name = 'content'] label {
		display: flex;
		flex-direction: row;
	}

	form[name = 'content'] span {
		flex: 1;
	}

	form[name = 'content'] input, form[name = 'content'] textarea {
		flex: 4;
	}

	form[name = 'content'] input[type = 'checkbox'] {
		flex: none;
	}

	div#link {
		flex: 1;
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
		text-decoration: none;
	}
	.flatbtn:active {
		box-shadow: 0em 0em .2em gray;
	}

</style>

<div style="display:flex;height: 100%;">
	<form name="content">
		<fieldset style="flex: 1">
			<legend>Text</legend>
			<label style="flex: 1"><span>Content</span><textarea name="text"></textarea></label>
			<label><span>Base64</span><input type="checkbox" name="base64"/></label>
			<label><span>MIME</span><input type="text" name="mime" list="mimetypes" placeholder="ex: text/html" /></label>
		</fieldset>
		<fieldset name="fs2">
			<legend>File</legend>
			<input type="file" name="file"/>
		</fieldset>
		<datalist id="mimetypes">
			<option value="text/html" />
			<option value="text/plain" />
			<option value="text/xml" />
			<option value="image/svg+xml" />
		</datalist>
	</form>
	<div id="link">
		<p>Right-click and copy link location or left-click for opening in a new tab.</p>
		<p><a href="#" target="_blank" name="link" class="flatbtn">Link to your data</a></p>
	</div>
</div>
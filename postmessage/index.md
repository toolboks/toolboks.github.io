---
layout: default
title: postmessage
---
<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', e => {
		document.forms.postmessage.addEventListener('submit', e => {
      e.preventDefault();
			let iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage(e.target.message.value, '*');
	});
  window.addEventListener('message', e => {
    console.log(e.data);
  });
</script>
<iframe src="/postmessage/echo.html"></iframe>
<form name="postmessage">
  <label>Message:<input name="message" type="text" required></label>
  <button>Post message</button>
</form>

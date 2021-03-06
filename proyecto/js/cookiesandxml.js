// Sirve para establecer o modificar el valor de una cookie
function setCookie(cname, cvalue, exdays) { // cookie name, cookie value, dias de validez
    var d = new Date();
    
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    
    var expires = "expires="+d.toUTCString();
    
    document.cookie = cname + "=" + cvalue + "; " + expires;  // Aqui es donde se escribe la cookie
    
}

//Sirve para recuperar el valor almacenado para una cookie
function getCookie(cname) { // cookie name
    var name = cname + "=";
    var ca = document.cookie.split(';'); // Splitea los pares key (clave) / value (valor) name1=valor1;name2=valor2
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

// Sirve para borrar una cookie
function deleteCookie(cname) { // cookie name
      
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";  // Así es como se borra una cookie
    
}

//Sirve para cargar un fichero xml. Devuelve un objeto xml
function loadXMLDoc(filename)
{
	let xhttp;

	if (window.XMLHttpRequest)
	  {
	  xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
} 

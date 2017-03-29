//Browser Support Code
function papar_task(module){
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
           s=ajaxRequest.responseText;
		   //alert(s);
		   arr=s.split("|");
 		   document.getElementById("divTask").innerHTML = arr[0];
 		   document.getElementById("divFilename").innerHTML = arr[1];
	   }
	}
	ajaxRequest.open("GET", "ajax/papar_task.php?module="+ module + "&time="+new Date().getTime(), true);
	ajaxRequest.send(null); 
} //papar_task


function show_group(session,semester,course){

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

           document.getElementById("divGroup").innerHTML=s;

           document.getElementById("divLecturer").innerHTML="";

           document.getElementById("divTotalOffer").innerHTML="";

	   }

	}
	ajaxRequest.open("GET", "ajax/papar_group.php?session="+session+"&semester="+semester+"&course=" + course, true);

	ajaxRequest.send(null); 

} //papar_periksa





function show_grp_info(session,semester,group){

	var ajaxRequest;  // The variable that makes Ajax possible!

	//alert("session:"+session+" semester:"+semester+" group:"+group);

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

		  // alert(s);

		   arr=s.split("|");

           document.getElementById("divLecturer").innerHTML=arr[0];

           document.getElementById("divTotalOffer").innerHTML=arr[1];

	   }

	}

	ajaxRequest.open("GET", "ajax/papar_group_info.php?session="+session+"&semester="+semester+"&group=" + group, true);

	ajaxRequest.send(null); 

} //papar_periksa


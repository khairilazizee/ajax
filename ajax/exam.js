function d(bil,cr,cw,fe){
    //alert(bil);
    //alert(cr);
    //alert(sId);
    //alert(cw);
    //alert(fe);
    x = document.getElementById("txtCourseWork"+bil).value * cw;
    y = document.getElementById("txtFinalExam"+bil).value * fe;
    
    if(x=="" && y==""){
        x = 0;
        y = 0;
    }
    
    
    //alert(y);
    z = parseFloat(x) + parseFloat(y);
    
    //alert(z);
    
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
 		   document.getElementById("txtTotal"+bil).innerHTML = arr[0];
 		   document.getElementById("txtGrade"+bil).innerHTML = arr[1]; 
                   document.getElementById("txtCredit"+bil).innerHTML = arr[2]; 
	   }
	}
	ajaxRequest.open("GET", "ajax/exam_entry.php?markah="+ z + "&credit="+cr+"&bil="+bil);
	ajaxRequest.send(null); 
} //papar_task

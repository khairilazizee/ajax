<!-- 

//Browser Support Code

function papar_periksa(kod){

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

		   var arr=s.split("|");

           opener.document.getElementById("txtPeriksa").value=kod;

 		   opener.document.getElementById("divNamaPeperiksaan").innerHTML = arr[0];

 		   opener.document.getElementById("divTarikhPeperiksaan").innerHTML = arr[1];

 		   opener.document.getElementById("divTempat").innerHTML = arr[2];

 		   opener.document.getElementById("divGred").innerHTML = arr[3];

 		   opener.document.getElementById("divTK").innerHTML = arr[4];

 		   opener.document.getElementById("divSesi").innerHTML = arr[5];

           window.close();

	   }

	}

	ajaxRequest.open("GET", "ajax/papar_periksa.php?kod=" + kod, true);

	ajaxRequest.send(null); 

} //papar_periksa



function save_max_credit(sesi,semester,code,maxcredit){

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

		   arr=s.split("|");

		   //alert(arr[0]);

           document.getElementById("txtMaxCredit").value=arr[1];

           window.close();

	   }

	}

	//alert("sesi:"+sesi+" semester:"+semester+" code:"+code+" maxcredit:"+maxcredit);

	ajaxRequest.open("GET", "ajax/save_max_credit.php?sesi=" + sesi + "&semester=" + semester + "&code="+code+"&maxcredit="+maxcredit, true);

	ajaxRequest.send(null); 

} //papar_periksa



function add_subject(kod,faculty,value){

//####### NAEIM ADD 30/01/2013 module: CourseRegistration task:course ############

	if(document.frmcourse.txtCourse.value==""){

		alert('Please select subject.')

		document.frmcourse.txtCourse.focus()

		return false;

	}

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

		   	var arr=s.split("|");

		  	document.getElementById("divTableSubject").innerHTML = arr[0];

			document.getElementById("divCboCourse").innerHTML = arr[1];//ajaxRequest.responseText;

	   }

	}

	ajaxRequest.open("GET", "ajax/papar_subjek.php?kod=" + kod + "&subjek=" + value + "&faculty=" +faculty, true);

	ajaxRequest.send(null); 

} //add_subject



function add_subject_semester(kodprogram,session,semester,part,subject,mode){

//####### NAEIM ADD 30/01/2013 module: CourseRegistration task:program ############

//28/2/2013 PIE ADD mode to handle study mode part time/full time

	if(document.frmprogramme.txtCourse.value==""){

		alert('Please select subject.')

		document.frmprogramme.txtCourse.focus()

		return false;

	}

	if (mode[0].checked)

	  type="F";

    else

      type="P";	

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

		   	var arr=s.split("|");

		  	document.getElementById("divTableSemesterSubject").innerHTML = arr[0]; //line 125

			document.getElementById("divCboCourse").innerHTML = arr[1];//line 108

	   }

	}

	ajaxRequest.open("GET", "ajax/papar_subjekpersemester.php?kod=" + kodprogram + "&session="+ session + "&semester=" +semester + "&part="+ part + "&subject=" +subject+"&type=F", true);

	ajaxRequest.send(null); 

} //add_subject



function select_listmenu(value,key,session,semester,kod,studymode){

//####### NAEIM ADD 04/02/2013 module: CourseRegistration task:program ############

//alert('1sdsfsdgdfgdf');

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

	   		var arr=s.split("|");

			if(key=='1'){

		  		document.getElementById("divcboSemester").innerHTML = arr[0]; //line 93

				document.getElementById("divTableSemesterSubject").innerHTML = arr[1]; //line 93

			}else if(key=='2'){

				document.getElementById("divMaxCredit").innerHTML = arr[0]; //line 108

				document.getElementById("divcboPart").innerHTML = arr[1]; //line 108

				document.getElementById("divTableSemesterSubject").innerHTML = arr[2]; //line 93

				//document.getElementById("divFeesAddButton").innerHTML = arr[3]; //line 93

				document.getElementById("divTableFeesCrdHrs").innerHTML = arr[4];

				document.getElementById("txtRegistrationFees").innerHTML = arr[5];

				document.getElementById("txtCreditHourFees").innerHTML = arr[6];

				document.getElementById("divChkType").innerHTML = arr[7];

			    document.getElementById("divCboCourse").innerHTML = arr[8];//ajaxRequest.responseText;

				document.getElementById("divAddSubject").innerHTML = arr[9];

			}

			else if(key=='3'){

				document.getElementById("divCboCourse").innerHTML = arr[0]; //line 108\

				document.getElementById("divTableSemesterSubject").innerHTML = arr[1]; //line 93

				document.getElementById("divAddSubject").innerHTML = arr[2];

			}	

			if(value==""){

			document.frmprogramme.txtSession.selectedIndex = 0;

	

			document.getElementById("divcboSemester").innerHTML = "";

			document.getElementById("divcboPart").innerHTML = "";

			document.getElementById("divCboCourse").innerHTML = "";

			document.getElementById("divTableSemesterSubject").innerHTML = "";

			document.getElementById("divFeesAddButton").innerHTML = "";

			document.getElementById("divTableFeesCrdHrs").innerHTML = "";

			document.getElementById("divAddSubject").innerHTML = "";

			

			document.frmprogramme.txtFees.value = "";

			document.frmprogramme.txtFeesParttime.value = "";

			}

		}

	}

	mode="F";

	// if (key=="3"){

	//    if (studymode[0].checked)

	//       mode="F";

	//    else

 //          mode="F";	   

	// }

	ajaxRequest.open("GET", "ajax/papar_listmenu.php?value=" + value + "&key="+ key + "&session=" + session + "&semester=" + semester + "&kodprogramme=" +kod+"&type=F", true);

	ajaxRequest.send(null); 

} //select_listmenu





function add_fees(kodprogram,session,semester){

//####### NAEIM ADD 30/01/2013 module: CourseRegistration task:program ############

	if(document.frmprogramme.txtFees.value==""){

		alert('Please insert programme fees (full time).')

		document.frmprogramme.txtFees.focus()

		return false;

	}

	if(document.frmprogramme.txtFeesPartTime.value==""){

		alert('Please insert programme fees (part time).')

		document.frmprogramme.txtFeesPartTime.focus()

		return false;

	}

	

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

		   	var arr=s.split("|");

		  	document.getElementById("divTableFeesCrdHrs").innerHTML = arr[0]; //line 125

	   }

	}

	var fees = document.frmprogramme.txtFees.value;

	var feespt = document.frmprogramme.txtFeesPartTime.value;

	/*var maxcrdthrs = document.frmprogramme.txtMaxCreditHrs.value;

	var core = document.frmprogramme.txtCore.value;

	var elective = document.frmprogramme.txtElective.value;*/

	ajaxRequest.open("GET", "ajax/papar_fees.php?kod=" + kodprogram + "&session="+ session + "&semester=" + semester + "&fees=" + fees + "&feespt=" + feespt , true);

	ajaxRequest.send(null); 

} //add_fees



/*function delete_fees(id){

//####### NAEIM ADD 05/02/2013 module: CourseRegistration task:program ############

alert(id)	

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

		   	var arr=s.split("|");

		  	document.getElementById("divTableFeesCrdHrs").innerHTML = arr[0]; //line 125

			document.frmprogramme.txtFees.value = "";

			document.frmprogramme.txtMaxCreditHrs.value = "";

			document.frmprogramme.txtCore.value = "";

			document.frmprogramme.txtElective.value = "";

	   }

	}

	 

	ajaxRequest.open("GET", "ajax/delete.php?prgid=" + id + "&session="+ session + "&semester=" + semester + "&fees=" + fees + "&maxcrdhrs=" +maxcrdthrs + "&core=" + core + "&elective=" +elective, true);

	ajaxRequest.send(null); 

} //delete_fees*/



function papar_course(kodfakulti){

//####### NAEIM ADD 18/02/2013 module: CourseRegistration task:timetable ############	

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

		   var arr=s.split("|");

           document.getElementById("divlistmenuCourse").innerHTML=arr[0];

		   document.getElementById("divlistmenuLecturer").innerHTML=arr[1];

	   }

	}

	ajaxRequest.open("GET", "ajax/papar_course.php?kodfakulti=" + kodfakulti, true);

	ajaxRequest.send(null); 

} //papar_periksa

function display_course(coursetype){

//####### NAEIM ADD 18/02/2013 module: CourseRegistration task:timetable ############	

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
           document.getElementById("divcboCourse").innerHTML=ajaxRequest.responseText;
	   }
	}
	ajaxRequest.open("GET", "ajax/papar_course.php?coursetype=" + coursetype, true);
	ajaxRequest.send(null); 
} //papar_periksa






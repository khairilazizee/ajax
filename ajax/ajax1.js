<!-- 
//Browser Support Code
function papar_daerah(negeri){
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
 		   document.getElementById("divDaerah").innerHTML = s;
	   }
	}
	ajaxRequest.open("GET", "ajax/papar_daerah.php?negeri=" + negeri, true);
	ajaxRequest.send(null); 
} //papar_periksa

function papar_rekod(flg,kod,cnt,tahun,gred_jawatan,jenis){

 if (flg=="STATISTIK"){
   if (document.getElementById("div_detail_stat_"+kod+"_"+cnt).style.display=="block"){
     document.getElementById("div_detail_stat_"+kod+"_"+cnt).style.display="none";
     return;
   }
   document.getElementById("div_detail_stat_"+kod+"_"+cnt).style.display="block";
   document.getElementById("div_detail_stat_"+kod+"_"+cnt).innerHTML = "<img src='images/loading.gif'>";
}
else if (flg=="JABATAN"){
   if (document.getElementById("div_detail_jab_"+kod+"_"+cnt).style.display=="block"){
     document.getElementById("div_detail_jab_"+kod+"_"+cnt).style.display="none";
     return;
   }
   document.getElementById("div_detail_jab_"+kod+"_"+cnt).style.display="block";
   document.getElementById("div_detail_jab_"+kod+"_"+cnt).innerHTML = "<img src='images/loading.gif'>";
}
else if (flg=="STAF"){
   if (document.getElementById("div_detail_staf_"+kod+"_"+cnt).style.display=="block"){
     document.getElementById("div_detail_staf_"+kod+"_"+cnt).style.display="none";
     return;
   }
   document.getElementById("div_detail_staf_"+kod+"_"+cnt).style.display="block";
   document.getElementById("div_detail_staf_"+kod+"_"+cnt).innerHTML = "<img src='images/loading.gif'>";
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
           if (flg=="STATISTIK"){
 		     document.getElementById("div_detail_stat_"+kod+"_"+cnt).style.display="block";
 		     document.getElementById("div_detail_stat_"+kod+"_"+cnt).innerHTML = ajaxRequest.responseText;
           }
           if (flg=="JABATAN"){
 		     document.getElementById("div_detail_jab_"+kod+"_"+cnt).style.display="block";
 		     document.getElementById("div_detail_jab_"+kod+"_"+cnt).innerHTML = ajaxRequest.responseText;
           }
           else if (flg=="STAF"){
 		     document.getElementById("div_detail_staf_"+kod+"_"+cnt).style.display="block";
 		     document.getElementById("div_detail_staf_"+kod+"_"+cnt).innerHTML = ajaxRequest.responseText;
           }
		}
	}
	ajaxRequest.open("GET", "ajax/papar_rekod.php?flg=" + flg +'&kod=' + kod + '&tahun=' + tahun + '&gred_jawatan=' + gred_jawatan + '&jenis=' + jenis, true);
	ajaxRequest.send(null); 
}

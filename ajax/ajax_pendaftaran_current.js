<!-- 
//Browser Support Code


function generate_refno(kp,j,tarikhmohon,dukacita){
//alert(j);
	var ajaxRequest;  // The variable that makes Ajax possible!
	//alert(id);
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
           var s=ajaxRequest.responseText;
           var arr=s.split("|");
           document.frmdaftar.txtRujukanYKN.value=arr[0];
           document.frmdaftar.txtBil.value=arr[1];
           document.getElementById("divBil").innerHTML=arr[1];
           document.getElementById("divDokumen").innerHTML=arr[2];
		   if(arr[3] != "") {
			document.getElementById("divBelaian").innerHTML=arr[3];
		   }
		   //alert(arr[4]);
		   document.getElementById("divBAHARU").innerHTML=arr[4];
		   
	   }
	}
    if (tarikhmohon!="")
      tahun=tarikhmohon.substr(6,4);
	ajaxRequest.open("GET", "ajax/semak_bil_permohonan.php?kp=" + kp + "&j=" + j + "&tahun=" + tahun + "&dukacita=" + dukacita , true);
	ajaxRequest.send(null); 
} //generate_refno


function check_organisasi(namaorganisasi,table,id){
//alert(namaorganisasi);
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
	
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var s = ajaxRequest.responseText;
			var arr = s.split("|");
			if(arr[0]!=""){
				//document.frmdaftar.namaorganisasi.value = document.frmdaftar.namaorganisasi.value.toUpperCase();
				document.getElementById("namaorganisasi").value = arr[0];
				document.getElementById("alamat").value = arr[1];
				document.getElementById("jalan").value = arr[2];
				document.getElementById("poskod").value = arr[3];
				document.getElementById("bandar").value = arr[4];
				document.getElementById("negeri").value = arr[5];
				document.getElementById("tarikhbatal").value = arr[6];
				
				
				ajaxRequest.responseText;
			}
		}
	}
	
	ajaxRequest.open("GET", "ajax/tindakan.php?organisasi=" + organisasi + "&table=" + table + "&id=" + id , true);
	ajaxRequest.send(null); 
	
	

}


function amaun_belaian(jenis){
//alert(jenis);
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
 		   document.getElementById("amaun_belaian").innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET", "ajax/amaun_belaian.php?jenisbantuan=" + jenis, true);
	ajaxRequest.send(null); 
}


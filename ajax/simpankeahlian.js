
function fn_table_pinjaman(noanggota,nokp){
	// var noanggota = document.frmsession.no_anggota.value;
	// var nokakitangan = document.frmsession.inpNokakitangan.value;
	var c;
	var anggota = noanggota;
	var kp = nokp;
	// alert(noanggota);
	$.ajax({
	    type: "GET",
	    url: "module/member/check_table_pinjaman.php",
	    data: "name=" + anggota ,
	    success: function(data) {
	      if(data==1){
	      	c = confirm("Anggota ini masih lagi mempunyai akaun pinjaman yang AKTIF.Adakah anda ingin meneruskan urusan ini?");
	      	if(c==true){
	      		fn_table_penjamin(anggota,kp);
	      	} else {
	      		location.href='home?m=member&p=anggota_berhenti&prm_action=99&id_action='+anggota+'&ic_action='+kp+'&tabs=356a192b7913b04c54574d18c28d46e6395428ab&action=edit'
	      	}
	      }
	    },
	    error: function(e) {
            alert("natang");
            console.log(e.message);
        }
	});
	return false;
}

function fn_table_penjamin(noanggota,nokp){
	// var noanggota = document.frmsession.no_anggota.value;
	// var nokakitangan = document.frmsession.inpNokakitangan.value;
	var c;
	var anggota = noanggota;
	var kp = nokp;
	// alert(noanggota);
	$.ajax({
	    type: "GET",
	    url: "module/member/check_table_penjamin.php",
	    data: "name=" + anggota ,
	    success: function(data) {
	      if(data==1){
	      	c = confirm("Anggota ini masih lagi mempunyai akaun pinjaman yang AKTIF.Adakah anda ingin meneruskan urusan ini?");
	      	if(c==false){
	      		location.href='mainpage.php?m=member&p=anggota_berhenti&prm_action=99&id_action='+anggota+'&ic_action='+kp+'&tabs=356a192b7913b04c54574d18c28d46e6395428ab&action=edit'
	      	}
	      }
	    },
	    error: function(e) {
            alert("natang");
            console.log(e.message);
        }
	});
	return false;
}
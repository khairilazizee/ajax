$(document).ready(function(){

	$(document).on("change","#inpUsernameBaru",function(){

		var email = $(this).val();
		var hdnURL = $("#hdnURL").val();
		// alert("sini");
		$.ajax({
			type:"POST",
			url : hdnURL+"register/check_email",
			data : "email="+email,
			success : function(data){
				// alert(data);
				if(data == 1){
					$("#passEmail").html("<span style='color:#red;font-weight:bold;'>Email already registered!</span>");
					$("#btnSubmit").prop("disabled", true);
				} else if(data == 0) {
					$("#passEmail").html("");
					$("#btnSubmit").prop("disabled", false);
				} 
			}
		});
		// alert(email);

	});

	$(document).on("change","#slxRoleBaru",function(){

		var value = $(this).val();

		if(value==3 || value==4){
			$(".hideKalauRoleHR").hide();
		} else {
			$(".hideKalauRoleHR").show();
		}

	});

	$(document).on("change","#slxGender",function(){

		var value = $(this).val();
		// alert(value);
		if(value=="M"){
			$(".simpanKalauGenderMale").hide();
		} else {
			$(".simpanKalauGenderMale").show();
		}

	});

	$(document).on("change", "#inpSalaryEmpBaru", function(){

		var percent = $("#inpEPFPercentEmpBaru").val();
		var salary = $(this).val();

		var jumlahEPF = (percent / 100) * salary;

		$("#inpEPFAmountEmpBaru").val(jumlahEPF);

	});

	$(document).on("change","#slxLevel",function(){

			var hdnURL = $("#hdnURL").val();
			var kelas = $(this).val();

			$.ajax({
				dataType: "json",
				type:"POST",
				url:hdnURL+"ajax/panggil_level",
				data:"kelas="+kelas,
				success : function(data){
					// alert(data);
					console.log(data);
					var toAppend = "";
			        $.each(data,function(i,o){
			           toAppend += "<option value='"+i.idclass+"'>"+o.desc_class+"</option>";
			        });

			        $('#sessions').append(toAppend);
				}

			});
		});

	// $(document).on("change","#slxPilihLevel",function(){

	// 	var level = $(this).val();
	// 	var hdnURL = $("#hdnURL").val();

	// 	$.ajax({
	// 		type:"POST",
	// 		url:hdnURL+"sysadmin/pilih_class",
	// 		data:"level="+level,
	// 		success : function(data){
	// 			alert(data);
	// 		}
	// 	});

	// });

});
$(document).ready(function(){
	$(document).on("change","#inpLoa",function(){
		var loa = $(this).val();
		var agentid = $("#hdnAgentId").val();
		$.post("module/check_loa.php",{nilailoa:loa,nilaiagentid:agentid}).done(function(x){
			var kotak = x.split("#")
            // alert(kotak[0]);
			if(kotak[0]==0){
				$("#notify_loa").html("");
				$("#notify_loa").html(kotak[1]);
                $("#button_submit").prop("disabled", true);
                $("#button_submit_invoice").prop("disabled", true);
                $("#button_submit_co_letter").prop("disabled", true);
			} 
		});
	});

	$(document).on("change","#inpLop",function(){
		var lop = $(this).val();
		var agentid = $("#hdnAgentId").val();
		$.post("module/check_lop.php",{nilailop:lop,nilaiagentid:agentid}).done(function(x){
			var kotak = x.split("#")
			if(kotak[0]==0){
				$("#notify_lop").html("");
				$("#notify_lop").html(kotak[1]);
                $("#button_submit").prop("disabled", true);
                $("#button_submit_invoice").prop("disabled", true);
                $("#button_submit_co_letter").prop("disabled", true);
			}
		});
	});

	$('#chkSubmitClaim').click(function(event) {
        if(this.checked) {
            $("#chkCloseDeal").prop('checked', true);
        } else {
            $("#chkCloseDeal").prop('checked', false);
        }
    });

    $("#pilihCoAgencyCommission").prop('disabled',true);
    $("#pilihCoAgencyCommissionSmall").prop('disabled',true);
    $("#inpInternalCoAgency").prop('readonly',true);
    $("#inpInternalCoAgency2").prop('readonly',true);
    $("#inpCORENRM").prop('readonly',true);
    $("#inpCORENRM2").prop('readonly',true);
	$("#inpIntNegotiatorName").prop('readonly',true);
	$("#inpInternalNegotiatorName").attr('disabled', 'disabled');
    $("#inpIntLeaderName").attr('disabled', 'disabled');
    $("#chkInternal").click(function(){
    	if(this.checked){
    		// alert("haha");
    		$("#inpInternalNegotiatorName").removeAttr('disabled');
            $("#inpIntLeaderName").removeAttr('disabled');
            $("#pilihCoAgencyCommission").removeAttr("disabled");
            $("#pilihCoAgencyCommissionSmall").removeAttr("disabled");
    	} else {
    		$("#inpInternalNegotiatorName").attr('disabled', 'disabled');
    		$("#inpIntLeaderName").attr('disabled', 'disabled');
            $("#pilihCoAgencyCommission").prop('disabled',true);
            $("#pilihCoAgencyCommissionSmall").prop('disabled',true);
    	}
    });

    $("#pilihCoAgencyExternalCommission").prop('disabled',true);
    $("#pilihCoAgencyExternalCommissionSmall").prop('disabled',true);
    $("#inpExtAgencyName").prop('readonly',true);
    $("#inpExtNegotiatorName").prop('readonly',true);
    $("#inpExtNegotiatorNoKP").prop('readonly',true);
    $("#inpExtHPNo").prop('readonly',true);
    $("#inpExtTelNo").prop('readonly',true);
    $("#inpExtFaxNo").prop('readonly',true);
    $("#txtAddressExternal").prop('readonly',true);
    $("#chkExternal").click(function(){
    	if(this.checked){
    		// alert("haha");
    		$("#inpExtAgencyName").removeAttr('readonly');
	        $("#inpExtNegotiatorName").removeAttr('readonly');
            $("#inpExtNegotiatorNoKP").removeAttr('readonly');
	        $("#inpExtHPNo").removeAttr('readonly');
	        $("#inpExtTelNo").removeAttr('readonly');
	        $("#inpExtFaxNo").removeAttr('readonly');
            $("#txtAddressExternal").removeAttr('readonly');
            $("#pilihCoAgencyExternalCommission").removeAttr("disabled");
            $("#pilihCoAgencyExternalCommissionSmall").removeAttr("disabled");
    	} else {
    		$("#inpExtAgencyName").prop('readonly',true);
	        $("#inpExtNegotiatorName").prop('readonly',true);
            $("#inpExtNegotiatorNoKP").prop('readonly',true);
	        $("#inpExtHPNo").prop('readonly',true);
	        $("#inpExtTelNo").prop('readonly',true);
	        $("#inpExtFaxNo").prop('readonly',true);
            $("#txtAddressExternal").prop('readonly',true);
            $("#pilihCoAgencyExternalCommission").prop('disabled',true);
            $("#pilihCoAgencyExternalCommissionSmall").prop('disabled',true);
    	}
    });

    $("#pilihIntroducer").prop("disabled", true);
    $("#inpIntroducerName").prop('readonly',true);
	$("#inpIntroducerICNo").prop('readonly',true);
	$("#inpIntroducerHPNo").prop('readonly',true);
    $("#chkIntroducer").click(function(){
    	if(this.checked){
    		// alert("haha");
    		$("#inpIntroducerName").removeAttr('readonly');
    		$("#inpIntroducerICNo").removeAttr('readonly');
    		$("#inpIntroducerHPNo").removeAttr('readonly');
            $("#pilihIntroducer").removeAttr("disabled");
    	} else {
    		$("#inpIntroducerName").prop('readonly',true);
    		$("#inpIntroducerICNo").prop('readonly',true);
    		$("#inpIntroducerHPNo").prop('readonly',true);
            $("#pilihIntroducer").prop("disabled", true);
    	}
    });

    $("#grossMonth").hide();
    $("#pembahagiB").hide();
    $('#rdoType2').click(function(event) {
        if(this.checked){
            $("#grossMonth").show();
            $("#pembahagiB").show();
        } else {
            $("#grossMonth").hide();
            $("#pembahagiB").hide();
        }
    });

    $('#rdoType1').click(function(event) { // kalau click sell
        if(this.checked){
            $("#grossMonth").hide();
            $("#pembahagiB").hide();
        } 
    });

    $("#inpGrossCommission2").prop('readonly', true);

    $("#grossCommission2").click(function(event){
        if(this.checked){
            $("#inpGrossCommissionPercent").prop('readonly', true);
            $("#inpGrossCommission2").prop('readonly', false);
            $("#inpGrossCommission").val("");
        } else {
            $("#inpGrossCommission2").prop('readonly', true);
            $("#inpGrossCommissionPercent").prop('readonly', false);
        }
    });

    $("#inpGSTPaidByVendor").prop('readonly',true);
    $("#inpGSTPaidByAgency").prop('readonly',true);
    $("#inpGrossCommission").prop('readonly',true);
    $("#inpIntroducer10Percent").prop('readonly',true);
    $("#inpNetCommission").prop('readonly',true);
    $("#inpCoagencyCommission").prop('readonly',true);
    $("#inpCoagencyExternalCommission").prop('readonly',true);
    $(document).on("change","#inpGrossCommissionPercent",function(){
        var selling_rental = $("#inpSellingRental").val();
        var gross_calc = ($(this).val() / 100) * parseFloat(selling_rental);
        $("#inpGrossCommission").val(gross_calc);
    });

    // kalau pilih paid by agency, ambil value B dan tolak dengan 6 percent gst
   
    $("#pilihIntroducerSmall").prop("disabled", true);
    $('#pilihPaidByAgency').click(function(event) {
        if(this.checked){
            // alert("test");
            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }
            var gross_comm = gross_commission_petak;
            var byagency_calc = parseFloat((gross_comm * 6 / 106)).toFixed(2);
            $("#inpGSTPaidByAgency").val(byagency_calc);
            var pilihIntroducer = $("#inpIntroducer10Percent").val();
            var valueF = gross_comm - byagency_calc - pilihIntroducer;
            $("#inpNetCommission").val(valueF);
            var duit_cd = gross_comm - byagency_calc;
            $("#duit_cd").val(duit_cd);
            $("#pilihPaidByVendor").prop("disabled", true);
            // $("#pilihNetComission").prop("disabled", true);
            
        } else {
            $("#pilihPaidByVendor").prop("disabled", false);
            // $("#pilihNetComission").prop("disabled", false);
            // var new_gross = parseFloat($("#inpGSTPaidByAgency").val()) + parseFloat($("#inpGrossCommission").val());
            // $("#inpGrossCommission").val(new_gross);
            $("#inpGSTPaidByAgency").val("");
            $("#duit_cd").val("");
            $("#pilihIntroducer").prop("disabled", true);
        }

    });

    $('#pilihPaidByAgencySmall').click(function(event) {
        if(this.checked){
            // alert("test");
            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }
            var gross_comm = gross_commission_petak;
            var byagency_calc = parseFloat((gross_comm * 6 / 106)).toFixed(2);
            $("#inpGSTPaidByAgency").val(byagency_calc);
            var new_gross = gross_commission_petak - byagency_calc;
            $("#inpGrossCommission").val(new_gross);
            $("#pilihPaidByVendorSmall").prop("disabled", true);
            $("#pilihIntroducerSmall").removeAttr("disabled");
        } else {
            $("#pilihPaidByVendor").prop("disabled", false);
            var new_gross = parseFloat($("#inpGSTPaidByAgency").val()) + parseFloat($("#inpGrossCommission").val());
            $("#inpGrossCommission").val(new_gross);
            $("#inpGSTPaidByAgency").val("");
            $("#pilihIntroducerSmall").prop("disabled", true);
        }

    });

    $('#pilihPaidByVendor').click(function(event) {
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }
            var byvendor_calc = (6 / 100) * gross_commission_petak;
            $("#inpGSTPaidByVendor").val(byvendor_calc);
            $("#pilihPaidByAgency").prop("disabled", true);
            $("#pilihNetComission").prop("disabled",true);
            $("#inpNetCommission").val(gross_commission_petak);
            var percentren = $("#inpRenPercent").val();
            var rmren = percentren * $("#inpNetCommission").val();
            $("#inpRenRM").val(rmren);
            var percentco1 = $("#inpInternalCoAgency").val();
            if(percentco1!=""){
                var rmco1 = percentco1 * $("#inpNetCommission").val();
                $("#inpCORENRM").val(rmco1);
            }
            var percentco2 = $("#inpInternalCoAgency2").val();
            if(percentco2!=""){
                var rmco2 = percentco2 * $("#inpNetCommission").val();
                $("#inpCORENRM2").val(rmco2);
            }
            $("#duit_cd").val($("#inpNetCommission").val());
        } else {
            $("#inpGSTPaidByVendor").val("");
            $("#inpNetCommission").val("");
            $("#pilihPaidByAgency").removeAttr("disabled");
        }
    });

    $('#pilihPaidByVendorSmall').click(function(event) {
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var byvendor_calc = (6 / 100) * gross_commission_petak;
            $("#inpGSTPaidByVendor").val(byvendor_calc);
            $("#pilihPaidByAgencySmall").prop("disabled", true);
            $("#pilihNetComissionSmall").prop("disabled",true);
            $("#inpNetCommission").val(gross_commission_petak);
            var percentren = $("#inpRenPercent").val();
            var rmren = percentren * $("#inpNetCommission").val();
            $("#inpRenRM").val(rmren);
            var percentco1 = $("#inpInternalCoAgency").val();
            if(percentco1!=""){
                var rmco1 = percentco1 * $("#inpNetCommission").val();
                $("#inpCORENRM").val(rmco1);
            }
            var percentco2 = $("#inpInternalCoAgency2").val();
            if(percentco2!=""){
                var rmco2 = percentco2 * $("#inpNetCommission").val();
                $("#inpCORENRM2").val(rmco2);
            }
            $("#duit_cd").val($("#inpNetCommission").val());
        } else {
            $("#inpGSTPaidByVendor").val("");
            $("#pilihPaidByAgencySmall").removeAttr("disabled");
        }
    });

    $("#pilihIntroducer").click(function(){
        if(this.checked){
            var valueC = $("#inpGSTPaidByVendor").val(); // C
            var valueD = $("#inpGSTPaidByAgency").val(); // D
            var valueB = $("#inpGrossCommission").val(); // B
            if(valueD!="" && valueC==""){
                var new_value_d = valueB - valueD;

                var kira_introducer = (10 / 100) * new_value_d;
                var new_introducer = parseFloat(kira_introducer).toFixed(2);
                $("#inpIntroducer10Percent").val(new_introducer);
                $("#inpIntroducerRM").val(new_introducer);
            }

            if(valueD=="" && valueC!=""){
                var new_value_d = valueB;

                var kira_introducer = (10 / 100) * new_value_d;
                var new_introducer = parseFloat(kira_introducer).toFixed(2);
                $("#inpIntroducer10Percent").val(new_introducer);
                $("#inpIntroducerRM").val(new_introducer);

                var valueF = valueB - new_introducer;
                $("#inpNetCommission").val(valueF);

            }

        } else {
            $("#inpIntroducer10Percent").val("");
            $("#inpIntroducerRM").val();
        }
    });

    $("#pilihIntroducerSmall").click(function(){
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var valueC = $("#inpGSTPaidByVendor").val(); // C
            var valueD = $("#inpGSTPaidByAgency").val(); // D
            if(valueD!="" && valueC==""){
                var valueB = gross_commission_petak;
                var new_value_d = valueB - valueD;
            }

            if(valueD=="" && valueC!=""){
                var new_value_d = valueC;
            }
            var kira_introducer = (10 / 100) * new_value_d;
            var new_introducer = parseFloat(kira_introducer).toFixed(2);
            $("#inpIntroducer10Percent").val(new_introducer);
            $("#inpIntroducerRM").val(new_introducer);
        } else {
            $("#inpIntroducer10Percent").val("");
            $("#inpIntroducerRM").val();
        }
    });

    $("#pilihNetComission").click(function(){
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var gross_comm = gross_commission_petak;
            var introducer = $("#inpIntroducer10Percent").val();
            if(introducer==""){
                introducer = 0;
            }
            // var paidVendor = $("#inpGSTPaidByVendor").val();
            var paidAgency = $("#inpGSTPaidByAgency").val();
            var new_netcomm = parseFloat(gross_comm) - parseFloat(introducer) - parseFloat(paidAgency);
            $("#inpNetCommission").val(new_netcomm);
            var percentren = $("#inpRenPercent").val();
            var rmren = percentren * $("#inpNetCommission").val();
            $("#inpRenRM").val(rmren);
            var percentco1 = $("#inpInternalCoAgency").val();
            if(percentco1!=""){
                var rmco1 = percentco1 * $("#inpNetCommission").val();
                $("#inpCORENRM").val(rmco1);
            }
            var percentco2 = $("#inpInternalCoAgency2").val();
            if(percentco2!=""){
                var rmco2 = percentco2 * $("#inpNetCommission").val();
                $("#inpCORENRM2").val(rmco2);
            }
        } else {
            $("#inpNetCommission").val("");
        }
    });

    $("#pilihNetComissionSmall").click(function(){
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var gross_comm = gross_commission_petak;
            var introducer = $("#inpIntroducer10Percent").val();
            if(introducer==""){
                introducer = 0;
            }
            // var paidVendor = $("#inpGSTPaidByVendor").val();
            var paidAgency = $("#inpGSTPaidByAgency").val();
            var new_netcomm = parseFloat(gross_comm) - parseFloat(introducer) - parseFloat(paidAgency);
            $("#inpNetCommission").val(new_netcomm);
            
        } else {
            $("#inpNetCommission").val("");
        }
    });

    $("#pilihCoAgencyCommission").click(function(){
        if(this.checked){
            var paid_agency = $("#inpNetCommission").val();
            var new_coagency_comm = (50 / 100) * parseFloat(paid_agency);
            $("#inpCoagencyCommission").val(new_coagency_comm);
            $("#inpRenRM").val("");
            var percentren = $("#inpRenPercent").val();
            var rmren = percentren * $("#inpCoagencyCommission").val();
            $("#inpRenRM").val(rmren);
            var percentco1 = $("#inpInternalCoAgency").val();
            if(percentco1!=""){
                var rmco1 = percentco1 * $("#inpCoagencyCommission").val();
                $("#inpCORENRM").val(rmco1);
            }
            var percentco2 = $("#inpInternalCoAgency2").val();
            if(percentco2!=""){
                var rmco2 = percentco2 * $("#inpCoagencyCommission").val();
                $("#inpCORENRM2").val(rmco2);
            }
            $("#duit_cd").val($("#inpCoagencyCommission").val());
        } else {
            $("#inpCoagencyCommission").val("");
        }
    });

    $("#pilihCoAgencyCommissionSmall").click(function(){
        if(this.checked){
            var paid_agency = $("#inpNetCommission").val();
            var new_coagency_comm = (50 / 100) * parseFloat(paid_agency);
            $("#inpCoagencyCommission").val(new_coagency_comm);
            $("#inpRenRM").val("");
            var percentren = $("#inpRenPercent").val();
            var rmren = percentren * $("#inpCoagencyCommission").val();
            $("#inpRenRM").val(rmren);
            var percentco1 = $("#inpInternalCoAgency").val();
            if(percentco1!=""){
                var rmco1 = percentco1 * $("#inpCoagencyCommission").val();
                $("#inpCORENRM").val(rmco1);
            }
            var percentco2 = $("#inpInternalCoAgency2").val();
            if(percentco2!=""){
                var rmco2 = percentco2 * $("#inpCoagencyCommission").val();
                $("#inpCORENRM2").val(rmco2);
            }
            $("#duit_cd").val($("#inpCoagencyCommission").val());
        } else {
            $("#inpCoagencyCommission").val("");
        }
    });

    $("#pilihCoAgencyExternalCommission").click(function(){
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var gross_comm = gross_commission_petak;
            var new_gross = gross_comm * (50 / 100);
            // var introducer = $("#inpIntroducer10Percent").val();
            // var new_introducer = introducer * (50 / 100);
            // var new_coagencyexternal_comm = new_gross - new_introducer;
            $("#inpCoagencyExternalCommission").val(new_gross);
            $("#inpExtRM").val(new_gross);
        } else {
            $("#inpCoagencyExternalCommission").val("");
        }
    });

    $("#pilihCoAgencyExternalCommissionSmall").click(function(){
        if(this.checked){

            var gross_commission_petak = $("#inpGrossCommission").val();
            if(gross_commission_petak==""){
                gross_commission_petak = $("#inpGrossCommission2").val();
            }

            var gross_comm = gross_commission_petak;
            var new_gross = gross_comm * (50 / 100);
            // var introducer = $("#inpIntroducer10Percent").val();
            // var new_introducer = introducer * (50 / 100);
            // var new_coagencyexternal_comm = new_gross - new_introducer;
            $("#inpCoagencyExternalCommission").val(new_gross);
            $("#inpExtRM").val(new_gross);
        } else {
            $("#inpCoagencyExternalCommission").val("");
        }
    });

    $(document).on("change","#inpInternalNegotiatorName",function(){
        var value_select = $(this).val();
        // alert(value_select);
        $.post("module/internal_nego.php",{nilaiagentid:value_select}).done(function(x){
            var kotak = x.split("#");
            var namaAgent = kotak[3];
            $("#coAgencyRole1").html(kotak[0]+" - "+namaAgent);
            $("#inpInternalCoAgency").val(kotak[1]);
            $("#hdnCOAgencyIntroducerRole").val(kotak[2]);
        });
    });

    $(document).on("change","#inpIntLeaderName",function(){
        var value_select = $(this).val();
        // alert(value_select);
        $.post("module/internal_nego.php",{nilaiagentid:value_select}).done(function(x){
            var kotak = x.split("#");
            // alert(kotak[2]);
            var namaAgent = kotak[3];
            $("#coAgencyRole2").html(kotak[0]+" - "+namaAgent);
            $("#inpInternalCoAgency2").val(kotak[1]);
            $("#hdnCOAgencyLeaderRole").val(kotak[2]);
        });
    });

});
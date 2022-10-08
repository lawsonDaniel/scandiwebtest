$(document).ready(function() {
    $('#myCheckbox').click(function() {
        $('#delete-product-btn').prop("disabled", !$("#myCheckbox").prop("checked"));
    })

    $(".price").change(function() {
        $(this).val(parseFloat($(this).val()).toFixed(2));
           });

           $("select").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue){ 
                    $(".box").not("." + optionValue).hide();
                    $("." + optionValue).show();
                    $(".rem").not("." + optionValue).removeAttr('required').val(""); //removes required attribute from the feilds which are hidden
                }
                else{
                    $(".box").hide();
                }
            });
        }).change();    
        
        

});

//if type is size
$("#size").on("keyup", function(){
    $("#typeattribute").val($("#size").val() + " MB");    
});

//if type is dimentions
$("#height, #width , #length").on("keyup", function(){
    $("#typeattribute").val($("#height").val() + "x" + $("#width").val()+ "x" + $("#length").val());
});

//if type is weight
$("#weight").on("keyup", function(){
    $("#typeattribute").val($("#weight").val() + "KG" );
});

$('#delete-product-btn').prop("disabled", true);
			$('input:checkbox').click(function() {
				if($(this).is(':checked')) {
					$('#delete-product-btn').prop("disabled", false);
				} else {
					if($('.checks').filter(':checked').length < 1) {
						$('#delete-product-btn').attr('disabled', true);
					}
				}
			});
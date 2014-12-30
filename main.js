$(window).load(function() {
	$(".section").hide();
	$("#about_me").show();

	$("#l_about_me").click(function() {
		$(".section").hide();
		$("#about_me").show();
	});

	$("#l_skills").click(function() {
		$(".section").hide();
		$("#skills").show();
	});
	$("#l_contact").click(function() {
		$(".section").hide();
		$("#contact").show();
	});
	$("#l_gallery").click(function() {
		$(".section").hide();
		$("#gallery").show();
	});
	$("#l_life").click(function() {
		$(".section").hide();
		$("#life").show();
	});
	
});


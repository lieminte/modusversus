function slider(i){
	$(".btn-next").click(function(event) {
		if(i == 1)
		{
			$(".slider").css("background", "#2e4639");
			$(".slider-1").css("background", "#e8645a");
			$(".slider-2").css("background", "#b0b8b9");
			$(".slider-3").css("background", "#b0b8b9");
			i = i + 1;
		}
		else if(i == 2){
			$(".slider").css("background", "#7f8c8c");
			$(".slider-2").css("background", "#e8645a");
			$(".slider-1").css("background", "#b0b8b9");
			$(".slider-3").css("background", "#b0b8b9");
			i = i + 1;
		}
		else if (i == 3)
		{
			$(".slider").css("background", "#634015");
			$(".slider-3").css("background", "#e8645a");
			$(".slider-1").css("background", "#b0b8b9");
			$(".slider-2").css("background", "#b0b8b9");
			i = 1;
		}
	});
	$(".btn-pre").click(function(event) {
		if(i == 1)
		{
			$(".slider").css("background", "#2e4639");
			$(".slider-1").css("background", "#e8645a");
			$(".slider-2").css("background", "#b0b8b9");
			$(".slider-3").css("background", "#b0b8b9");
			i = 3;
		}
		else if(i == 2){
			$(".slider").css("background", "#7f8c8c");
			$(".slider-2").css("background", "#e8645a");
			$(".slider-1").css("background", "#b0b8b9");
			$(".slider-3").css("background", "#b0b8b9");
			i = i - 1;
		}
		else if (i == 3)
		{
			$(".slider").css("background", "#634015");
			$(".slider-3").css("background", "#e8645a");
			$(".slider-1").css("background", "#b0b8b9");
			$(".slider-2").css("background", "#b0b8b9");
			i = i - 1;
		}
	});
	$(".slider-1").click(function(){
		$(".slider").css("background", "#2e4639");
		$(".slider-1").css("background", "#e8645a");
		$(".slider-2").css("background", "#b0b8b9");
		$(".slider-3").css("background", "#b0b8b9");
	});
	$(".slider-2").click(function(){
		$(".slider").css("background", "#7f8c8c");
		$(".slider-2").css("background", "#e8645a");
		$(".slider-1").css("background", "#b0b8b9");
		$(".slider-3").css("background", "#b0b8b9");
	});
	$(".slider-3").click(function(){
		$(".slider").css("background", "#634015");
		$(".slider-3").css("background", "#e8645a");
		$(".slider-1").css("background", "#b0b8b9");
		$(".slider-2").css("background", "#b0b8b9");
	});
};

$(document).ready(function(){
	slider(2);
});
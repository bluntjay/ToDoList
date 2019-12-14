
$(".textInput").on("keyup", function(e){
	if(e.keyCode == 13 && $(".textInput").val() != ""){
		var task = $("<div class='tasks'></div>").text($(".textInput").val());
		var del = $("<i class='fa fa-times'></i>").click(function(){
		var parent = $(this).parent();
		
		parent.fadeOut(function(){

		parent.remove();
		});


	});
		var done = $("<i class='fa fa-check'></i>").click(function(){
			var parent = $(this).parent();
			parent.fadeOut(function(){
				$(".taskDone").append(parent);
				parent.fadeIn();
			});
			$(this).remove();
		});
		task.append(del, done);
		$(".notDone").append(task);
		$(".textInput").val("");
	};
});
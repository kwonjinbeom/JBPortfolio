$(function(){
	let SpanCaret = "<span class='caret'></span>";
	$(".dropdown-item").click(function(){
		$("#navBtn").html($(this).text()+"&nbsp"+SpanCaret);
	})
})
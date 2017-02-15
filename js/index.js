(function active(){
	var $nav=$('#J-nav li');
	$nav.bind('click',function(){
		$nav.removeClass('active');
		$(this).addClass('active');
	})
})()
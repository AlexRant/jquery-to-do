//line-through specific Todos by clicking
$("ul").on("click", "li", function(){
	//which li is clicked inside an ul the code will work
	$(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event){
	//whan a span is clicked inside an ul the code will work

	// $(this).parent().remove();//parent удалит не только span но и родительский li !!!
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	event.stopPropagation();
	//если не добавить в функцию аргумент и не добавить stopPropagation()
	//click сработает и на span > li > ul > div > body
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //which для определения клавиши ===> 13 - "enter"
		//grab new todo text from input
		var todoText = $(this).val();// сохраним в переменную значение из input
		//очистим текстовое поле после ввода
		$(this).val("");
		//create a new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// open/close textinput for new todo
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
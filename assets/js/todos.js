$("ol").on("click", "li", function () {
    $(this).toggleClass("completed");
});
$("ol").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoAdd = $(this).val();
        $(this).val("");
        $("ol").append("<li><span><i class=\"fas fa-trash\"></i></span> " + todoAdd + "</li>");
    }
});
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});
$(".fa-print").click(function () { 
    var doc=new jsPDF();    
    doc.fromHTML($("#container").html(), 80, 20);
    doc.save("TO-DO.pdf");
});
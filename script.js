var trending = [];
var makeup;
$(".add").click(function() {
    makeup= $(".picture-url").val();
    trending.push(makeup);
    $(".gallery").append("<img src='" + makeup + "'>");
    $(".picture-url").val("");
});
$(".removeNew").click(function() {
    makeup.pop();
    $(".ToDoList").append("<img src='" + makeup + "'>");
});
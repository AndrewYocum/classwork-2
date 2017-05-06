$(document).ready(function(){
/*buttun hides img */
    $("#btn1").click(function(){
        $("img").hide()
    })
/*buttun shows img */
    $("#btn2").click(function(){
        $("img").show()
    })
    /*double click H1 element */
    $("#h1").dblclick(function(){
        $("#h1").toggleClass("main")
    })

    $("#btn3").click(function(){
        $("#list").append("<li>Appended item</li>")
    })
    $(".box").hover(function(){
        $(".box").animate({
          width: "300px"
        })
    })
    $("#classtag").mouseleave(function(){
      $("#classtag").slideUp()
    })
    $("#btn6").hover(function(){
      $("#cont").fadeOut();
    })
    $("#btn6").click(function(){
      $("#cont").fadeIn();
    })
    $("#text").click(function(){
      $("#text").toggleClass("main")
  })
})

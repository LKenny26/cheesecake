//@author LeeAhnna Kenny

$(document).ready(function() {
    $("#orderButton").click(function(){
        var note = $('#notes').val().toLowerCase(); //make notes to lower to scan for vegan

        if(note.includes('vegan')) {
            //dont let a vegan order one
            alert("Warning this has dairy!");
        } else {
            //hide the form elements when order button clicked
            $(this).hide();
            $(quan).hide();
            $(notes).hide();
            $(noteLabel).hide();
            $(topAndType).hide();
            $(ty).show();
        }
    });

    //changes the month
    $("#1").click(function(){
        $("#drop").text("Jan");
        post_order("Jan");
    });
    
    $("#2").click(function(){
        $("#drop").text("Feb");
        post_order("Feb");
    });
    $("#3").click(function(){
        $("#drop").text("Mar");
        post_order("Mar");
    });
    $("#4").click(function(){
        $("#drop").text("Apr");
        post_order("Apr");
    });
    $("#5").click(function(){
        $("#drop").text("May");
        post_order("May");
    });
    $("#6").click(function(){
        $("#drop").text("Jun");
        post_order("Jun");
    });
    $("#7").click(function(){
        $("#drop").text("Jul");
        post_order("Jul");
    });
    $("#8").click(function(){
        $("#drop").text("Aug");
        post_order("Aug");
    });
    $("#9").click(function(){
        $("#drop").text("Sep");
        post_order("Sep");
    });
    $("#10").click(function(){
        $("#drop").text("Oct");
        post_order("Oct");
    });
    $("#11").click(function(){
        $("#drop").text("Nov");
        post_order("Nov");
    });
    $("#12").click(function(){
        $("#drop").text("Dec");
        post_order("Dec");
    });
});

//function to make post go through based on which month called it
function post_order(month) {
    $.post('/orders', { month: month }, function(data) {
        //post has been called and data recieved
        $("#orderList").empty(); //clear out the old info
        data.forEach(function(order) {
            //need to call this on each flavor
            if (order.topping == "Cherry") {
                //cherry CSS added
                $("#orderList").append("<li id=Cherry>" + order.quantity + " " + order.topping + "</li>");
            }
            else if (order.topping == "Chocolate") {
                //Chocolate CSS added
                $("#orderList").append("<li id=Choco>" + order.quantity + " " + order.topping + "</li>");
            }
            else {
                //plain CSS added
                $("#orderList").append("<li id=Plain>" + order.quantity + " " + order.topping + "</li>");
            }
        });
    }).fail(function(){
        //if it doesn't work report error
        alert("Error!!!");
    });
}

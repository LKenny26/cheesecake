//@author LeeAhnna Kenny
$(document).ready(function(){
    $("#orderButton").click(function(){
        var note = $('#notes').val().toLowerCase();

        if(note.includes('vegan')) {
        alert("Warning this has dairy!");
        } else {
        
            $(this).hide();
            $(quan).hide();
            $(notes).hide();
            $(noteLabel).hide();
            $(topAndType).hide();
            $(ty).show();
        }
    });
    $("#1").click(function(){
        $("#drop").text("Jan");
    });
    
    $("#2").click(function(){
        $("#drop").text("Feb");
    });
    $("#3").click(function(){
        $("#drop").text("Mar");
    });
    $("#4").click(function(){
        $("#drop").text("Apr");
    });
    $("#5").click(function(){
        $("#drop").text("May");
    });
    $("#6").click(function(){
        $("#drop").text("Jun");
    });
    $("#7").click(function(){
        $("#drop").text("Jul");
    });
    $("#8").click(function(){
        $("#drop").text("Aug");
    });
    $("#9").click(function(){
        $("#drop").text("Sep");
    });
    $("#10").click(function(){
        $("#drop").text("Oct");
    });
    $("#11").click(function(){
        $("#drop").text("Nov");
    });
    $("#12").click(function(){
        $("#drop").text("Dec");
    });
        
});
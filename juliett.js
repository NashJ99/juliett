$(function() { // DOM ready
    $("#nameform").blur(function () {
        let inputVal = $(this).val();
        let spaceCount = inputVal.split(" ").length - 1;
  
        console.log(spaceCount);
        if (spaceCount === 0) {
          $(this).removeClass("success").addClass("error");
        } else if (spaceCount >0) {
          $(this).removeClass("error").addClass("success");
        }
      });

}); // end DOM ready
$('#btnLoadData').click(function() {
    console.log("clicked");

    

    let jsonURL = "storage.json";

   

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            
            console.log(data.name);
            
            
            $("#nameform").val(data.name);
            
            $.each(data, function (key, val) {
             
                console.log(key, val);
               
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
              
            });
        }
    });
});

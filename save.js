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
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
              
            });
        }
    });
});

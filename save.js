$('#btnLoadData').click(function() {
    console.log("clicked");

    //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    let jsonURL = "storage.json";

    // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.name);
            
            //loads first name into my first input box (in example #1)
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
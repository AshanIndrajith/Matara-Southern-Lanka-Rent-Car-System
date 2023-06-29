getAllVehicle()


function saveVehicle() {
  
    let req = $('#reqnum').val();
    let fueltype = $('#fueltype').val();
    let seat = $('#seat').val();
    let ac = $('#ac').val();
    let image = $('#image').prop('files')[0];
    let dayprice = $('#dayprice').val();
    let additionalkm = $('#additionalkm').val();
    let additionalhour = $('#additionalhour').val();


    
    // Create a new FormData object
    let formData = new FormData();
    formData.append("reg_number", req);
    formData.append("fuel_type", fueltype);
    formData.append("seat", seat);
    formData.append("ac", ac);
    formData.append("image", image);
    formData.append("dprice", dayprice);
    formData.append("add_km_price", additionalkm);
    formData.append("add_hour_price", additionalhour);

    
  
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/vehicle/vehicleSave",
      processData: false,
      contentType: false,
      data: formData,
      success: function (data) {

       
        
       alert("save");

        
        getAllDamage() 
        window.location.href = "view_vehicle_table.html";

        
       
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving vehicle");
      }
    });
  }

function updateDamage(){


 let id=$('#id').val();
 let vID=$('#vid').val();
 let description=$('#description').val();
 let date=$('#date').val();
 let amount=$('#amount').val();





 $.ajax({
    method: "PUT",
    contentType: "application/json",
    url:"http://localhost:8080/damage/update/"+id,
    async:true,
    data:JSON.stringify({
        "vehicle_id":vID,
        "description":description,
        "date":date,
        "amount":amount,
    }),
    success:function(data){

     
     
        swal({
          title: "Good job!",
          text: "Vehicle updated successfully!",
          icon: "success",
          button: "ok!",
        });
  
      
        
        getAllDamage() 

        window.location.href = "DamageView.html";
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

}

function deleteVehicle(empID){




  
 swal({
  title: "Are you sure?",
  text: "Permanently delete selected data ?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {

  if (willDelete) {
    $.ajax({
      method: "DELETE",
      url:"http://localhost:8080/vehicle/delete/"+empID,
      async:true,
  
      success:function(data){
        
         getAllVehicle()
         window.href.url="VehicleView.html"
      },
      error:function(xhr,exception){
          alert("Error")
      }
   })
    swal(" Vehicle detailes  is deleted!", {
      icon: "success",
    });
  } else {
    swal("Your detailes  is safe!");
  }
});

    

 //let empID=$('#exampleFormControlInput1').val();



}




function getDamageDetails(id) {
  $.ajax({
    method: "GET",
    url: "http://localhost:8080/damage/get/" + id,
    async: true,
    success: function(data) {
      if (data != null) {
        var id = data.id;
        var vId = data.vehicle_id; // Adjust property name based on your Damage object
        var description = data.description; // Adjust property name based on your Damage object
        var date = data.date; // Adjust property name based on your Damage object
        var image = data.imageName; // Adjust property name based on your Damage object
        var amount = data.amount; // Adjust property name based on your Damage object

        
      

        // Construct the URL for the new page with query parameters
        var url = "damageUpdate.html" +
          "?id=" + encodeURIComponent(id) +
          "&vehicle_id=" + encodeURIComponent(vId) +
          "&description=" + encodeURIComponent(description) +
          "&date=" + encodeURIComponent(date) +
          "&imageName=" + encodeURIComponent(image) +
          "&amount=" + encodeURIComponent(amount);

       

        // Redirect the user to the new page
        window.location.href = url;

        
      }
    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
}






function getAllVehicle() {
  $.ajax({
      method: "GET",
      url: "http://localhost:8080/vehicle/view",
      success: function(data) {
          // Clear existing table rows
          $('#RentTable tbody').empty();

          // Loop through the array and create table rows dynamically
          for (let i = 0; i < data.length; i++) {
              let vehicle = data[i];
              let id = vehicle.id;
              let regNumber = vehicle.reg_number;
              let fuelType = vehicle.fuel_type;
              let seat = vehicle.seat;
              let ac = vehicle.ac;
              let image = vehicle.imageName;
              let dPrice = vehicle.dprice;
              let akmPrice = vehicle.akmprice;
              let addHourPrice = vehicle.add_hour_price;

              let newRow = '<tr>' +
                  '<td>' + id + '</td>' +
                  '<td>' + regNumber + '</td>' +
                  '<td>' + fuelType + '</td>' +
                  '<td>' + seat + '</td>' +
                  '<td>' + ac + '</td>' +
                  '<td><img src="../../system/JwtApplication/vehicle/'+ id +'/'+ image +'" width="100px"></td>' +
                  '<td>  <label> Rs :</label>'+ dPrice + '<label> .00</label></td>'+
                  '<td>  <label> Rs :</label>'+ akmPrice + '<label> .00</label></td>'+
                  '<td>  <label> Rs :</label>'+ addHourPrice + '<label> .00</label></td>'+
                  
                  '<td><button type="button" class="update btn btn-success" onclick="getDamageDetails(' + id + ')" >Update</button><br><br> <button type="button" onclick="deleteVehicle(' + id + ') " class="delete btn btn-danger">Delete</button></td>'
                  // Add other table cells as needed
                  '</tr>';
              $('#RentTable tbody').append(newRow);
          }
      },
      error: function(xhr, status, error) {
          // Handle the error response
          console.log("Error:", error);
      }
  });
}

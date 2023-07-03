getAllVehicle()


function saveVehicle() {

    let title = $('#title').val();
    let reg = $('#regnum').val();
    let idate = $('#idate').val();
    let rdate = $('#rdate').val();
    let postingDate=new Date();
    let image = $('#image').prop('files')[0];
    let dayprice = $('#dayprice').val();
    let additionalkm = $('#additionalkm').val();
    let additionalhour = $('#additionalhour').val();

    
    
    // Create a new FormData object
    let formData = new FormData();
    formData.append("title", title);
    formData.append("reg_number", reg);
    formData.append("insurence_date", idate);
    formData.append("revenue_license_date", rdate);
    formData.append("system_registered_date", postingDate);
    formData.append("image", image);
    formData.append("dprice", dayprice);
    formData.append("akmprice", additionalkm);
    formData.append("add_hour_price", additionalhour);

    
    getreq(reg)
    
  
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/vehicle/vehicleSave",
      processData: false,
      contentType: false,
      data: formData,
      success: function (data) {

       
       
       

        
        
        window.location.href = "specification.html";

        
       
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving vehicle");
      }
    });
  }
  function updateVehicle() {
    var id = $('#id').val();
    var regNumber = $('#reqnum').val();
    var fuelType = $('#fueltype').val();
    var seat = $('#seat').val();
    var ac = $('#ac').val();
    var dprice = $('#dayprice').val();
    var akmPrice = $('#additionalkm').val();
    var addHourPrice = $('#additionalhour').val();
  
    var updateData = {
      reg_number: regNumber,
      fuel_type: fuelType,
      seat: seat,
      ac: ac,
      image: image,
      dprice: dprice,
      akmprice: akmPrice,
      add_hour_price: addHourPrice
    };
  
    $.ajax({
      method: "PUT",
      contentType: "application/json",
      url: "http://localhost:8080/vehicle/update/" + id,
      async: true,
      data: JSON.stringify(updateData),
      success: function(data) {
       

        alert("updated")
  
        // Redirect to the vehicle list page
        window.location.href = "vehicleView.html";
      },
      error: function(xhr, status, error) {
        swal({
          title: "Error!",
          text: "An error occurred while updating the vehicle.",
          icon: "error",
          button: "OK"
        });
      }
    });
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




function getVehicleDetails(id) {
  $.ajax({
    method: "GET",
    url: "http://localhost:8080/vehicle/get/" + id,
    async: true,
    success: function(data) {
      if (data != null) {
        var id = data.id;
        var rnum = data.reg_number;
        var fuel_type = data.fuel_type;
        var seat = data.seat; 
        var ac = data.ac; 
        var image = data.imageName; 
        var dprice = data.dprice
        var akmPrice = data.akmprice; 
        var add_hour_price = data.add_hour_price; 


       
        


        

        // Construct the URL for the new page with query parameters
        var url = "vehicleUpdate.html" +
          "?id=" + encodeURIComponent(id) +
          "&reg_number=" + encodeURIComponent(rnum) +
          "&fuel_type=" + encodeURIComponent(fuel_type) +
          "&seat=" + encodeURIComponent(seat) +
          "&ac=" + encodeURIComponent(ac) +
          "&image=" + encodeURIComponent(image)+
          "&dprice=" + encodeURIComponent(dprice) +
          "&akmPrice=" + encodeURIComponent(akmPrice)+
          "&add_hour_price=" + encodeURIComponent(add_hour_price);
          

       

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
                  
                  '<td><button type="button" class="update btn btn-success" onclick="getVehicleDetails(' + id + ')" >Update</button><br><br> <button type="button" onclick="deleteVehicle(' + id + ') " class="delete btn btn-danger">Delete</button></td>'
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


$(document).ready(function() {
  // Fetch pending booking count
  $.ajax({
      method: "GET",
      url: "http://localhost:8080/vehicle/vehTotal",
      success: function(data) {
          $('#vehicleCount').text(data);
      },
      error: function(xhr, status, error) {
          console.error("Failed to fetch customer count: " + error);
      }
  });
});





function getreq(id) {




        var url = "specification.html" +
          "?id=" + encodeURIComponent(id) ;
        
        // Redirect the user to the new page
        window.location.href = url;

        
      }
    



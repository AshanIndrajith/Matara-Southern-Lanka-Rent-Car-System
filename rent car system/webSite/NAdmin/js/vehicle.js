getAllVehicle()



//save vehicle
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



    if (title.trim() === '') {
      swal("Title is required!");
      return;
    }
    if (reg.trim() === '') {
      swal("Registration number is required");
      return;
    }
    if (idate.trim() === '') {
      swal("Insurance date is required!");
      return;
    }
    if (rdate.trim() === '') {
      swal("Revenue license date is required!");
      return;
    }
  
    // Validation: Check if numeric for numeric fields
    if (isNaN(parseFloat(dayprice))) {
      swal("Please enter a numeric value for Day Price");
      return;
    }
    if (isNaN(parseFloat(additionalkm))) {
      swal("Please enter a numeric value for Additional Km Price");
      return;
    }
    if (isNaN(parseFloat(additionalhour))) {
      swal("Please enter a numeric value for Additional Hour Price");
      return;
    }
  

  
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




    $.ajax({
      method: "POST",
      url: "http://localhost:8080/vehicle/vehicleSave",
      processData: false,
      contentType: false,
      data: formData,
      success: function (data) {

        swal({
          title: "Good job!",
          text: "Vehicle is Added Successfully!",
          icon: "success",
          button: "ok!",
        });

        getreq(reg)
        //window.location.href = "specification.html";

        
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving vehicle");
      }
    });
  }




  
function updateVehicle(){


    let id = $('#id').val();
    let title = $('#title').val();
    let reg = $('#regnum').val();
    let idate = $('#idate').val();
    let rdate = $('#rdate').val();
    let dayprice = $('#dayprice').val();
    let additionalkm = $('#additionalkm').val();
    let additionalhour = $('#additionalhour').val();


  $.ajax({
     method: "PUT",
     contentType: "application/json",
     url:"http://localhost:8080/vehicle/update/"+id,
     async:true,
     data:JSON.stringify({
         "id":id,
         "title":title,
         "reg_number":reg,
         "insurence_date":idate,
         "revenue_license_date":rdate,
         "dprice":dayprice,
         "akmprice":additionalkm,
         "add_hour_price":additionalhour,
     }),
     success:function(data){
       
 
      swal({
        title: "Good job!",
        text: "Vehicle is updated Successfully!",
        icon: "success",
        button: "ok!",
      });

 
         window.location.href = "vehicleView.html";
     },
     error:function(xhr,exception){
         alert("Error")
     }
  })
 
 }
 



  // function updateVehicle() {


  //   let id = $('#id').val();
  //   let title = $('#title').val();
  //   let reg = $('#regnum').val();
  //   let idate = $('#idate').val();
  //   let rdate = $('#rdate').val();
  //   let dayprice = $('#dayprice').val();
  //   let additionalkm = $('#additionalkm').val();
  //   let additionalhour = $('#additionalhour').val();
    
  //   var updateData = {
  //     id: id,
  //     title: title,
  //     reg_number: reg,
  //     insurence_date: idate,
  //     revenue_license_date: rdate,
  //     dprice: dayprice,
  //     akmprice: additionalkm,
  //     add_hour_price: additionalhour
  //   };
  
  //   // AJAX request
  //   $.ajax({
  //     method: "PUT",
  //     contentType: "application/json",
  //     url: "http://localhost:8080/vehicle/update/" + id,
  //     async: true,
  //     data: JSON.stringify(updateData),
  //     success: function(data) {
  //       alert("updated");
  
  //       // Redirect to the vehicle list page
  //       window.location.href = "vehicleView.html";
  //     },
  //     error: function(xhr, status, error) {
  //       swal({
  //         title: "Error!",
  //         text: "An error occurred while updating the vehicle.",
  //         icon: "error",
  //         button: "OK"
  //       });
  //     }
  //   });
  // }
  









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
        let id = data.id;
        let title = data.title;
        let regNumber = data.reg_number;
        let insurence_date = data.insurence_date;
        let revenue_license_date = data.revenue_license_date;
        let image = data.imageName;
        let dPrice = data.dprice;
        let akmPrice = data.akmprice;
        let addHourPrice = data.add_hour_price;



        // Construct the URL for the new page with query parameters
        var url = "vehiclenewupdate.html" +
          "?id=" + encodeURIComponent(id) +
          "&title=" + encodeURIComponent(title) +
          "&reg_number=" + encodeURIComponent(regNumber) +
          "&insurence_date=" + encodeURIComponent(insurence_date) +
          "&revenue_license_date=" + encodeURIComponent(revenue_license_date) +
          "&image=" + encodeURIComponent(image)+
          "&dprice=" + encodeURIComponent(dPrice) +
          "&akmPrice=" + encodeURIComponent(akmPrice)+
          "&add_hour_price=" + encodeURIComponent(addHourPrice);
          

       

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
              let title = vehicle.title;
              let regNumber = vehicle.reg_number;
              let insurence_date = vehicle.insurence_date;
              let revenue_license_date = vehicle.revenue_license_date;
              let image = vehicle.imageName;
              let dPrice = vehicle.dprice;
              let akmPrice = vehicle.akmprice;
              let addHourPrice = vehicle.add_hour_price;

              let newRow = '<tr>' +
                  '<td>' + id + '</td>' +
                  '<td>' + title + '</td>' +
                  '<td>' + regNumber + '</td>' +
                  '<td>' + insurence_date + '</td>' +
                  '<td>' + revenue_license_date + '</td>' +
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








function getreq(reg) {

  console.log(reg);
 

  $.ajax({
    method: "GET",
    url: "http://localhost:8080/vehicle/getVehicles/" + reg,
    async: true,
    success: function(data) {
      if (data.length > 0) {
        let id = data[0].id;
        let ins = data[0].insurence_date;
        
        // Construct the URL for the new page with query parameters
        var url = "specification.html" +
          "?id=" + encodeURIComponent(id);

        // Redirect the user to the new page
        window.location.href = url;
      } else {
        console.log("No vehicles found");
      }
    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
}












function saveSpecification() {

    
 var reg =$("#regnum").val();
   var fuel= $("#fuel").val();
   var transmission=$("#transmission").val();
   var capacity= $("#capacity").val();
   var speed= $("#speed").val();
   var afuel= $("#afuel").val();
   var door= $("#door").val();
   var seat= $("#seat").val();
   var ac= $("#ac").val();




  // Send AJAX request
  $.ajax({
      method: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/specification/save",
      async: true,
      data: JSON.stringify({
        "reg_number": reg,
        "seat":seat,
        "flue_type": fuel,
        "transmission": transmission,
        "door": door,
        "ac": ac,
        "capacity": capacity,
        "average_fuel": afuel,
        "top_speed": speed
      }),
      success: function (data) {

        swal({
          title: "Good job!",
          text: "Specification is Added Successfully!",
          icon: "success",
          button: "ok!",
        });

        window.location.href = "VehicleView.html";
     
         
      },
      error: function (xhr, status, error) {
          if (error.hasOwnProperty('message')) {
              alert("Error Message: " + error.message);
          } else {
              alert("Unknown Error Occurred");
          }
      }
  });
  }




  
function getVehicleId(id) {
  $.ajax({
    method: "GET",
    url: "http://localhost:8080/vehicle/get/" + id,
    async: true,
    success: function(data) {
      if (data != null) {
        let id = data.id;
        let title = data.title;
        let regNumber = data.reg_number;
        let insurence_date = data.insurence_date;
        let revenue_license_date = data.revenue_license_date;
        let image = data.imageName;
        let dPrice = data.dprice;
        let akmPrice = data.akmprice;
        let addHourPrice = data.add_hour_price;


 
        

        // Construct the URL for the new page with query parameters
        var url = "vehiclenewupdate.html" +
          "?id=" + encodeURIComponent(id) +
          "&title=" + encodeURIComponent(title) +
          "&reg_number=" + encodeURIComponent(regNumber) +
          "&insurence_date=" + encodeURIComponent(insurence_date) +
          "&revenue_license_date=" + encodeURIComponent(revenue_license_date) +
          "&image=" + encodeURIComponent(image)+
          "&dprice=" + encodeURIComponent(dPrice) +
          "&akmPrice=" + encodeURIComponent(akmPrice)+
          "&add_hour_price=" + encodeURIComponent(addHourPrice);
          

       

        // Redirect the user to the new page
        window.location.href = url;

        
      }
    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
}




  
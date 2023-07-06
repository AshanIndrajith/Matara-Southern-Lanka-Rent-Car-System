getAllBooking() 
getAllReqBooking()

getAllByService()
function saveBooking() {
  
 
  let cname = $('#cname').val();
  let cnic = $('#cnic').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let vid = $('#vid').val();
  let fromDate = $('#fromDate').val();
  let toDate = $('#toDate').val();
  let postingDate=new Date();


  alert(cname)
 

  let formData = new FormData();
  formData.append("cusName", cname);
  formData.append("cusNIC", cnic);
  formData.append("cusEmail", email);
  formData.append("cusPhone", phone);
  formData.append("vehicleID", vid);
  formData.append("fromDate", fromDate);
  formData.append("toDate", toDate);

  $.ajax({
    method: "POST",
    url: "http://localhost:8080/booking/save",
    processData: false,
    contentType: false,
    data: formData,
    success: function (data) {
      alert("Booking saved successfully");
      getAllBooking();
      // Redirect to the booking view page
      window.location.href = "BookingView.html";
    },
    error: function (xhr, status, error) {
      let errorMessage = xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : "Error occurred while saving booking. Check the console for more details.";
      alert("Error occurred while saving booking: " + errorMessage);
      console.log(xhr.responseText);
    }
  });
}



// Delete vehicle booking

function deleteBooking(empID){



  swal({
    title: "Are you sure?",
    text: "Permanently delete selected data?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
  
    if (willDelete) {
      $.ajax({
        method: "DELETE",
        url:"http://localhost:8080/booking/delete/"+empID,
        async:true,
    
        success:function(data){
           
            getAllBooking() 
        },
        error:function(xhr,exception){
            alert("Error")
        }
     })
      swal(" Booking detailes  is deleted!", {
        icon: "success",
      });
    } else {
      swal("Your detailes  is safe!");
    }
  });
  

}



function updateStatusBooking(id) {
  $.ajax({
    method: "PUT",
    url: "http://localhost:8080/booking/update/" + id,
    contentType: "application/json",
    data: JSON.stringify({
      // Update any relevant properties here
    }),
    success: function(response) {
      // Handle the successful response
      //console.log("Booking status updated:", response);

      swal({
        title: "Good job!",
        text: "suceesfully accepted!",
        icon: "success",
        button: "ok!",
      });
     
      getAllBooking();
      window.location.href="BookingView.html"
     
    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error updating booking status:", error);
      // You can display an error message or perform alternative actions
    }
  });
}




function rejectedStatusBooking(id) {


  
  swal({
    title: "Are you sure?",
    text: " Rejected selected data?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
  
    if (willDelete) {
      $.ajax({
        method: "PUT",
        url: "http://localhost:8080/booking/rejected/" + id,
        contentType: "application/json",
        data: JSON.stringify({
          // Update any relevant properties here
        }),
        success: function(response) {
          
          getAllBooking();
        },
        error: function(xhr, status, error) {
          // Handle the error response
          console.log("Error updating booking status:", error);
          // You can display an error message or perform alternative actions
        }
      });
      swal(" Booking   is rejected!", {
        icon: "success",
      });
    } else {
      swal("Your detailes  is safe!");
    }
  });
 
}

 







function getAllBooking() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/view",
      success: function(data) {
        $('#RentTable tbody').empty();
  
        for (let booking of data) {
          let id = booking.id;
          let cusName = booking.cus_name;
          let cusNIC = booking.cus_nic;
          let cusEmail = booking.cus_email;
          let cusPhone = booking.cus_phone;
          let vehicleID = booking.vehicle_id;
          let fromDate = booking.from_date;
          let toDate = booking.to_date;
          let  status=booking.status;


          if( status== '1'){

            let newRow = `<tr>
            <td>${id}</td>
            <td>${cusName}</td>
            <td>${cusNIC}</td>
            <td>${cusEmail}</td>
            <td>${cusPhone}</td>
            <td>${vehicleID}</td>
            <td>${fromDate}</td>
            <td>${toDate}</td>
            <td>
              <button type="button" class="update btn btn-success" onclick="getBookingDetails(${id})">Update</button><br><br>
              <button type="button" onclick="deleteBooking(${id})" class="delete btn btn-danger">Delete</button>
            </td>
          </tr>`;
          $('#RentTable tbody').append(newRow);

          }

    
        }
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }



function getAllBooking() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/view",
      success: function(data) {
        $('#RentTable tbody').empty();
  
        for (let booking of data) {
          let id = booking.id;
          let cusName = booking.cus_name;
          let cusNIC = booking.cus_nic;
          let cusEmail = booking.cus_email;
          let cusPhone = booking.cus_phone;
          let vehicleID = booking.vehicle_id;
          let fromDate = booking.from_date;
          let toDate = booking.to_date;
          let  status=booking.status;


          if( status== '1'){

            let newRow = `<tr>
            <td>${id}</td>
            <td>${cusName}</td>
            <td>${cusNIC}</td>
            <td>${cusEmail}</td>
            <td>${cusPhone}</td>
            <td>${vehicleID}</td>
            <td>${fromDate}</td>
            <td>${toDate}</td>
            <td>
              <button type="button" class="update btn btn-success" onclick="getBookingDetails(${id})">Update</button><br><br>
              <button type="button" onclick="deleteBooking(${id})" class="delete btn btn-danger">Delete</button>
            </td>
          </tr>`;
          $('#RentTable tbody').append(newRow);

          }

    
        }
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }






  
  function getBookingDetails(empID) {


    
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/get/" + empID,
      async: true,
      success: function (data) {
        var empID = data.id;
        var cusName = data.cus_name;
        var cusNIC = data.cus_nic;
        var cusEmail = data.cus_email;
        var cusPhone = data.cus_phone;
        var vehicleID = data.vehicle_id;
  
        var url = "BookingUpdate.html" +
          "?empID=" + encodeURIComponent(empID) +
          "&cusName=" + encodeURIComponent(cusName) +
          "&cusNIC=" + encodeURIComponent(cusNIC) +
          "&cusEmail=" + encodeURIComponent(cusEmail) +
          "&cusPhone=" + encodeURIComponent(cusPhone) +
          "&vehicleID=" + encodeURIComponent(vehicleID);
  
        window.location.href = url;
      },
      error: function (xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }




  function getAllReqBooking() {

  
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/byStatus",
      success: function(data) {
        $('#RentRTable tbody').empty();
  
        // Check if data is an array, otherwise wrap it in an array
        if (!Array.isArray(data)) {
          data = [data];
        }
  
        for (let booking of data) {
          let id = booking.id;
          let cusName = booking.cus_name;
          let cusNIC = booking.cus_nic;
          let cusPhone = booking.cus_phone;
          let vehicleID = booking.vehicle_id;
          let fromDate = booking.from_date;
          let toDate = booking.to_date;
        
          let newRow = `<tr>
            <td>${id}</td>
            <td>${cusName}</td>
            <td>${cusNIC}</td>
            <td>${cusPhone}</td>
            <td>${vehicleID}</td>
            <td>${fromDate}</td>
            <td>${toDate}</td>
            <td>
              <button type="button" class="accept btn btn-success" onclick="updateStatusBooking(${id})">Accept</button>
              <button type="button" onclick="rejectedStatusBooking(${id})" class="reject btn btn-danger">Reject</button>
            </td>
          </tr>`;
          $('#RentRTable tbody').append(newRow);
        }
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }





  function updateBooking() {
    let id = $('#empID').val();
    let name = $('#cname').val();
    let nic = $('#nic').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let vid = $('#vid').val();

  
    // Validation checks
    if (name.trim() === "") 

      {
        swal({
          title: "Invalid name. Please enter a valid name",
          button: {
            className: "custom-button-class",
          },
        });
       
    
      return;
    }
    
    if (email.trim() === "") {
      alert("Email address is required.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {

      swal({
        title: "Invalid phone number. Must be 10 digits.",
        button: {
          className: "custom-button-class",
        },
      });
    
      return;
    }
    if (vid.trim() === "") {
      alert("Address is required.");
      return;
    }
  
    // AJAX request
    $.ajax({
      method: "PUT",
      contentType: "application/json",
      url: "http://localhost:8080/booking/updateBooking/" + id,
      async: true,
      data: JSON.stringify({
        cus_name: name,
        cus_nic: nic,
        cus_email: email,
        cus_phone: phone,
        vehicle_id: vid
      }),
      success: function(data) {
        swal({
          title: "Good job!",
          text: "Booking updated successfully!",
          icon: "success",
          button: "ok!",
        });
        
        getAllCustomer();
        window.location.href = "BookingView.html";
      },
      error: function(xhr, status, error) {
        alert("Failed to update booking. Error: " + error);
      }
    });
  }
  
  


  $(document).ready(function() {
    // Fetch pending booking count
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/booking/ptotal",
        success: function(data) {
            $('#pendingBookingCount').text(data);
        },
        error: function(xhr, status, error) {
            console.error("Failed to fetch pending booking count: " + error);
        }
    });
});



$(document).ready(function() {
  // Fetch pending booking count
  $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/total",
      success: function(data) {
          $('#BookingCount').text(data);
      },
      error: function(xhr, status, error) {
          console.error("Failed to fetch pending booking count: " + error);
      }
  });
});









  
function saveeBooking() {
 

   var customerName =$("#cname").val();
   var customerNIC= $("#cnic").val();
   var email=$("#email").val();
   var phone= $("#phone").val();
   var vehicleID= $("#vid").val();
   var fromDate= $("#fromDate").val();
   var toDate= $("#toDate").val();
   var status= 1;


  // Send AJAX request
  $.ajax({
      method: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/booking/save",
      async: true,
      data: JSON.stringify({
        "cus_name": customerName,
        "cus_nic": customerNIC,
        "cus_email": email,
        "cus_phone": phone,
        "vehicle_id": vehicleID,
        "from_date": fromDate,
        "status":status,
        "to_date": toDate
      }),
      success: function (data) {

        swal({
          title: "Good job!",
          text: "Booking is added successfully!",
          icon: "success",
          button: "ok!",
        });


        window.location.href = "BookingView.html";
     
         
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









// function getAllVehicle() {

 

//   var date = $("#toDate").val();

//   $.ajax({
//     method: "GET",
//     url: "http://localhost:8080/vehicle/available/" + date,
//     success: function(data) {
//       // Clear existing table rows
//       $('#AvgTable tbody').empty();

//       // Loop through the array and create table rows dynamically
//       for (let i = 0; i < data.length; i++) {
//         let vehicle = data[i];
//         let id = vehicle.id;
//         let title = vehicle.title;
//         let regNumber = vehicle.reg_number;
//         let insurance_date = vehicle.insurence_date;
//         let revenue_license_date = vehicle.revenue_license_date;
//         let image = vehicle.imageName;
//         let dPrice = vehicle.dprice;
//         let akmPrice = vehicle.akmprice;
//         let addHourPrice = vehicle.add_hour_price;

//         let newRow = '<tr>' +
//           '<td>' + id + '</td>' +
//           '<td>' + title + '</td>' +
//           '<td>' + regNumber + '</td>' +
//           '<td>' + insurance_date + '</td>' +
//           '<td>' + revenue_license_date + '</td>' +
//           '<td><img src="../../system/JwtApplication/vehicle/' + id + '/' + image + '" width="100px"></td>' +
//           '<td>  <label> Rs :</label>' + dPrice + '<label> .00</label></td>' +
//           '<td>  <label> Rs :</label>' + akmPrice + '<label> .00</label></td>' +
//           '<td>  <label> Rs :</label>' + addHourPrice + '<label> .00</label></td>' +
//           '<td><button type="button" class="update btn btn-success" onclick="getVehicleId(' + id + ')" >Booking</button></td>' +
//           '</tr>';
//         $('#AvgTable tbody').append(newRow);
//       }

  

//     },
//     error: function(xhr, status, error) {
//       // Handle the error response
//       console.log("Error:", error);
//     }
//   });
// }





function getAllVehicle() {

 
 
  var fromDate = $("#fromDate").val();
  var toDate = $("#toDate").val();


  alert(fromDate);
  alert(toDate);



  $.ajax({
    method: "GET",
    url: "http://localhost:8080/vehicle/available?fromDate=" + fromDate + "&toDate=" + toDate,
    success: function(data) {
      // Clear existing table rows
      $('#AvgTable tbody').empty();

      // Loop through the array and create table rows dynamically
      for (let i = 0; i < data.length; i++) {
        let vehicle = data[i];
        let id = vehicle.id;
        let title = vehicle.title;
        let regNumber = vehicle.reg_number;
        let insurance_date = vehicle.insurence_date;
        let revenue_license_date = vehicle.revenue_license_date;
        let image = vehicle.imageName;
        let dPrice = vehicle.dprice;
        let akmPrice = vehicle.akmprice;
        let addHourPrice = vehicle.add_hour_price;

        let newRow = '<tr>' +
          '<td>' + id + '</td>' +
          '<td>' + title + '</td>' +
          '<td>' + regNumber + '</td>' +
          '<td>' + insurance_date + '</td>' +
          '<td>' + revenue_license_date + '</td>' +
          '<td><img src="../../system/JwtApplication/vehicle/' + id + '/' + image + '" width="100px"></td>' +
          '<td>  <label> Rs :</label>' + dPrice + '<label> .00</label></td>' +
          '<td>  <label> Rs :</label>' + akmPrice + '<label> .00</label></td>' +
          '<td>  <label> Rs :</label>' + addHourPrice + '<label> .00</label></td>' +
          '<td><button type="button" class="update btn btn-success" onclick="getVehicleId(' + id + ')" >Booking</button></td>' +
          '</tr>';
        $('#AvgTable tbody').append(newRow);
      }

  

    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error:", error);
    }
  });
}














































function getAllByService() {
  $.ajax({
    method: "GET",
    url: "http://localhost:8080/booking/byService",
    success: function(data) {
      $('#return tbody').empty();

      for (let booking of data) {
        let id = booking.id;
        let cusName = booking.cus_name;
        let cusNIC = booking.cus_nic;
        let cusEmail = booking.cus_email;
        let cusPhone = booking.cus_phone;

        let fromDate = booking.from_date;
        let toDate = booking.to_date;
       

          let newRow = `<tr>
          <td>${id}</td>
          <td>${cusName}</td>
          <td>${cusNIC}</td>
          <td>${cusEmail}</td>
          <td>${cusPhone}</td>
          <td>${fromDate}</td>
          <td>${toDate}</td>
          <td>
            <button type="button" class="update btn btn-danger" onclick="updateReturnBooking(${id})">Reseved</button><br><br>
           
          </td>
        </tr>`;
        $('#return tbody').append(newRow);

        

  
      }
    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
}











function updateReturnBooking(id) {
  $.ajax({
    method: "PUT",
    url: "http://localhost:8080/booking/updateReturn/" + id,
    contentType: "application/json",
    data: JSON.stringify({
      // Update any relevant properties here
    }),
    success: function(response) {
      // Handle the successful response
      //console.log("Booking status updated:", response);

      swal({
        title: "Good job!",
        text: "suceesfully accepted!",
        icon: "success",
        button: "ok!",
      });
     
      getAllBooking();
      window.location.href="BookingView.html"
     
    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error updating booking status:", error);
      // You can display an error message or perform alternative actions
    }
  });
}









  
function getVehicleId(id) {

 
  var vid = id;


  var url = "BookingInsertparttwo.html" +
    "?id=" + encodeURIComponent(vid) ;
   

  window.location.href = url;
}
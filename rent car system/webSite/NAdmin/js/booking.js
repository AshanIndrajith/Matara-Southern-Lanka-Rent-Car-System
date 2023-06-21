getAllBooking() 
getAllReqBooking()
function saveBooking() {
  let cname = $('#cname').val();
  let cnic = $('#cnic').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let vid = $('#vid').val();
  let fromDate = $('#fromDate').val();
  let toDate = $('#toDate').val();

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




// function updateEmployee(){

//  let empID=$('#exampleFormControlInput11').val();
//  let name=$('#exampleFormControlInput12').val();
//  let address=$('#exampleFormControlInput13').val();
//  let number=$('#exampleFormControlInput14').val();



//  $.ajax({
//     method: "PUT",
//     contentType: "application/json",
//     url:"http://localhost:8080/api/v1/employee/updateEmployee",
//     async:true,
//     data:JSON.stringify({
//         "empID":empID,
//         "empName":name,
//         "empAddress":address,
//         "empMNumber":number,
//     }),
//     success:function(data){
//         alert("Updated")
//         getAllEmployees()
//         window.location.href = "view_vehicle_table.html";
//     },
//     error:function(xhr,exception){
//         alert("Error")
//     }
//  })

// }




function deleteBooking(empID){
  

 //let empID=$('#exampleFormControlInput1').val();

 $.ajax({
    method: "DELETE",
    url:"http://localhost:8080/booking/delete/"+empID,
    async:true,

    success:function(data){
        alert("deleted");
        getAllBooking() 
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

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

      alert("suceesfully accepted");
      // You can perform additional actions or update the UI as needed
      getAllBooking();
    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error updating booking status:", error);
      // You can display an error message or perform alternative actions
    }
  });
}




function rejectedStatusBooking(id) {
  $.ajax({
    method: "PUT",
    url: "http://localhost:8080/booking/rejected/" + id,
    contentType: "application/json",
    data: JSON.stringify({
      // Update any relevant properties here
    }),
    success: function(response) {
      // Handle the successful response
      //console.log("Booking status updated:", response);

      alert("Booking is rejected");
      // You can perform additional actions or update the UI as needed
      getAllBooking();
    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error updating booking status:", error);
      // You can display an error message or perform alternative actions
    }
  });
}

 




function getEmployeeDetails(empID) {
   


    $.ajax({
      method: "GET",
      url: "http://localhost:8080/api/v1/employee/getEmployeeById/"+empID,
      async: true,
       
      success: function (data) {

        if (data.code === "00") {
            var empID = data.content.empID;
            var name = data.content.empName;
            var address = data.content.empAddress;
            var number = data.content.empMNumber;
          
            // Construct the URL for the new page with query parameters
            var url = "update_vehicle_details.html" +
                      "?empID=" + encodeURIComponent(empID) +
                      "&name=" + encodeURIComponent(name) +
                      "&address=" + encodeURIComponent(address) +
                      "&number=" + encodeURIComponent(number);
          
            // Redirect the user to the new page
            window.location.href = url;
          }
          
    }

    })
    
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
              <button type="button" class="update" onclick="getBookingDetails(${id})">Update</button>
              <button type="button" onclick="deleteBooking(${id})" class="delete">Delete</button>
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
    let empID = $('#id').val();
    let cusName = $('#cname').val();
    let cusNIC = $('#cnic').val();
    let cusEmail = $('#email').val();
    let cusPhone = $('#phone').val();
    let vehicleID = $('#vid').val();
  
    alert(vehicleID);
  
    let bookingData = {
      cus_name: cusName,
      cus_nic: cusNIC,
      cus_email: cusEmail,
      cus_phone: cusPhone,
      vehicle_id: vehicleID
    };
  
    $.ajax({
      method: "PUT",
      contentType: "application/json",
      url: "http://localhost:8080/booking/updateBooking/" + empID,
      async: true,
      data: JSON.stringify(bookingData),
      success: function(data) {
        alert("Updated");
        getAllBooking();
        window.location.href = "BookingView.html";
      },
      error: function(xhr, exception) {
        alert("Error");
      }
    });
  }
  
  
  
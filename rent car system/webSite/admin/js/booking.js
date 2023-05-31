getAllBooking() 
function saveEmployee(){
 let name=$('#exampleFormControlInput2').val();
 let address=$('#exampleFormControlInput3').val();
 let number=$('#exampleFormControlInput4').val();



 $.ajax({
    method: "POST",
    contentType: "application/json",
    url:"http://localhost:8080/api/v1/employee/saveEmployee",
    async:true,
    data:JSON.stringify({
        "empID":"",
        "empName":name,
        "empAddress":address,
        "empMNumber":number,
    }),
    success:function(data){
        alert("saved")
        getAllEmployees()
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

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
        alert("Deleted")
        getAllBooking() 
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

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
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  }
  
  
  function getBookingDetails(empID) {
    
    alert(empID);
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/booking/get/" + empID,
      async: true,
      success: function(data) {

        var empID = data.content.id;
        var cusName = data.content.cus_name;
        var cusNIC = data.content.cus_nic;
        var cusEmail = data.content.cus_email;
        var cusPhone = data.content.cus_phone;
        var vehicleID = data.content.vehicle_id;
  
        var url = "update_Booking_details.html" +
          "?empID=" + encodeURIComponent(empID) +
          "&cusName=" + encodeURIComponent(cusName) +
          "&cusNIC=" + encodeURIComponent(cusNIC) +
          "&cusEmail=" + encodeURIComponent(cusEmail) +
          "&cusPhone=" + encodeURIComponent(cusPhone) +
          "&vehicleID=" + encodeURIComponent(vehicleID);
  
        window.location.href = url;
      }
    });
  }
  
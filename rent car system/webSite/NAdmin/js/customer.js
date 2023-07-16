getAllCustomer() 

function saveCustomer() {
  let cname = $('#cname').val();
  let nic = $('#nic').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();
  let image = $('#image').prop('files')[0];

  // Validation checks
  if (cname.trim() === "" || nic.trim() === "" || email.trim() === "" || phone.trim() === "" || address.trim() === "" || !image) {
      swal({
          title: "Please fill in all fields",
          button: {
              className: "custom-button-class",
          },
      });
      return;
  }
  if (!/^[A-Za-z\s]+$/.test(cname)) {
      swal({
          title: "Invalid Name. Alphabetic characters only.",
          button: {
              className: "custom-button-class",
          },
      });
      return;
  }
  if (!/^(\d{9}[vV]|\d{12})$/.test(nic)) {
      swal({
          title: "Invalid NIC. Must be 9 numbers followed by one 'v' or 'V' letter, or 10 numbers.",
          button: {
              className: "custom-button-class",
          },
      });
      return;
  }
  if (!/^[a-zA-Z0-9._-]+@(gmail|hotmail|yahoo)\.com$/.test(email)) {
      swal({
          title: "Invalid email address. Must be a valid email with domain gmail, hotmail, or yahoo ending with .com",
          button: {
              className: "custom-button-class",
          },
      });
      return;
  }
  if (!/^0\d{9}$/.test(phone)) {
      swal({
          title: "Invalid phone number. Must be 10 digits.",
          button: {
              className: "custom-button-class",
          },
      });
      return;
  }

  if (!/^[\w\s.,-]*$/.test(address)) {
    swal({
        title: "Invalid address. Only letters, numbers, spaces, and basic punctuation are allowed.",
        button: {
            className: "custom-button-class",
        },
    });
    return;
  }
  
  if (image) {
      let fileExtension = image.name.split('.').pop().toLowerCase();
      if (fileExtension === "gif" || fileExtension === "fiff") {
          swal({
              title: "Invalid image file. GIF and FIFF files are not allowed.",
              button: {
                  className: "custom-button-class",
              },
          });
          return;
      }
  }


  // Create a new FormData object
  let formData = new FormData();
  formData.append("name", cname);
  formData.append("nic", nic);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("address", address);
  formData.append("image", image);


  $.ajax({
    method: "POST",
    url: "http://localhost:8080/customer/Save",
    processData: false,
    contentType: false,
    data: formData,
    success: function (data) {

      swal({
        title: "Good job!",
        text: "Successfully Added!",
        icon: "success",
        button: "OK!",
      }).then(() => {
        // Redirect to DamageView.html
        window.location.href = "customerView.html";
      });     
     
    },
    error: function (xhr, exception) {
      alert("Error occurred while saving customer");
    }
  });
}



//   let cname = $('#cname').val();
//   let nic = $('#nic').val();
//   let email = $('#email').val();
//   let phone = $('#phone').val();
//   let address = $('#address').val();
//  // let niccopy = $('#niccopy')[0].files[0]; // Retrieve the selected file from the file input


//   alert(cname);

//   // Create a new FormData object
//   let formData = new FormData();
//   formData.append("name", cname);
//   formData.append("nic", nic);
//   formData.append("email", email);
//   formData.append("phone", phone);
//   formData.append("address", address);
//  // formData.append("niccopy", niccopy);

//   alert(address);

//   $.ajax({
//     method: "POST",
//     url: "http://localhost:8080/customer/save",
//     processData: false,
//     contentType: false,
//     data: formData,
//     success: function (data) {
//       alert("Saved");
//       getAllCustomer();
//     },
//     error: function (xhr, exception) {
//       console.log(xhr.responseText); // Print the error response
//       console.log(exception); // Print the exception details
//       alert("Error occurred while saving customer");
//     }
//   });



function updateCustomer() {
  let id = $('#id').val();
  let name = $('#cname').val();
  let nic = $('#nic').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();

  // Validation checks
  // Validation checks
  if (name.trim() === "") {
    swal({
      title: "Please fill in Customer Name field",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    swal({
      title: "Invalid Name. Alphabetic characters only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (nic.trim() === "") {
    swal({
      title: "Please fill in Customer NIC field",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }


  if (!/^(\d{9}[vV]|\d{12})$/.test(nic)) {
    swal({
      title: "Invalid NIC. Must be 9 numbers followed by one 'v' or 'V' letter, or 12 numbers.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (email.trim() === "") {
    swal({
      title: "Please fill in Customer email field",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (!/^[a-zA-Z0-9._-]+@(gmail|hotmail|yahoo)\.com$/.test(email)) {
    swal({
      title: "Invalid email address. Must be a valid email with domain gmail, hotmail, or yahoo ending with .com",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (phone.trim() === "") {
    swal({
      title: "Please fill in phone number field",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }


  if (!/^0\d{9}$/.test(phone)) {
    swal({
      title: "Invalid phone number. Must be 10 digits.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (address.trim() === "") {
    swal({
      title: "Please fill in address field",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  if (!/^[\w\s.,-]*$/.test(address)) {
    swal({
      title: "Invalid address. Only letters, numbers, spaces, and basic punctuation are allowed.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    });
    return;
  }

  // AJAX request
  $.ajax({
      method: "PUT",
      contentType: "application/json",
      url: "http://localhost:8080/customer/update/" + id,
      async: true,
      data: JSON.stringify({
          "name": name,
          "nic": nic,
          "email": email,
          "phone": phone,
          "address": address
      }),
      success: function(data) {
           
      swal({
        title: "Good job!",
        text: "customer is Updated Successfully!",
        icon: "success",
        button: "ok!",
      });
          getAllCustomer();
          window.location.href = "customerView.html";
      },
      error: function(xhr, exception) {
          alert("Failed to update");
      }
  });
}


function deleteCustomer(empID){
  
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
      url:"http://localhost:8080/customer/delete/"+empID,
      async:true,
  
      success:function(data){
         
         getAllCustomer();
         window.location.href = "customerView.html";
      },
      error:function(xhr,exception){
          alert("Error")
      }
   })
    swal(" customer  details  are deleted!", {
      icon: "success",
    });
  } else {
    swal("Your details  is safe!");
  }
});

 //let empID=$('#exampleFormControlInput1').val();

 

}




function getCustomerDetails(id) {
  $.ajax({
    method: "GET",
    url: "http://localhost:8080/customer/get/" + id,
    async: true,
    success: function(data) {
      if (data != null) {
        var id = data.id;
        var name = data.name;
        var nic = data.nic; // Adjust property name based on your Damage object
        var email = data.email; // Adjust property name based on your Damage object
        var phone = data.phone; // Adjust property name based on your Damage object
        var address = data.address; // Adjust property name based on your Damage object
       

     
        
      

        // Construct the URL for the new page with query parameters
        var url = "customerUpdate.html" +
          "?id=" + encodeURIComponent(id) +
          "&name=" + encodeURIComponent(name) +
          "&nic=" + encodeURIComponent(nic) +
          "&email=" + encodeURIComponent(email) +
          "&phone=" + encodeURIComponent(phone) +
          "&address=" + encodeURIComponent(address);

       

        // Redirect the user to the new page
        window.location.href = url;

        
      }
    },
    error: function(xhr, status, error) {
      console.log("Error:", error);
    }
  });
}






  // function getAllCustomer() {
  //   $.ajax({
  //     method: "GET",
  //     url: "http://localhost:8080/customer/view",
  //     success: function (data) {
  //       populateTable(data);
  //     },
  //     error: function (xhr, exception) {
  //       alert("Error occurred while retrieving damages");
  //     }
  //   });

  
  // }
  
  // function populateTable(data) {
  //   var table = $("#damageTable");
  
  //   // Clear existing table rows
  //   table.empty();
  
  //   // Iterate over the received data and add rows to the table
  //   data.forEach(function (damage) {
  //     var row = $("<tr>");
  //     row.append($("<td>").text(damage.id));
  //     row.append($("<td>").text(damage.vehicle_id));
  //     row.append($("<td>").text(damage.description));
  //     row.append($("<td>").text(damage.date));
  //     row.append($("<td>").text(damage.imageName));
  //     row.append($("<td>").text(damage.amount));
  //     table.append(row);
  //   });
  // }


  function getAllCustomer() {
   
   
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/customer/view",
        success: function(data,status) {
         
            console.log("Status:", status); // Print the status
            console.log("Data:", data); // Print the data
            // Clear existing table rows
            $('#RentTable tbody').empty();

            // Loop through the array and create table rows dynamically
            for (let i = 0; i < data.length; i++) {
                let customer = data[i];
                let id = customer.id;
                let name = customer.name;
                let nic = customer.nic;
                let email = customer.email;
                let phone = customer.phone;
                let address = customer.address;

                let newRow = '<tr>' +
                    '<td>' + id + '</td>' +
                    '<td>' + name + '</td>' +
                    '<td>' + nic + '</td>' +
                    '<td>' + email + '</td>' +
                    '<td>' + phone + '</td>' +
                    '<td>' + address + '</td>' +
                    '<td><button type="button" class="update btn btn-success" onclick="getCustomerDetails(' + id + ')" >Update</button> <button type="button" onclick="deleteCustomer(' + id + ') " class="delete btn btn-danger">Delete</button></td>' +
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
      url: "http://localhost:8080/customer/custotal",
      success: function(data) {
          $('#CustomerCount').text(data);
      },
      error: function(xhr, status, error) {
          console.error("Failed to fetch customer count: " + error);
      }
  });
});

  
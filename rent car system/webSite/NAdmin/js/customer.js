getAllCustomer() 

function saveCustomer() {
  let cname = $('#cname').val();
  let nic = $('#nic').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();

  // Create a new FormData object
  let formData = new FormData();
  formData.append("name", cname);
  formData.append("nic", nic);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("address", address);

  $.ajax({
    method: "POST",
    url: "http://localhost:8080/customer/save",
    processData: false,
    contentType: false,
    data: formData,
    success: function (data) {
      alert("Saved");
      getAllCustomer();
    },
    error: function (xhr, status, error) {
      if (xhr.responseJSON && xhr.responseJSON.message) {
        alert("Error occurred while saving customer: " + xhr.responseJSON.message);
      } else {
        alert("Error occurred while saving customer. Check the console for more details.");
      }
      console.log(xhr.responseText);
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



function updateCustomer(){


 let id=$('#id').val();
 let name=$('#name').val();
 let nic=$('#nic').val();
 let email=$('#email').val();
 let phone=$('#phone').val();
 let address=$('#address').val();







 $.ajax({
    method: "PUT",
    contentType: "application/json",
    url:"http://localhost:8080/customer/update/"+id,
    async:true,
    data:JSON.stringify({
        "name":name,
        "nic":nic,
        "email":email,
        "phone":phone,
        "address":address,

        


    }),
    success:function(data){
   
        alert("Updated")
        getAllCustomer();

        window.location.href = "customerView.html";
    },
    error:function(xhr,exception){
        alert("faild to update")
    }
 })

}

function deleteCustomer(empID){
    

 //let empID=$('#exampleFormControlInput1').val();

 $.ajax({
    method: "DELETE",
    url:"http://localhost:8080/customer/delete/"+empID,
    async:true,

    success:function(data){
        alert("Deleted")
       getAllCustomer();
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

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

  
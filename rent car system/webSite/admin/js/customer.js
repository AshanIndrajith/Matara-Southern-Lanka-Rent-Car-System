getAllCustomer() 


function saveCustomer() {

 
    let cname = $('#cname').val();
    let nic = $('#nic').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let niccopy = $('#niccopy').prop('files')[0];

    alert(cname);
 
  
    // Create a new FormData object
    let formData = new FormData();
    formData.append("name", cname);
    formData.append("nic", nic);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("nicimage", niccopy);

    alert(address)
  
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/customer/save",
      processData: false,
      contentType: false,
      data: formData,
      success: function (data) {
        alert("Saved");
        getAllCustomer()
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving damage");
      }
    });
  }




function updateDamage(){


let id=$('#uid').val();
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
   
        alert("Updated")
        getAllStudents()

        window.location.href = "view_Damage_Details.html";
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

}

function deleteEmployee(empID){
    

 //let empID=$('#exampleFormControlInput1').val();

 $.ajax({
    method: "DELETE",
    url:"http://localhost:8080/damage/delete/"+empID,
    async:true,

    success:function(data){
        alert("Deleted")
        getAllStudents()
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

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
        var url = "update_Damage_details.html" +
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






  function getAllCustomer() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/customer/view",
      success: function (data) {
        populateTable(data);
      },
      error: function (xhr, exception) {
        alert("Error occurred while retrieving damages");
      }
    });

  
  }
  
  function populateTable(data) {
    var table = $("#damageTable");
  
    // Clear existing table rows
    table.empty();
  
    // Iterate over the received data and add rows to the table
    data.forEach(function (damage) {
      var row = $("<tr>");
      row.append($("<td>").text(damage.id));
      row.append($("<td>").text(damage.vehicle_id));
      row.append($("<td>").text(damage.description));
      row.append($("<td>").text(damage.date));
      row.append($("<td>").text(damage.imageName));
      row.append($("<td>").text(damage.amount));
      table.append(row);
    });
  }


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
                    '<td><button type="button" class="update" onclick="getDamageDetails(' + id + ')" >Update</button> <button type="button" onclick="deleteEmployee(' + id + ') " class="delete">Delete</button></td>' +
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

  
  
  // function getAllCustomer() {

  //   alert("1");
  //   $.ajax({
  //     method: "GET",
  //     url: "http://localhost:8080/customer/view",
  //     success: function(data) {
  //       // Clear existing table rows
  //       $('#RentTable tbody').empty();
  
       
  //       // Loop through the array and create table rows dynamically
  //       data.forEach(function(customer) {
  //         let id = customer.id;
  //         let name = customer.name;
  //         let nic = customer.nic;
  //         let email = customer.email;
  //         let phone = customer.phone;
  //         let address = customer.address;

          
  
  //         let newRow = `
  //           <tr>
  //             <td>${id}</td>
  //             <td>${name}</td>
  //             <td>${nic}</td>
  //             <td>${email}</td>
  //             <td>${phone}</td>
  //             <td>${address}</td>
  //             <td>
  //               <button type="button" class="update" onclick="getDamageDetails(${id})">Update</button>
  //               <button type="button" onclick="deleteEmployee(${id})" class="delete">Delete</button>
  //             </td>
  //           </tr>
  //         `;
  
  //         $('#RentTable tbody').append(newRow);
  //       });
  //     },
  //     error: function(xhr, status, error) {
  //       // Handle the error response
  //       console.log("Error:", error);
  //     }
  //   });
  // }


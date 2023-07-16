getAllDamage() 

function test(){
  
}

//Not completed yet
function saveDamage() {
    let vid = $('#vid').val();
    let description = $('#description').val();
    let date = $('#date').val();
    let image = $('#image').prop('files')[0];
    let amount = $('#damount').val();


    if (vid === '' || description === '' || date === '' || image === '' || amount === '') {

      swal({
        title: "Please fill in all fields",
        button: {
          className: "custom-button-class",
        },
      });
     
      return false;
  }

    if (vid === '') {

      swal({
        title: "Please enter a Vehicle Id.",
        button: {
          className: "custom-button-class",
        },
      });
     
      return false;
  }
  
  // Check for special characters in Vehicle Id field
  if (!/^[A-Z]{2,3}-\d{4}$/.test(vid)) {
    swal({
      title: "Invalid registration number. Format should be two or three capital letters followed by a hyphen and four numbers.",
      button: {
        className: "custom-button-class",
      },
    });
      
      return false;
  }
  
  if (description === '') {
    swal({
      title: "Please enter a Description",
      button: {
        className: "custom-button-class",
      },
    });
      
      return false;
  }
  
  if (date === '') {
    swal({
      title: "Please select a Damage Date",
      button: {
        className: "custom-button-class",
      },
    });
      
      return false;
  }
  
  if (image === '') {
    swal({
      title: "Please select an Image",
      button: {
        className: "custom-button-class",
      },
    });
      
      return false;
  }
  
  if (damount === '' || isNaN(parseFloat(amount))) {
    swal({
      title: "Invalid amount. Please enter a valid number.",
      button: {
        className: "custom-button-class",
      },
    });
     
      return false;
  }
  
  

    
    // Create a new FormData object
    let formData = new FormData();
    formData.append("vehicle_id", vid);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("image", image);
    formData.append("amount", amount);

    
  
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/damage/damageSave",
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
          window.location.href = "DamageView.html";
        });
        


        
        getAllDamage() 

        
       
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving damage");
      }
    });
}

function updateDamage(){


 let id=$('#id').val();
 let vID=$('#vid').val();
 let description=$('#description').val();
 let date=$('#date').val();
 let amount=$('#amount').val();

 if (id.trim() === "" || vID.trim() === "" || description.trim() === "" || date.trim() === "" || amount.trim() === "") {
  swal({
      title: "Please fill in all fields",
      button: {
          className: "custom-button-class",
      },
  });
  return;
}

if (!/^[A-Z]{2,3}-\d{4}$/.test(vID)) {
  swal({
      title: "Invalid registration number. Format should be two or three capital letters followed by a hyphen and four numbers.",
      button: {
          className: "custom-button-class",
      },
  });
  return;
}

// // Create a new Date object for the given date
// let selecteddate = new Date(date.val);

// // Get the current date
// const currentDate = new Date();

// // Compare the two dates using getTime() method and check if the given date is in the future
// if (selecteddate > currentDate) {
//   swal({
//     title: "Invalid Date. Please select the correct date",
//     button: {
//         className: "custom-button-class",
//     },
//   });
//   return;
// } 

if (isNaN(parseFloat(amount))) {
  swal({
      title: "Invalid damage amount. Please enter a valid number.",
      button: {
          className: "custom-button-class",
      },
  });
  return;
}



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
        text: "Damage is Updated Successfully!",
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

function deleteEmployee(empID){

    

 //let empID=$('#exampleFormControlInput1').val();

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
      url:"http://localhost:8080/damage/delete/"+empID,
      async:true,
  
      success:function(data){
          getAllDamage() 
      },
      error:function(xhr,exception){
          alert("Error")
      }
   })
    swal(" Damage detailes  is deleted!", {
      icon: "success",
    });
  } else {
    swal("Your detailes  is safe!");
  }
});


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




  function getAllDamage() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/damage/view",
      success: function(data) {
        // Clear existing table rows
        $('#RentTable tbody').empty();
  
        // Loop through the array and create table rows dynamically
        for (let i = 0; i < data.length; i++) {
          let damage = data[i];
          let id = damage.id;
          let vid = damage.vehicle_id;
          let description = damage.description;
          let date = damage.date;
          let image = damage.imageName;
          let amount = damage.amount;

        
         
          let newRow = '<tr>' +
            '<td>' + id + '</td>' +
            '<td>' + vid + '</td>' +
            '<td>' + description + '</td>' +
            '<td>' + date + '</td>' +
            '<td><img src="../../system/JwtApplication/images/'+id+'/'+image+'" width="70px"></td>' +
            '<td>  <label> Rs :</label>'+ amount + '<label> .00</label></td>' +
            '<td><button type="button" class="update btn btn-success" onclick="getDamageDetails(' + id + ')" >Update</button> <button type="button" onclick="deleteEmployee(' + id + ') " class="delete btn btn-danger">Delete</button></td>'
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
  
  

  function generateReport() {
    

    let pdf="pdf";
    $.ajax({
      url: "http://localhost:8080/damage/report/" + pdf,
      method: "GET",
      success: function(response) {
        // Report generation successful

        swal(" Report generated successfully", {
          icon: "success",
        });
        console.log("Report generated successfully. Path: " + response);
        // Perform any further actions you want after successful report generation
      },
      error: function(xhr, status, error) {
        // Report generation failed
        console.error("Failed to generate report. Error: " + error);
        // Perform any error handling or display error message to the user
      }
    });
  }
  


  


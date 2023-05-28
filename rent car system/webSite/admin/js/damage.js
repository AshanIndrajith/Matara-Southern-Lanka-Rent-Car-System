getAllStudents()
// function saveEmployee(){
//  let vid=$('#vid').val();
//  let description=$('#description').val();
//  let date=$('#date').val();
//  let image=$('#image').prop('files')[0]; 
//  let amount=$('#damount').val();

//  alert(vid);



//  $.ajax({
//     method: "POST",
//     contentType: "application/json",
//     url:"http://localhost:8080/damage/damageSave",
//     async:true,
//     data:JSON.stringify({
//         "id":"",
//         "vehicle_id":vid,
//         "description":description,
//         "date":date,
//         "imageName":image,
//         "amount":amount,
//     }),
//     success:function(data){
//         alert("saved")
//         getAllEmployees()
//     },
//     error:function(xhr,exception){
//         alert("Error")
//     }
//  })

// }


function saveEmployee() {
    let vid = $('#vid').val();
    let description = $('#description').val();
    let date = $('#date').val();
    let image = $('#image').prop('files')[0];
    let amount = $('#damount').val();
  
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
        alert("Saved");
        getAllEmployees();
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving damage");
      }
    });
  }

function updateEmployee(){

 let empID=$('#exampleFormControlInput11').val();
 let name=$('#exampleFormControlInput12').val();
 let address=$('#exampleFormControlInput13').val();
 let number=$('#exampleFormControlInput14').val();



 $.ajax({
    method: "PUT",
    contentType: "application/json",
    url:"http://localhost:8080/api/v1/employee/updateEmployee",
    async:true,
    data:JSON.stringify({
        "empID":empID,
        "empName":name,
        "empAddress":address,
        "empMNumber":number,
    }),
    success:function(data){
        alert("Updated")
        getAllEmployees()
        window.location.href = "view_vehicle_table.html";
    },
    error:function(xhr,exception){
        alert("Error")
    }
 })

}

function deleteEmployee(empID){
    alert(empID);

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

function getAllEmployees(){

 $.ajax({
    method: "GET",
    url:"http://localhost:8080/api/v1/employee/getAllEmployees",
    async:true,

    success:function(data){
        if(data.code==="00"){
            $('#empTable').empty();
            for(let emp of data.content){
                    let empID=emp.empID
                    let name=emp.empName
                    let address=emp.empAddress
                    let number=emp.empMNumber

                    var row=`<tr><td class="td-wrapper-content" style="background-color:#b2babb;margin-bottom: 20px;margin-top: 20px;height: auto; padding-top:15px;padding-bottom:15px;">${empID}</td>
                    <td class="td-wrapper-content" style="background-color:#b2babb;margin-bottom: 10px;margin-top: 10px;height: auto;">${name}</td>
                    <td class="td-wrapper-content" style="background-color:#b2babb;margin-bottom: 10px;margin-top: 10px;height: auto;">${address}</td>
                    <td class="td-wrapper-content" style="background-color:#b2babb;margin-bottom: 10px;margin-top: 10px;height: auto;">${number}</td>
                    <td><button type="button" class="btn btn-primary" onclick="getEmployeeDetails(${empID})">update</button><a/>
                    <button type="button" class="btn btn-danger ml-1" onclick="deleteEmployee(${empID})">Delete</button><a/></td>
                    </tr>`;
                    $('#empTable').append(row);
            }
        }
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





  function getAllDamages() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/damage/view",
      success: function (data) {
        populateTable(data);
      },
      error: function (xhr, exception) {
        alert("Error occurred while retrieving damages");
      }
    });

    alert(data);
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


  function getAllStudents() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/damage/view",
      success: function(data) {
        // Clear existing table rows
        $('#studentTable tbody').empty();
  
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
            '<td>' + image + '</td>' +
            '<td>' + amount + '</td>' +
            ' <td><button type="button" class="update">Update</button> <button type="button" onclick="deleteEmployee(' + id + ') " class="delete">Delete</button></td>'
            // Add other table cells as needed
            '</tr>';
          $('#studentTable tbody').append(newRow);
        }
      },
      error: function(xhr, status, error) {
        // Handle the error response
        console.log("Error:", error);
      }
    });
  }


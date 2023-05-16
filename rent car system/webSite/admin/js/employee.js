getAllEmployees();
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
    url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empID,
    async:true,

    success:function(data){
        alert("Deleted")
        getAllEmployees()
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


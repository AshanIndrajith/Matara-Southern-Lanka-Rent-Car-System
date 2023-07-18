getAllVehicle()


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
    

    //validate the user entered data
    // if (title.trim() === "" || reg.trim() === "" || idate.trim() === "" || rdate.trim() === "" || !image || dayprice.trim() === "" || additionalkm.trim() === "" || additionalhour.trim() === "") {
    //   swal({
    //       title: "Please fill in all fields",
    //       button: {
    //           className: "custom-button-class",
    //       },
    //   });
    //   return;
    // }

    if (title === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in title field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the  empty field
      $('#title').focus();
      return;
    }

    
    if (!/^[a-zA-Z\s]+$/.test(title)) {
      swal({
        title: "Invalid title.",
        text: " Alphabetic letters only",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
      $('#title').focus(); // Focus on the invalid field
    });
    return;
  }

 

    
    if (reg === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Registerd number field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the  empty field
      $('#regnum').focus();
      return;
    }
  

    if (!/^[A-Z]{2,3}-\d{4}$/.test(reg)) {
      swal({
        title: "Invalid registration number.",
        text: "Format should be two or three capital letters followed by a hyphen and four numbers.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#regnum').focus(); // Focus on the invalid field
      });
      return;
    }

    //revenue and Insurance should validate here

    if (idate === "") {
      swal({
        title: "Required filed missing",
        text: "Please select date for Insurance date field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the empty  field
      $('#idate').focus();
      return;
    }

    if (rdate === "") {
      swal({
        title: "Required filed missing",
        text: "Please select date for Revenue License Date field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the empty  field
      $('#rdate').focus();
      return;
    }

    if (image === "") {
      swal({
        title: "Required filed missing",
        text: "Please select vehcile image for ... field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the empty  field
      $('#image').focus();
      return;
    }
  
   
    if (image) {
      let fileExtension = image.name.split('.').pop().toLowerCase();
      if (fileExtension === "gif" || fileExtension === "tiff") {
        swal({
          title: "Invalid image file.",
          text: "GIF and TIFF files are not allowed.",
          button: {
            className: "custom-button-class",
          },
        }).then(() => {
          $('#image').focus(); // Focus on the invalid field
        });
        return;
      }
    }

    if (dayprice === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Day price field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the  empty field
      $('#dayprice').focus();
      return;
    }


    if (isNaN(parseFloat(dayprice))) {
      swal({
        title: "Invalid day price.",
        text: " Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#dayprice').focus(); // Focus on the invalid field
      });
      return;
    }


    if (isNaN(parseFloat(additionalkm))) {
      swal({
        title: "Invalid additional km price.",
        text: " Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#additionalkm').focus(); // Focus on the invalid field
      });
      return;
    }


    if (additionalkm === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Additional km price field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the  empty field
      $('#additionalkm').focus();
      return;
    }

  

    if (additionalhour === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Additional hour price field",
        button: {
          className: "custom-button-class",
        },
      });
      // Focus on the  empty field
      $('#additionalhour').focus();
      return;
    }

    if (isNaN(parseFloat(additionalhour))) {
      swal({
        title: "Invalid additional hour price.",
        text: " Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#additionalhour').focus(); // Focus on the invalid field
      });
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
        window.location.href = "specification.html";

        
      },
      error: function (xhr, exception) {
        alert("Error occurred while saving vehicle");
      }
    });
  }


  function updateVehicle() {
    let id = $('#id').val();
    let title = $('#title').val().trim();
    let reg = $('#regnum').val().trim();
    let idate = $('#idate').val().trim();
    let rdate = $('#rdate').val().trim();
    let dayprice = $('#dayprice').val().trim();
    let additionalkm = $('#additionalkm').val().trim();
    let additionalhour = $('#additionalhour').val().trim();
  
    // Validate the user-entered data
    // if (title === "" || reg === "" || idate === "" || rdate === "" || dayprice === "" || additionalkm === "" || additionalhour === "") {
    //   swal({
    //     title: "Please fill in all fields",
    //     button: {
    //       className: "custom-button-class",
    //     },
    //   }).then(() => {
    //     $('.form-control').filter(function () {
    //       return $(this).val().trim() === ""; // Find empty fields
    //     }).first().focus(); // Focus on the first empty field
    //   });
    //   return;
    // }

    if (title === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in title field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#title').focus(); // Focus on the invalid field
      });
      return;
    }

    if (reg === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Registration number field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#regnum').focus(); // Focus on the invalid field
      });
      return;
    }

    if (idate === "") {
      swal({
        title: "Required filed missing",
        text: "Please select date for Insurance date field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#idate').focus(); // Focus on the invalid field
      });
      return;
    }

    if (rdate === "") {
      swal({
        title: "Required filed missing",
        text: "Please select date for Revenue license date field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#rdate').focus(); // Focus on the invalid field
      });
      return;
    }

    
    if (dayprice === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Day price field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#dayprice').focus(); // Focus on the invalid field
      });
      return;
    }

    if (additionalkm === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Additional km price field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#additionalkm').focus(); // Focus on the invalid field
      });
      return;
    }

    
    if (additionalhour === "") {
      swal({
        title: "Required filed missing",
        text: "Please fill in Additional hour price field",
        className: "custom-button-class",
        icon: "error",
        button: "OK",
      }).then(() => {
        $('#additionalhour').focus(); // Focus on the invalid field
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(title)) {
      swal({
        title: "Invalid title.",
        text: " Alphabetic letters only.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#title').focus(); // Focus on the invalid field
      });
      return;
    }
  
    if (!/^[A-Z]{2,3}-\d{4}$/.test(reg)) {
      swal({
        title: "Invalid registration number.",
        text: "Format should be two or three capital letters followed by a hyphen and four numbers.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#regnum').focus(); // Focus on the invalid field
      });
      return;
    }
  
    if (isNaN(parseFloat(dayprice))) {
      swal({
        title: "Invalid day price.",
        text: "Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#dayprice').focus(); // Focus on the invalid field
      });
      return;
    }
  
    if (isNaN(parseFloat(additionalkm))) {
      swal({
        title: "Invalid additional km price.",
        text: "Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#additionalkm').focus(); // Focus on the invalid field
      });
      return;
    }
  
    if (isNaN(parseFloat(additionalhour))) {
      swal({
        title: "Invalid additional hour price.",
        text: " Please enter a valid number.",
        button: {
          className: "custom-button-class",
        },
      }).then(() => {
        $('#additionalhour').focus(); // Focus on the invalid field
      });
      return;
    }
  
    $.ajax({
      method: "PUT",
      contentType: "application/json",
      url: "http://localhost:8080/vehicle/update/" + id,
      async: true,
      data: JSON.stringify({
        "id": id,
        "title": title,
        "reg_number": reg,
        "insurence_date": idate,
        "revenue_license_date": rdate,
        "dprice": dayprice,
        "akmprice": additionalkm,
        "add_hour_price": additionalhour,
      }),
      success: function (data) {
        swal({
          title: "Good job!",
          text: "Vehicle is updated Successfully!",
          icon: "success",
          button: "ok!",
        });
        window.location.href = "vehicleView.html";
      },
      error: function (xhr, exception) {
        alert("Error occurred while updating vehicle");
      }
    });
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
    swal(" Vehicle details  is deleted!", {
      icon: "success",
    });
  } else {
    swal("Your details  is safe!");
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
  var reg = $("#regnum").val();
  var fuel = $("#fuel").val().trim();
  var transmission = $("#transmission").val().trim();
  var capacity = $("#capacity").val().trim();
  var speed = $("#speed").val().trim();
  var afuel = $("#afuel").val().trim();
  var door = $("#door").val().trim();
  var seat = $("#seat").val().trim();
  var ac = $("#ac").val().trim();

  // if (
  //   fuel === "" ||
  //   transmission === "" ||
  //   capacity === "" ||
  //   speed === "" ||
  //   afuel === "" ||
  //   door === "" ||
  //   seat === "" ||
  //   ac === ""
  // ) {
  //   swal({
  //     title: "Please fill in all fields",
  //     className: "custom-button-class",
  //     icon: "error",
  //     button: "OK",
  //   }).then(() => {
  //     $(".form-control").filter(function () {
  //       return $(this).val().trim() === ""; // Find empty fields
  //     }).first().focus(); // Focus on the first empty field
  //   });
  //   return;
  // }

  if (fuel === ""){
    swal({
      title: "Required filed missing",
      text: " Please select a Fuel type",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#fuel").focus();
    });
    return;
  }

  if (transmission === ""){
    swal({
      title: "Required filed missing",
      text: " Please select a transmission type",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#transmission").focus();
    });
    return;
  }

  if (capacity === ""){
    swal({
      title: "Required filed missing",
      text: " Please enter a value for capacity",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#capacity").focus();
    });
    return;
  }

  if (speed === ""){
    swal({
      title: "Required filed missing",
      text: " Please enter a value for speed",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#speed").focus();
    });
    return;
  }

  if (afuel === ""){
    swal({
      title: "Required filed missing",
      text: " Please enter a value for Average fuel",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#afuel").focus();
    });
    return;
  }

  if (door === ""){
    swal({
      title: "Required filed missing",
      text: " Please enter a value for door",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#door").focus();
    });
    return;
  }

  if (seat === ""){
    swal({
      title: "Required filed missing",
      text: " Please enter a value for seat",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#seat").focus();
    });
    return;
  }

  if (ac === ""){
    swal({
      title: "Required filed missing",
      text: " Please select a cooling type",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#door").focus();
    });
    return;
  }

  if (!/^\d+$/.test(capacity)) {
    swal({
      title: "Invalid capacity value.",
      text: " Numeric characters only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#capacity").focus(); // Focus on the invalid field
    });
    return;
  }

  if (!/^\d+(\.\d+)?$/.test(speed)) {
    swal({
      title: "Invalid top speed value.",
      text: "Numeric or double values only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#speed").focus(); // Focus on the invalid field
    });
    return;
  }

  if (!/^\d+(\.\d+)?$/.test(afuel)) {
    swal({
      title: "Invalid average fuel value.",
      text: "Numeric or double values only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#afuel").focus(); // Focus on the invalid field
    });
    return;
  }

  if (!/^\d+$/.test(door)) {
    swal({
      title: "Invalid door value.",
      text: "Numeric values only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#door").focus(); // Focus on the invalid field
    });
    return;
  }

  if (!/^\d+$/.test(seat)) {
    swal({
      title: "Invalid seat value.",
      text: "Numeric values only.",
      className: "custom-button-class",
      icon: "error",
      button: "OK",
    }).then(() => {
      $("#seat").focus(); // Focus on the invalid field
    });
    return;
  }

  // Send AJAX request
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/specification/save",
    async: true,
    data: JSON.stringify({
      reg_number: reg,
      seat: seat,
      flue_type: fuel,
      transmission: transmission,
      door: door,
      ac: ac,
      capacity: capacity,
      average_fuel: afuel,
      top_speed: speed,
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
      if (error.hasOwnProperty("message")) {
        alert("Error Message: " + error.message);
      } else {
        alert("Unknown Error Occurred");
      }
    },
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
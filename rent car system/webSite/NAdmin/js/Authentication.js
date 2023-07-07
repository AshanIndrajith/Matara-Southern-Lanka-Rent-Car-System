
// function saveEmployee(){

//       alert()
//     var fname=$('#fname').val();
//     var lname=$('#lname').val();
//     var email=$('#email').val();
//     var pass=$('#pass').val();




//  $.ajax({
//     method: "POST",
//     contentType: "application/json",
//     url:"http://localhost:8080/api/auth/register",
//     async:true,
//     data:JSON.stringify({
      
        
//         "firstname":fname,
//         "lastname":lname,
//         "email":email,
//         "password":pass,

    

    
//     }),
//     success:function(data){
//         alert("saved");
//         resetForm();
        
//     },
//     error:function(xhr,status,error){
//         if (error.hasOwnProperty('message')) {
//             alert("Error Message: " + error.message);
//           } else {
//             alert("Unknown Error Occurred");
//           }
//     }
//  })

// }

function saveEmployee() {
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var pass = $('#pass').val();
    var con = $('#con').val();

    // Reset error messages
    $('.error-text').text('');

    // Validate first name and last name
    if (fname.trim() === '') {

        swal({
            title: "First name is required",
            button: {
              className: "custom-button-class",
            },
          });
        
       
        return;
    }
    if (lname.trim() === '') {
        swal({
            title: "Last name is required",
            button: {
              className: "custom-button-class",
            },
          });
      
        return;
    }

    // Validate password and confirm password
    if (pass !== con) {
        swal({
            title: "Passwords do not match",
            button: {
              className: "custom-button-class",
            },
          });
      
        return;
    }

    // Send AJAX request
    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/auth/register",
        async: true,
        data: JSON.stringify({
            "firstname": fname,
            "lastname": lname,
            "email": email,
            "password": pass
        }),
        success: function (data) {

            swal({
                title: "Good job!",
                text: "Registed!",
                icon: "success",
                button: "OK!",
              })
       
            resetForm();
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







function LogEmployee(){
    

       var username = $('#username').val();
       var password = $('#password').val();

      
            
            $.ajax({
                url:"http://localhost:8080/api/auth/authenticate",
                type: 'POST',
                data: JSON.stringify({
                    "email":username,
                    "password":password,
                }),
                contentType: 'application/json',
                success: function() {
                    window.location.href = 'index.html';
                },
                error: function(xhr,status,error) {
                    swal({
                        
                        text: "login failed!",
                        icon: "warning",
                        button: "OK!",
                      })
               
                }
            });
            

}



function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("con").value = "";
  }


  function resetFormLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }




// Get user details according to the email
function getUserDetails() {
  var email = "ashan@gmail.com";

  $.ajax({
    method: "GET",
    url: "http://localhost:8080/api/user/getUser/" + email,
    async: true,
    success: function (data) {
      if (data.length > 0) {
        let id = data[0].id;
        let name = data[0].firstname;


        alert(id,name)
        
        // Construct the URL for the new page with query parameters
        var url = "specification.html" +
          "?id=" + encodeURIComponent(id);

        // Redirect the user to the new page
        window.location.href = url;
      } else {
        console.log("No vehicles found");
      }
    },
    error: function (xhr, status, error) {
      console.log("Error:", error);
    }
  });
}

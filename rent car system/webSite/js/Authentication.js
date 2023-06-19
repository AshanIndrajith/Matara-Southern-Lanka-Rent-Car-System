
function saveEmployee(){
    var fname=$('#fname').val();
    var lname=$('#lname').val();
    var email=$('#email').val();
    var pass=$('#pass').val();


 $.ajax({
    method: "POST",
    contentType: "application/json",
    url:"http://localhost:8080/api/auth/register",
    async:true,
    data:JSON.stringify({
      
        
        "firstname":fname,
        "lastname":lname,
        "email":email,
        "password":pass,

    

    
    }),
    success:function(data){
        alert("saved");
        resetForm();
        
    },
    error:function(xhr,status,error){
        if (error.hasOwnProperty('message')) {
            alert("Error Message: " + error.message);
          } else {
            alert("Unknown Error Occurred");
          }
    }
 })

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
                    window.location.href = '../admin/index3.html';
                },
                error: function(xhr,status,error) {
                    alert('Login failed');
                }
            });
            

}



function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
  }


  function resetFormLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }






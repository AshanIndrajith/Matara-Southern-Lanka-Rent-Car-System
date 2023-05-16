
function saveEmployee(){
    var fname=$('#fname').val();
    var lname=$('#lname').val();
    var email=$('#email').val();
    var pass=$('#pass').val();

 $.ajax({
    method: "POST",
    contentType: "application/json",
    url:"http://localhost:7050/api/auth/register",
    async:true,
    data:JSON.stringify({
      
        "firstname":fname,
        "lastname":lname,
        "email":email,
        "password":pass,

       
    }),
    success:function(data){
        alert("saved")
        
    },
    error:function(xhr,exception){
        alert("Error bokka")
    }
 })

}



function LogEmployee(){

       var username = $('#username').val();
       var password = $('#password').val();
            
            $.ajax({
                url:"http://localhost:7050/api/auth/authenticate",
                type: 'POST',
                data: JSON.stringify({
                    "email":username,
                    "password":password,
                }),
                contentType: 'application/json',
                success: function() {
                    alert('Login successful!');
                    window.location.href = '';
                },
                error: function(response) {
                    alert('Login failed: ' + response.responseJSON.message);
                }
            });
            

}






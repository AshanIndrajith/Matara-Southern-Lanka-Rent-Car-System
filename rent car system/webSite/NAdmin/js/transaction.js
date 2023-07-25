




  
function getAllTransactionReport() {

 
 
  var startDate = $("#fromDate").val();
  var endDate = $("#toDate").val();





  $.ajax({
    method: "GET",
    url: "http://localhost:8080/transaction/availableTransaction?startDate=" + startDate + "&endDate=" + endDate,
    success: function(data) {
      // Clear existing table rows

      $('#reportTable tbody').empty();
      swal(" Report generated successfully", {
        icon: "success",
      });

      
     
      // Loop through the array and create table rows dynamically
      for (let i = 0; i < data.length; i++) {
        let tr = data[i];
        let id = tr.id;
        let vid = tr.booking_id;
        let amount = tr.amount;





        let newRow = '<tr>' +
          '<td>' + id + '</td>' +
          '<td>' + vid + '</td>' +
          '<td>  <label> Rs :</label>'+ amount + '<label> .00</label></td>' +
          // Add other table cells as needed
          '</tr>';

         
        $('#reportTable tbody').append(newRow);
      }




    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.log("Error:", error);
    }
  });
}





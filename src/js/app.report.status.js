//const API_URL = "http://localhost:8081/api/";
const API_URL = "http://150.136.244.240:8080/api/";

function getReservation() {
  //elemento del DOM->document object model
  $.ajax({
    url: `${API_URL}Reservation/report-status`,
    type: "GET",
    datatype: "JSON",
    headers:{
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"*"
    },
    success: renderReservation,
  });
}

function renderReservation(response) {
  const $responseContainer = document.getElementById("response");
  $responseContainer.innerHTML='';
  
    const row = response;
    console.log(response)
    $responseContainer.innerHTML += `
    <tr>
        <td>
            ${row.completed}
        </td>
        <td>
            ${row.cancelled}
        </td>      
    </tr>
        `;
  
}

getReservation();

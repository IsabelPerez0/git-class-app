const API_URL = "http://localhost:8081/api/";

function getQuadbike() {
  //$responseContainer.innerHTML='Texto agregado desde javascript';
  $.ajax({
    url: `${API_URL}Quadbike/all`,
    type: "GET",
    datatype: "JSON",
    success: renderQuadbike,
  });
}

function renderQuadbike(response) {
  const $responseContainer = document.getElementById("response");
  // console.log(response);
  for (let x = 0; x < response.length; x++) {
    const row = response[x];
    $responseContainer.innerHTML += `
    <tr>
        <td>
            ${row.id}
        </td>
        <td>
            ${row.name}
        </td>
        <td>
            ${row.brand}
        </td>
        <td>
            ${row.description}
        </td>
        <td>
            ${row.year}
        </td>
        <td>
            ${row.idcategory}
        </td>
        <td>
            <button onclike=renderQuadbikeToUpdate(${row.id},'${row.name}','${row.description}', '${row.brand}', ${row.year}, ${row.category.id})>Actualizar</button>
        </td>
        <td>
            <button onclike=deleteQuadbike(${row.id})>Eliminar</button>
        </td>
    </tr>
    `;
  }
}
//como hago para cambiar el codigo de 200 a 201?
function createQuadbike() {
  let dataToSend = {
    name: $("#name").val(),
    brand: $("#brand").val(),
    year: parseInt($("#year").val()),
    description: $("#description").val(),
    category: {
        id: parseInt($("#category").val()),
    },
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/save`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
   alert("Quadbike register successful")
   $("#name").val("")
   $("#brand").val("")
   $("#year").val("")
   $("#description").val("")
   $("#category").val("")
  });
}

function updateQuadbike() {
  let dataToSend = {
    name: $("#name").val(),
    brand: $("#brand").val(),
    year: parseInt($("#year").val()),
    description: $("#description").val(),
    category: {
        id: parseInt($("#category").val()),
    },
  };
  dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/update`,
    method: "PUST",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
   alert("Quadbike register successful")
   $("#name").val("")
   $("#brand").val("")
   $("#year").val("")
   $("#description").val("")
   $("#category").val("")
  });

  getQuadbike();
}
//en donde se actualiza la tabla sin recargar
function renderQuadbikeToUpdate(id, name, description, brand, category) {
  
   $("#idcostume").val(id),
    $("#name").val(name),
    $("#brand").val(brand),
    $("#year").val(year),
    $("#description").val(description),
    $("#category").val(category)
  
 /* dataToSend = JSON.stringify(dataToSend);

  const settings = {
    url: `${API_URL}Quadbike/update`,
    type: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataToSend,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });*/
}

function deleteQuadbike(id) {


  const settings = {
    url: `${API_URL}Quadbike/delete/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  };

  $.ajax(settings).done(function (response) {
    alert("Quadbike delete successful")
  });
}

getQuadbike();

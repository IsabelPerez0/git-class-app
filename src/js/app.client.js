console.log(4+4)


function sumTwoNumbers(){
    return 4+5
}

function changeContent(){
    document.getElementById("toChange").innerHTML="cambio desde javascript"

}

function getCostumes(){
    const $responseContainer = document.getElementById("response");
    //$responseContainer.innerHTML='Texto agregado desde javascript';
    $.ajax({
        url:"https://g733f2e5f01a568-i3uzynq7iaxfveju.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        type: "GET",
        datatype:"",
        success:function(response){
            console.log(response.items)
            for(let x=0; x<response.items.length;x++){
                const costume = response.items[x];
                $responseContainer.innerHTML+=`
                id:${costume.idcostume}
                <br>
                nombre:${costume.name}
                <br>
                marca:${costume.brand}
                <br>
                años:${costume.year}
                <br>
                descripcion:${costume.description}
                <br>
                categoria:${costume.idcategory}`+"<br><br>";
            }

        }
        

    })

}

function sendCostume(){
    let dataToSend={
        "idcostume":parseInt($("#idcostume").val()),
        "name":$("#name").val(),
        "brand":$("#brand").val(),
        "year":parseInt($("#year").val()),
        "description":$("#description").val(),
        "idcategory":parseInt($("#idcategory").val()) 
    }
    dataToSend=JSON.stringify(dataToSend);

    const settings ={
        url:"https://g733f2e5f01a568-i3uzynq7iaxfveju.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        type: "POST",
        "headers" : {
            "Content-Type":"application/json"
        },
        "data": dataToSend,
    }; 

    $.ajax(settings).done(function (response){
            console.log(response)
    });
}

function updateCostume(){
    let dataToSend={
        "idcostume":parseInt($("#idcostume").val()),
        "name":$("#name").val(),
        "brand":$("#brand").val(),
        "year":parseInt($("#year").val()),
        "description":$("#description").val(),
        "idcategory":parseInt($("#idcategory").val()) 
    }
    dataToSend=JSON.stringify(dataToSend);

    const settings ={
        url:"https://g733f2e5f01a568-i3uzynq7iaxfveju.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        type: "PUT",
        "headers" : {
            "Content-Type":"application/json"
        },
        "data": dataToSend,
    }; 
    
    $.ajax(settings).done(function (response){
            console.log(response)
    });

}

function deleteCostume(){
    let dataToSend={
        "idcostume":parseInt($("#idcostume").val()),
    }
    dataToSend=JSON.stringify(dataToSend);

    const settings ={
        url:"https://g733f2e5f01a568-i3uzynq7iaxfveju.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        type: "DELETE",
        "headers" : {
            "Content-Type":"application/json"
        },
        "data": dataToSend,
    }; 
    
    $.ajax(settings).done(function (response){
            console.log(response)
    });

}

getCostumes()
console.log(sumTwoNumbers())
changeContent()
const BASE_URL = "http://127.0.0.1:8080/clients";

// HIDE ALL FIELDS WHEN THE DOCUMENTO IS READY
$(document).ready(function () {
    hideAll();
});

// METHOD TO CLEAR ALL FIELDS FROM THE FORMS
function clearFields() {
    $('#post-form').trigger("reset");
    $('#put-form').trigger("reset");
    $('#delete-form').trigger("reset");
}

// METHOD TO HIDE ALL OTHER FORMS
function hideAll() {
    clearFields();
    $("#post-div").hide();
    $("#get-div").hide();
    $("#put-div").hide();
    $("#delete-div").hide();
}

$("#post").click(function (e) {
    e.preventDefault();
    hideAll();
    $("#post-div").show();

    $("#post-button").click(function (e) {
        e.preventDefault();
        let nome = $("#post-client-name").val();
        let cpf = $("#post-client-cpf").val();
        let email = $("#post-client-email").val();

        let client = {
            "name": nome,
            "cpf": cpf,
            "email": email
        }

        if (nome === "" || cpf === "" || email === "") {
            window.alert("ERRO, Um ou mais campos estão em branco")
            return;
        }

        let request = JSON.stringify(client);

        $.ajax({
            url: BASE_URL,
            contentType: 'application/json',
            cache: false,
            method: 'POST',
            type: 'POST',
            data: request,
            dataType: "json",
            success: function (response) {
                alert("Usuário cadastrado com sucesso")
            }
        });
        clearFields();
    });
});

//GET METHOD TO SHOW ALL FIELDS FROM THE BACKEND
$("#get").click(function (e) {
    e.preventDefault();
    hideAll();
    $("#get-div").show();
    $.ajax({
        url: BASE_URL,
        contentType: 'application/json',
        cache: false,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            populateGet(data);
        }
    });
});

// METHOD TO POPULATE THE GET WITH THE DATA RECEIVED FROM BACKEND
function populateGet(data) {
    $("#tbody").html('');
    data.forEach(element => {
        $("#tbody").append(`
            <tr>
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.cpf}</td>
                <td>${element.email}</td>
            </tr>`);
    });
}

// PUT METHOD TO UPDATE CLIENT DATA
$("#put").click(function (e) {
    e.preventDefault();
    hideAll();
    $("#put-div").show();

    $("#put-button").click(function (e) {
        e.preventDefault();
        let id = $("#put-client-id").val();
        let nome = $("#put-client-name").val();
        let cpf = $("#put-client-cpf").val();
        let email = $("#put-client-email").val();

        let client = {
            "id": id,
            "name": nome,
            "cpf": cpf,
            "email": email
        }

        if (id === "" || nome === "" || cpf === "" || email === "") {
            window.alert("ERRO, Um ou mais campos estão em branco")
            return;
        }

        let request = JSON.stringify(client);

        $.ajax({
            url: BASE_URL + `/${client.id}`,
            contentType: 'application/json',
            cache: false,
            method: 'PUT',
            type: 'PUT',
            data: request,
            dataType: "json",
            success: function (response) {
                alert("Usuário atualizado com sucesso")
            }
        });
        clearFields();
    });
});



//DELETE METHOD TO EXCLUDE A CLIENT DATA
$("#delete").click(function (e) {
    e.preventDefault();
    hideAll();
    $("#delete-div").show();

    $("#delete-button").click(function (e) {
        e.preventDefault();

        let id = $("#delete-client-id").val();

        if (id === "") {
            window.alert("ERRO, Id do cliente em branco")
            return;
        }

        $.ajax({
            url: BASE_URL + `/${id}`,
            contentType: 'application/json',
            cache: false,
            method: 'DELETE',
            type: 'DELETE',
            data: "",
            dataType: "json",
            success: function (response) {
            }
        });
        alert("Usuário deletado com sucesso");
        clearFields();
    });
});

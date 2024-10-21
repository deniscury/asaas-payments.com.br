$(document).ready(function () {
    getClients();

    $("#invoiceValue").maskMoney({thousands:'.', decimal:',', allowZero:true, prefix: 'R$ '});

    $("#documentType").change(function(){
        if($(this).val() == "CNPJ"){
            $("#clientDocument").mask("99.999.999/9999-99");
        }
        else{
            $("#clientDocument").mask("999.999.999-99");
        }
    });

    $("#maintenanceClient").on("hidden.bs.modal", function () {
        $("#clientId").val("");
        $("#clientName").val("");
        $("#clientDocument").val("");
        $("#clientEmail").val("");
        $("#clientPhone").val("");
        $("#clientPostalCode").val("");
        $("#clientAddress").val("");
        $("#clientAddressNumber").val("");
        unmaskForm();
    });

    $("#invoiceModal").on("hidden.bs.modal", function () {
        $("#clientId").val("");
        $("#invoiceValue").val("");
        $("#clientData").html("<img class='img-responsive img-rounded' style='max-height: 30px; max-width: 30px;' src='/img/ajax_loader.gif'>");
    });
});

function getClients() {
    $.ajax({
        url: urlApi + "/client",
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            clients = response.data[0];
            dataTableData = [];

            $("#tbClients tbody").empty();
            $.each(clients, function (index, client) {
                if (client.deleted_at == null){
                    buttons = "<div class='text-center'>" +
                            "<button class='btn btn-sm btn-primary' title='Editar Cliente' onclick='updateClient(" + client.id +");'><i class='fas fa-edit'></i></button>&nbsp;" +
                            "<button class='btn btn-sm btn-danger' title='Excluir Cliente' onclick='deleteClient(" + client.id + ");'><i class='fas fa-trash'></i></button>&nbsp;" +
                            "<button class='btn btn-sm btn-warning' title='Visualizar Cobranças' onclick='clientInvoices(" + client.id + ");'><i class='fas fa-eye'></i></button>&nbsp;" +
                            "<button class='btn btn-sm btn-success' title='Gerar Cobrança' onclick='invoiceModal(" + client.id + ");'><i class='fas fa-money-bill'></i></button>"+
                        "</div>"
                }
                else{
                    buttons = "<button class='btn btn-sm btn-success' title='Restaurar Cliente' onclick='restoreClient(" + client.id + ");'><i class='fas fa-arrow-up'></i></button>";
                }
                

                dataTableData.push({
                    id: client.id,
                    name: client.name,
                    document: client.document,
                    email: client.email,
                    phone: client.phone,
                    postal_code: client.postal_code,
                    address: client.address,
                    address_number: client.address_number,
                    options: buttons
                });
            });

            dataTableOptions.data = dataTableData;
            dataTableOptions.columns = [
                {data: "id", type: "num"}, 
                {data: "name"}, 
                {data: "document"}, 
                {data: "email"},
                {data: "phone"}, 
                {data: "postal_code"}, 
                {data: "address"}, 
                {data: "address_number"}, 
                {data: "options"}
            ];
            dataTableOptions.columnDefs = [
                {targets: 0, className: 'text-center'},
                {targets: 3, className: 'text-center'},
                {targets: 4, className: 'text-center'},
                {targets: 5, className: 'text-center'},
                {targets: 7, className: 'text-center'},
                {targets: 8, className: 'text-center'}
            ];

            $("#tbClients").dataTable(dataTableOptions);
        },
    });
}

function maskForm(){
    $("#documentType").change();
    $("#clientPostalCode").mask("99999-999");

}

function unmaskForm(){
    $("#clientDocument").unmask();
    $("#clientPostalCode").unmask();
}

function addClient() {
    $("#maintenanceClient").modal();
    maskForm();
}

function updateClient(id) {
    $("#maintenanceClient").modal();
    getClient(id, 1);
}

function clientInvoices(id){
    location.href = "/invoice/client/"+id;
}

function invoiceModal(id) {
    $("#invoiceModal").modal();
    getClient(id, 2);
}

function getClient(id, tipo) {
    $.ajax({
        url: urlApi + "/client/" + id,
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            data = response.data;
            clientData(data, tipo);
        },
        error: fnError,
    });
}

function clientData(data, tipo) {
    $("#clientId").val(data.id);

    if(tipo == 1){
        $("#clientName").val(data.name);
        documentNumber = data.document;
        if (documentNumber.length == '11'){
            $("#documentType").val("CPF");
        }
        else{
            $("#documentType").val("CNPJ");
        }
        $("#clientDocument").val(documentNumber);
        $("#clientEmail").val(data.email);
        $("#clientPhone").val(data.phone);
        $("#clientPostalCode").val(data.postal_code);
        $("#clientAddress").val(data.address);
        $("#clientAddressNumber").val(data.address_number);
        maskForm();
    }

    if(tipo == 2){

        data =   
            "<strong>" + data.id + " - " + data.name + " <br/> CPF/CNPJ: " + data.document + "</strong><br/>" +
            "<small>" + "Email: " + data.email + " - Telefone: " + data.phone + "</small><br/>" +
            "<small>" + "Endereço: " + data.postal_code + " - " + data.address + ", " + data.address_number + "</small>";

        $("#clientData").html(data);
        $("#invoiceValue").focus();        
    }
}

function saveClient() {
    unmaskForm();
    id = $("#clientId").val();
    name = $("#clientName").val();
    documentNumber = $("#clientDocument").val();
    email = $("#clientEmail").val();
    phone = $("#clientPhone").val();
    postal_code = $("#clientPostalCode").val();
    address = $("#clientAddress").val();
    address_number = $("#clientAddressNumber").val();

    if (name == "") {
        jAlert("Por favor preencha o nome do cliente", "Ok");
        return;
    }

    if (document == "") {
        jAlert("Por favor preencha o documento do cliente", "Ok");
        return;
    }

    if (email == "") {
        jAlert("Por favor preencha o email do cliente", "Ok");
        return;
    }

    if (phone == "") {
        jAlert("Por favor preencha o telefone do cliente", "Ok");
        return;
    }

    if (postal_code == "") {
        jAlert("Por favor preencha o CEP do cliente", "Ok");
        return;
    }

    if (address == "") {
        jAlert("Por favor preencha o endereço do cliente", "Ok");
        return;
    }

    if (address_number == "") {
        jAlert("Por favor preencha o número do endereço do cliente", "Ok");
        return;
    }

    url = urlApi + "/client";
    type = "POST";

    if (id != ""){
        url += "/" + id;
        type = "PUT";
    }
    
    $.ajax({
        url: url,
        dataType: "json",
        type: type,
        crossDomain: true,
        async: true,
        data: {
            name: name,
            document: documentNumber,
            email: email,
            phone: phone,
            postal_code: postal_code,
            address: address,
            address_number: address_number
        },
        beforeSend: function(){
            $("#btnSaveClient").hide();
        },
        success: function (response) {
            message = response.message;

            if (message != undefined) {
                jAlert(message, "Ok");
            }

            resetDataTable("tbClients", 9)
            getClients();
            $("#maintenanceClient").modal("hide");
        },
        error: fnError,
        complete: function(){
            maskForm();
            $("#btnSaveClient").show();
        }
    });
}

function deleteClient(id) {
    jConfirm(
        "Tem certeza de que deseja excluir esse cliente?", "Sim, tenho certeza", "Não, desejo cancelar",
        function(confirmation){
            if (confirmation) {
                $.ajax({
                    url: urlApi + "/client/" + id,
                    dataType: "json",
                    type: "DELETE",
                    crossDomain: true,
                    async: true,
                    beforeSend: function(){
                        resetDataTable("tbClients", 9)
                    },
                    success: function (response) {
                        message = response.message;
                        if (message != undefined) {
                            jAlert(message, "Ok");
                        }
                    },
                    error: fnError,
                    complete: function(){
                        getClients();
                    }
                });
            }
        }
    );
}

function restoreClient(id) {
    jConfirm(
        "Tem certeza de que deseja restaurar esse cliente?", "Sim, tenho certeza", "Não, desejo cancelar",
        function(confirmation){
            if (confirmation) {
                $.ajax({
                    url: urlApi + "/client/" + id + "/restore",
                    dataType: "json",
                    type: "POST",
                    crossDomain: true,
                    async: true,
                    beforeSend: function(){
                        resetDataTable("tbClients", 9)
                    },
                    success: function (response) {
                        message = response.message;
                        if (message != undefined) {
                            jAlert(message, "Ok");
                        }
                    },
                    error: fnError,
                    complete: function(){
                        getClients();
                    }
                });
            }
        }
    );
}

function generateInvoice() {
    client_id = $("#clientId").val();
    billing_type = $("#invoiceBillingType").val();
    value = $("#invoiceValue").val().replace("R$", "").replaceAll(".", "").replaceAll(",", ".");

    if (value == "" || value <= 0.00) {
        jAlert("Por favor preencha o valor da cobrança.", "Ok");
        return;
    }

    $.ajax({
        url: urlApi + "/invoice/client/" + client_id,
        dataType: "json",
        type: "POST",
        crossDomain: true,
        async: true,
        data: {
            billing_type: billing_type,
            value: value
        },
        beforeSend: function(){
            $("#btnInvoice").hide();
        },
        success: function (response) {
            message = response.message;
            data = response.data;

            if (message != undefined) {
                jAlert(message, "Ok", 
                    function(){
                        location.href = "/invoice/payment/" + data.id;
                    }
                );
            }
        },
        error: fnError,
        complete: function(){
            $("#btnInvoice").show();
        }
    });
}
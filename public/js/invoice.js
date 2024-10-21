$(document).ready(function () {
    getInvoices();
});

function getInvoices() {
    url = urlApi + "/invoice";
    client_id = $("#clientId").val();

    if(client_id != "" && client_id != undefined){
        url += "/client/"+client_id;
    }

    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            invoices = response.data[0];
            dataTableData = [];

            $("#tbInvoices tbody").empty();
            $.each(invoices, function (index, invoice) {
                dueDate = new Date(invoice.due_date);
                client = invoice.client;

                button = "";
                
                if(invoice.status == "PENDING"){
                    btnClass = "btn-success";
                    title = "Efetuar Pagamento";
                    icon = "money-bill";
                }
                else{
                    btnClass = "btn-primary";
                    title = "Visualizar Cobrança";
                    icon = "eye";
                }

                button = "<button class='btn btn-sm " + btnClass + "' title='" + title + "' onclick='payment(" + invoice.id + ");'><i class='fas fa-" + icon + "'></i></button>";

                billing_type = invoice.billing_type

                if(billing_type == "CREDIT_CARD"){
                    billing_type = "Cartão de Crédito";
                }

                if(billing_type == "BOLETO"){
                    billing_type = "Boleto";
                }

                dataTableData.push({
                    id: invoice.id,
                    client: client.id + " - " + client.name,
                    billing_type: billing_type,
                    due_date: dueDate.toLocaleDateString('pt-BR'),
                    value: invoice.value.replace(".", ","),
                    status: invoice.status,
                    button: button
                });
            });

            dataTableOptions.data = dataTableData;
            dataTableOptions.columns = [
                {data: "id", type: "num"}, 
                {data: "client"}, 
                {data: "billing_type"}, 
                {data: "due_date"},
                {data: "value"}, 
                {data: "status"}, 
                {data: "button"}
            ];
            dataTableOptions.columnDefs = [
                {targets: 0, className: 'text-center'},
                {targets: 1, visible: false},
                {targets: 2, className: 'text-center'},
                {targets: 3, className: 'text-center'},
                {targets: 4, className: 'text-right'},
                {targets: 5, className: 'text-center'},
                {targets: 6, className: 'text-center'}
            ];
            dataTableOptions.rowGroup = {
                dataSrc: "client"
            }
            dataTableOptions.order = [
                [1, "asc"]
            ]

            $("#tbInvoices").dataTable(dataTableOptions);
        },
    });
}

function getInvoice(){
    payment_id = $("#paymentId").val();

    $.ajax({
        url: urlApi + "/invoice/payment/" + payment_id,
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            invoice = response.data;
            clientData(invoice.client, 2);
        },
    });
}

function payment(id){
    location.href = "/invoice/payment/" + id
}


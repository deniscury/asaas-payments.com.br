$(document).ready(function () {
    getInvoices();
});

function getInvoices() {
    url = urlApi + "/payment";
    client_id = $("#client_id").val();

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
                    button = "<button class='btn btn-sm btn-success' title='Efetuar Pagamento' onclick='payment(" + invoice.id + ");'><i class='fas fa-money-bill'></i></button>"
                }

                dataTableData.push({
                    id: invoice.id,
                    client: client.id + " - " + client.name,
                    billing_type: invoice.billing_type,
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


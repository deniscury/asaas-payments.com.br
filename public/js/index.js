var dataTableOptions = {
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.13.1/i18n/pt-BR.json",
    },
    lengthMenu: [5, 10, 25, 50, 75, 100],
    pageLength: 5
};

$(document).ready(function () {});

function resetDataTable(tableName, colspan){
    table = $("#"+tableName).DataTable();
    table.destroy();
    $("#" + tableName + " tbody").empty().append(
        "<tr><td colspan='" + colspan + "' class='text-center'><img class='img-responsive img-rounded' style='max-height: 30px; max-width: 30px;' src='/img/ajax_loader.gif'></td></tr>"
    );
};

var fnError = function(response){
    response = JSON.parse(response.responseText);

    message = response.message;
    errors = response.error;

    $.each(errors, function (index, error) {
        message += "\n" + error;
    });

    alert(message);
}
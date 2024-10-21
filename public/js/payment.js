$(document).ready(function () {
    getInvoice();

    $("#dvPaid, #dvBill, #dvPix, #dvCreditCard").hide();
});

function getInvoice(){
    invoice_id = $("#invoiceId").val();

    $.ajax({
        url: urlApi + "/invoice/" + invoice_id,
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            invoice = response.data;
            clientData(invoice.client, 2);
            invoiceData(invoice);
            
            asaasData = invoice.asaas_data;
            status = asaasData.status;
            billing_type = invoice.billing_type;

            if(status == "CONFIRMED" || status == "RECEIVED"){
                $("#dvPaid").show();
            }

            if(status == "PENDING"){
                if (billing_type == "BOLETO"){
                    bill(invoice);
                }

                if (billing_type == "PIX"){
                    pix(invoice);
                }

                if (billing_type == "CREDIT_CARD"){
                    $("#dvCreditCard").show();
                }
            }


        },
        error: fnError
    });
}

function invoiceData(data) {
    billing_type = data.billing_type;
    billing_type = (billing_type == "CREDIT_CARD") ? "CARTÃO DE CRÉDITO" : billing_type;
    dueDate = new Date(data.due_date);

    data =   
        "<strong>Pedido: " + data.id + " <br/> R$ " + data.value + "</strong><br/>" +
        "<small>" + "Tipo de cobrança: " + billing_type + " - Vencimento: " + dueDate.toLocaleDateString('pt-BR') + "</small>";

    $("#invoiceData").html(data);
}

function bill(invoice){
    id = invoice.id;

    asaasData = invoice.asaas_data;
    $("#btnBill").attr("href", asaasData.bankSlipUrl);

    $.ajax({
        url: urlApi + "/invoice/" + id + "/bill",
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            data = response.data;
            billData = data.bill;
            
            $("#identificationField").html(billData.identificationField);
            $("#dvBill").show();
        },
        error: fnError
    });
}

function pix(invoice){
    id = invoice.id;
    $.ajax({
        url: urlApi + "/invoice/" + id + "/pix",
        dataType: "json",
        type: "GET",
        crossDomain: true,
        async: true,
        success: function (response) {
            data = response.data;
            pixData = data.pix;

            $("#qrCode").attr("src", "data:image/jpeg;base64, "+pixData.encodedImage)
            $("#pixLink").html(pixData.payload);
            $("#dvPix").show();
        },
        error: fnError
    });
}



function creditCard(){
    id = $("#invoiceId").val();
    card_number = $("#cardNumber").val();
    expiry_month = $("#expiryMonth").val();
    expiry_year = $("#expiryYear").val();
    ccv = $("#ccv").val();

    $.ajax({
        url: urlApi + "/invoice/" + id + "/credit-card",
        dataType: "json",
        type: "POST",
        crossDomain: true,
        async: true,
        beforeSend: function(){
            $("#btnCreditCard").hide();
        },
        data: {
            card_number: card_number,
            expiry_month: expiry_month,
            expiry_year: expiry_year,
            ccv: ccv
        },
        success: function (response) {
            message = response.message;

            if (message != undefined) {
                jAlert(message, "Ok", 
                    function(){
                        location.reload();
                    }
                );
            }
        },
        error: fnError,
        complete: function(){
            $("#btnCreditCard").show();
        }
    });
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index($client = null){
        $variables = array(
            "title" => "Relatório de Cobranças",
            "components" => array(
                "invoice/index" => array(
                    "client" => $client
                )
            ),
            "client" => $client,
            "scripts" => array('index', 'invoice', 'mask')
        );

        return view("index", $variables);
    }

    public function payment($invoice){
        $variables = array(
            "components" => array(
                "invoice/payment" => array(
                    "invoice" => $invoice
                )
            ),
            "scripts" => array('index', 'client', 'payment', 'qrcode.min')
        );

        return view("index", $variables);
    }
}

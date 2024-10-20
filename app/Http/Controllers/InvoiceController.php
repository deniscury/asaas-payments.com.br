<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index($client = null){
        $variables = array(
            "title" => "Manutenção de Cobranças",
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
}

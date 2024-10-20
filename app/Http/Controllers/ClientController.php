<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index(){

        $variables = array(
            "title" => "Manutenção de Clientes",
            "components" => array(
                "client/index" => array()
            ),
            "scripts" => array('index', 'client', 'mask')
        );

        return view("index", $variables);
    }
}

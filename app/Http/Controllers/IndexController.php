<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){

        $variables = array(
            "title" => "Dashboard",
            "components" => array(
                "home/welcome" => array()
            ),
            "scripts" => array('index')
        );

        return view("index", $variables);
    }
}

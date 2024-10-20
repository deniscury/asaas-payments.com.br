<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', 
    array(
        IndexController::class, 'index'
    )
)->name('asaas.index');
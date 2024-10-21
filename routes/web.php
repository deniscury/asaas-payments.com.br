<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\InvoiceController;
use Illuminate\Support\Facades\Route;

Route::get('/', 
    array(
        IndexController::class, 'index'
    )
)->name('home.index');

Route::get('/client', 
    array(
        ClientController::class, 'index'
    )
)->name('client.index');

Route::prefix('invoice')->group(function(){
    Route::get('/', 
        array(
            InvoiceController::class, 'index'
        )
    )->name('invoice.index');

    Route::get('/client/{client}', 
        array(
            InvoiceController::class, 'index'
        )
    )->name('invoice.indexByClient');

    Route::get('/payment/{invoice}', 
        array(
            InvoiceController::class, 'payment'
        )
    )->name('invoice.payment');
});
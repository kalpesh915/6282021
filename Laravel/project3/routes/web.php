<?php

use App\Http\Controllers\dataaccess;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/about/{city}", function($city){
    return view("about", ["city" => $city]);
}); 

Route::get("/contact/{state}", [dataaccess::class, 'getContact']);

Route::get("/blade1", [dataaccess::class, 'getBlade']);
// Route::view("/about", "about");
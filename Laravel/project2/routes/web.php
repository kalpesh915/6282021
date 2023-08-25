<?php

use App\Http\Controllers\democontroller;
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

Route::get("/getdata/{user}", [democontroller::class, 'index']);
Route::get("/getdata1/{user}", [democontroller::class, 'getData']);

/*
Route::get("/about", function(){
    return view("about");
});

*/

Route::get("/about", [democontroller::class, 'getAbout']);


Route::get("/contact", function(){
    return view("contact");
});
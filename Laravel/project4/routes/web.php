<?php

use App\Http\Controllers\databaseController;
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


Route::get("/getdemo", function(){
    return view("getdemo");
});

Route::get("/postdemo", function(){
    return view("postdemo");
});

Route::get("/getprocess", [databaseController::class, 'getProcess']);
Route::post("/postprocess", [databaseController::class, 'postProcess']);
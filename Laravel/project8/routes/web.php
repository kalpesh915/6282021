<?php

use App\Http\Controllers\formController;
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
Route::get("/httprequest", function(){
    return view("/httprequest");
});
Route::get("/flashsession", function(){
    return view("/flashsession");
});
Route::get("/greetings", function(){
    return view("/greetings");
});
Route::get("/fileupload", function(){
    return view("/fileupload");
});

Route::get("/getprocess", [formController::class, 'getProcess']);
Route::post("/postprocess", [formController::class, 'postProcess']);
Route::put("/putprocess", [formController::class, 'putProcess']);
Route::delete("/deleteprocess", [formController::class, 'deleteProcess']);
Route::post("/flashprocess", [formController::class, 'flashProcess']);
Route::post("/uploadprocess",[formController::class, 'uploadProcess']);
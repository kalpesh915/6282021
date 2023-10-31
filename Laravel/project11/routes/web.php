<?php

use App\Http\Controllers\studentController;
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
Route::post("/addprocess", [studentController::class, 'addProcess']);
Route::get("/viewdata", [studentController::class, 'viewData']);
Route::get("/deletedata/{id?}", [studentController::class, 'deleteData']);
Route::get("/getdataforedit/{id?}", [studentController::class, 'getDataforEdit']);
Route::post("/updateprocess",[studentController::class, 'updateProcess']);
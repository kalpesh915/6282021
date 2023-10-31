<?php

use App\Http\Controllers\loginController;
use Illuminate\Support\Facades\App;
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
Route::post("/loginprocess", [loginController::class, "loginProcess"]);

Route::group(["middleware"=>["securesession"]], function(){
    Route::view("/about", "about");
    Route::view("/contact", "contact");
    Route::view("/feedback", "feedback");    
});

Route::get("/logout", function(){
    if(session()->has("validuser")){
        session()->pull("validuser");
        session()->flash("success", "Logout Successfully");
    }else{
        session()->flash("error", "not a valid login");
    }

    return redirect("/");
});

Route::get("/story/{ln}",function($lang){
    App::setlocale($lang);
    return view("story");
});

Route::get("/getdata", [loginController::class, 'getData']);
Route::get("/pagination", [loginController::class, 'getPagination']);
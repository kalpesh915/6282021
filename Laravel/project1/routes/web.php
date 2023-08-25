<?php

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
    //return view('welcome');
    return redirect("/about/pranjal/chandravadiya/rajkot");
});

Route::get("/about/{user?}", function($user = "Pranjal"){
    return view("about", ["user"=>$user]);
});

Route::get("/about/{fname?}/{lname?}/{city?}", function($fname = "", $lname = "", $city = ""){
    return view("about", ["fname"=>$fname, "lname"=>$lname, "city"=>$city]);
});

//Route::view("/feedback/{user}", "feedback", ["user"=>$user]);

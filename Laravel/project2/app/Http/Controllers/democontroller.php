<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class democontroller extends Controller
{
    //
    public function getData($user){
        echo "Welcome $user to controllers of Laravel";
    }

    public function index($user){
        echo "Welcome $user to index of controllers in Laravel";
    }

    public function getAbout(){
        
        return view("about", ["user"=>"Pranjal", "city"=>"Rajkot"]);
    }
}

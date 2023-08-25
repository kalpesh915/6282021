<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class dataaccess extends Controller
{
    //
    public function getContact($state){
        return view("contact", ["state" => $state]);
    }

    public function getBlade(){
        $students = ["Amee", "Keshvi", "Vishal", "Bhavik", "Pranjal"];
        return view("blade1", ["data" => $students]);
    }
}

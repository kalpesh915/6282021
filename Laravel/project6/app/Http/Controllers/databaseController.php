<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class databaseController extends Controller
{
    //
    public function getData(){
        //echo "Called";
        return DB::select("select * from students");
    }

    public function getData1(){
        //return student::all();
        return student::all(["id", "fname", "lname"]);
    }
}

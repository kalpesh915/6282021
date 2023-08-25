<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class databaseController extends Controller
{
    //
    public function getProcess(Request $request){
        //echo "Called";
        return $request->input();
    }

    public function postProcess(Request $request){
        //echo "Called";
        return $request->input();
    }
}

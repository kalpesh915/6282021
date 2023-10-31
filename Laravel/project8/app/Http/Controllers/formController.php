<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class formController extends Controller
{
    //
    public function getProcess(Request $request){
        return $request->input();
    }

    public function postProcess(Request $request){
        return $request->input();
    }

    public function putProcess(Request $request){
        return $request->input();
    }

    public function deleteProcess(Request $request){
        return $request->input();
    }

    public function flashProcess(Request $request){
        //return $request->input("uname");
        session()->flash("uname", $request->input("uname"));
        return redirect("/greetings");
    }

    public function uploadProcess(Request $request){
        //return $request->file("file1")->store();
       //return $request->file("file1")->store("docs");
       return $request->file("file1")->storeAs($request->file("file1")->getClientOriginalName());
    }
}

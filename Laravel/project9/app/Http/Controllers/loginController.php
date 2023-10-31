<?php

namespace App\Http\Controllers;

use App\Models\log;
use Illuminate\Http\Request;

class loginController extends Controller
{
    //
    public function loginProcess(Request $request){
        if(($request->input("email") == "admin@gmail.com") && ($request->input("upass") == "admin")){
            session()->put("validuser", $request->input("email"));
            return redirect("/about");
        }else{
            session()->flash("error", "Invalid Username or Password");
            return redirect("/");
        }
    }

    public function getData(){
        $data = log::all();
        return view("showdata", ["data"=>$data]);
    }

    public function getPagination(){
        $data = log::paginate(10);
        return view("showdata1", ["data"=>$data]);
    }
}

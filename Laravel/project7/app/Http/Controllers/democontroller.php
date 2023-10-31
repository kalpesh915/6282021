<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class democontroller extends Controller
{
    //
    public function getProducts(){
        $productsData = Http::get("https://dummyjson.com/products");
        return view("viewdata",["products" => $productsData["products"]]);
    }
}

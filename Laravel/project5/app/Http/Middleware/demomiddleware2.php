<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class demomiddleware2
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if($request->input("age") >= 18){
            echo "<p class='bg-success text-white p-4 text-center'>Valid Age</p>";
        }else{
            echo "<p class='bg-danger text-white p-4 text-center'>Invalid Age</p>";
        }
        return $next($request);
    }
}

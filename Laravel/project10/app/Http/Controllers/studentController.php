<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class studentController extends Controller
{
    //
    public function addProcess(Request $request){
        //return $request->input();
        $student = new student();

        $student->fname = $request->input("fname");
        $student->lname = $request->input("lname");
        $student->phone = $request->input("phone");
        $student->email = $request->input("email");
        $student->save();

        session()->flash("success", "New Student Added");
        return redirect("/");
    }

    public function viewData(){
        $studentData = student::all();
        return view("viewdata", ["studentdata"=>$studentData]);
    }

    public function deleteData($id=0){
        if($id == 0){
            session()->flash("error", "ID is Required to Delete Data");
            return redirect("/");
        }

        $studentData = student::find($id);

        if($studentData == null){
            session()->flash("error", "ID is invalid to Delete Data");
            return redirect("/");
        }else{
            $studentData->delete();
            session()->flash("success", "Data is Deleted with id {$id}");
            return redirect("/");
        }
    }

    public function updateData($id=0){
        if($id == 0){
            session()->flash("error", "ID is Required to Update Data");
            return redirect("/");
        }

        $studentData = student::find($id);

        if($studentData == null){
            session()->flash("error", "ID is invalid to Update Data");
            return redirect("/");
        }else{
            return view("editdata", ["studentdata" => $studentData]);
        }
    }

    public function editProcess(Request $request){
        //return $request->input();
        $student = new student();
        $studentData = $student::find($request->input("id"));
        //return $studentData;
        $studentData->fname = $request->input("fname");
        $studentData->lname = $request->input("lname");
        $studentData->phone = $request->input("phone");
        $studentData->email = $request->input("email");
        $studentData->save();

        session()->flash("success", "Student Data Updated");
        return redirect("/viewdata");
    }
}

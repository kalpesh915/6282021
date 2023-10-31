<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class studentController extends Controller
{
    //
    public function addProcess(Request $request){
        $student = new student();

        $student->fname = $request->input("fname");
        $student->lname = $request->input("lname");
        $student->email = $request->input("email");
        $student->phone = $request->input("phone");
        $student->save();

        session()->flash("success", "New Student Inserted in Table");
        return redirect("/");
    }

    public function viewData(){
        $studentData = student::all();
        return view("viewdata", ["studentdata" => $studentData]);
    }

    public function deleteData($id = 0){
        if($id == 0){
            session()->flash("error", "ID is Must Required to Delete Data");
            return redirect("/viewdata");
        }

        $studentData = student::find($id);

        if($studentData === null){
            session()->flash("error", "$id is not a valid id to delete data");
        }else{
            $studentData->delete();
            session()->flash("success", "Data Deleted with ID $id");
        }

        return redirect("/viewdata");
    }

    public function getDataforEdit($id = 0){
        if($id == 0){
            session()->flash("error", "ID is Must Required to Update Data");
            return redirect("/viewdata");
        }

        $studentData = student::find($id);

        if($studentData === null){
            session()->flash("error", "$id is not a valid id to update data");
            return redirect("/viewdata");
        }else{
           //return $studentData;
           return view("editdata", ["studentdata" => $studentData]);
        }
    }

    public function updateProcess(Request $request){
        $student = new student();
        $studentData = $student::find($request->input("id"));

        $studentData->fname = $request->input("fname");
        $studentData->lname = $request->input("lname");
        $studentData->email = $request->input("email");
        $studentData->phone = $request->input("phone");
        $studentData->save();

        session()->flash("success", "Data Updated");
        return redirect("/viewdata");
    }
}

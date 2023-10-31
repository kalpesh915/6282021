<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Data</title>
    @include("cdn")
</head>
<body>
    <div class="container-fluid">
        <h1 class="bg-primary text-center text-white p-5">Add New Data</h1>
        @include("menu")

        @if(session()->has("error"))
            <div class="alert alert-danger alert-dismissible">
                <button class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Error : </strong> {{session("error")}}
            </div>
        @endif

        @if(session()->has("success"))
            <div class="alert alert-success alert-dismissible">
                <button class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Success : </strong> {{session("success")}}
            </div>
        @endif
        <div class="table-responsive">
            <table class="table table-hover table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($studentdata as $student)
                        <tr>
                            <td>{{$student["id"]}}</td>
                            <td>{{$student["fname"]}}</td>
                            <td>{{$student["lname"]}}</td>
                            <td>{{$student["email"]}}</td>
                            <td>{{$student["phone"]}}</td>
                            <td>
                                <button class="btn btn-danger"><a href="/deletedata/{{$student['id']}}">
                                    <i class="fa fa-trash text-white"></i>
                                </a></button>
                                <button class="btn btn-primary"><a href="/updatedata/{{$student['id']}}">
                                    <i class="fa fa-pen text-white"></i>
                                </a></button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
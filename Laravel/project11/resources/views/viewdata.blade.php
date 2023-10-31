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
        <h1 class="bg-primary text-center p-4 text-white">View Data</h1>
        @if(session("error"))
            <div class="alert alert-danger alert-dismissible">
                <button class="btn-close" data-bs-dismiss="alert"></button>
                <b>Error : </b> {{session("error")}}
            </div>
        @endif

        @if(session("success"))
            <div class="alert alert-success alert-dismissible">
                <button class="btn-close" data-bs-dismiss="alert"></button>
                <b>Success : </b> {{session("success")}}
            </div>
        @endif
        @include("menu")
        
        <div class="table-responsive mt-3">
            <table class="table table-hover table-striped">
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
                                <a href="/deletedata/{{$student['id']}}">
                                    <button class="btn btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </a>
                                <a href="/getdataforedit/{{$student['id']}}">
                                    <button class="btn btn-primary">
                                        <i class="fa fa-pen"></i>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Data</title>
    @include("cdn")
</head>
<body>
    <div class="container-fluid">
        <h1 class="bg-primary text-center text-white p-5">Edit Data</h1>
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
        <div>
            <form action="/editprocess" method="post">
                @csrf
                <div class="my-2 form-floating">
                    <input type="text" name="id" id="id" placeholder="Enter id" class="form-control" required readonly value="{{$studentdata['id']}}">
                    <label class="form-lable" for="id">Enter ID</label>
                </div>

                <div class="my-2 form-floating">
                    <input type="text" name="fname" id="fname" placeholder="Enter First Name" class="form-control" required value="{{$studentdata['fname']}}">
                    <label class="form-lable" for="fname">Enter First Name</label>
                </div>

                <div class="my-2 form-floating">
                    <input type="text" name="lname" id="lname" placeholder="Enter Last Name" class="form-control" required value="{{$studentdata['lname']}}">
                    <label class="form-lable" for="lname">Enter Last Name</label>
                </div>

                <div class="my-2 form-floating">
                    <input type="text" name="phone" id="phone" placeholder="Enter Phone Number" class="form-control" pattern="\d{10,15}" required value="{{$studentdata['phone']}}">
                    <label class="form-lable" for="phone">Enter Phone Number</label>
                </div>

                <div class="my-2 form-floating">
                    <input type="email" name="email" id="email" placeholder="Enter EMail Address" class="form-control" required value="{{$studentdata['email']}}">
                    <label class="form-lable" for="email">Enter Email Address</label>
                </div>

                <div class="my-2 form-floating">
                    <input type="submit" value="Update Student" class="btn btn-primary">
                    <input type="reset" value="Reset" class="btn btn-danger">
                </div>
            </form>
        </div>
    </div>
</body>
</html>
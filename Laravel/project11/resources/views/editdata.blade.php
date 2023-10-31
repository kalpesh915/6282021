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
        <h1 class="bg-primary text-center p-4 text-white">Edit Data</h1>
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
        <form action="/updateprocess" method="post">
            @csrf
            <div class="my-2 form-floating">
                <input type="text" name="id" id="id" required placeholder="Enter ID " class="form-control" readonly value="{{$studentdata['id']}}">
                <label for="id" class="form-label">Enter ID</label>
            </div>

            <div class="my-2 form-floating">
                <input type="text" name="fname" id="fname" required placeholder="Enter First Name" class="form-control" autofocus value="{{$studentdata['fname']}}">
                <label for="fname" class="form-label">Enter First Name</label>
            </div>

            <div class="my-2 form-floating">
                <input type="text" name="lname" id="lname" required placeholder="Enter Last Name" class="form-control" value="{{$studentdata['lname']}}">
                <label for="lname" class="form-label">Enter Last Name</label>
            </div>

            <div class="my-2 form-floating">
                <input type="email" name="email" id="email" required placeholder="Enter Email Address" class="form-control" value="{{$studentdata['email']}}">
                <label for="email" class="form-label">Enter Email Address</label>
            </div>

            <div class="my-2 form-floating">
                <input type="text" name="phone" id="phone" required placeholder="Enter Phone Number" class="form-control" pattern="\d{10,15}" value="{{$studentdata['phone']}}">
                <label for="phone" class="form-label">Enter Phone Number</label>
            </div>

            <div class="my-2 form-floating">
                <input type="submit" value="Update Student" class="btn btn-primary">
                <input type="reset" value="Reset" class="btn btn-danger">
            </div>
        </form>
    </div>
</body>
</html>
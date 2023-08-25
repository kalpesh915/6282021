<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Demo</title>
    @include("cdn")
</head>
<body>
    <h1 class="bg-primary text-white p-4 text-center">Example of Form with Post Method</h1>
    @include("menu")

    <div class="container-fluid">
        <form action="/postprocess" method="post">
            @csrf
            <div class="my-2 form-floating">
                <input type="text" name="uname" id="uname" class="form-control" placeholder="Enter Username">
                <label for="uname">Enter Username</label>
            </div>
            <div class="my-2 form-floating">
                <input type="password" name="upass" id="upass" class="form-control" placeholder="Enter Password">
                <label for="upass">Enter Password</label>
            </div>
            <div class="my-2 form-floating">
                <input type="submit" value="Login Now" class="btn btn-primary">
                <input type="reset" value="Reset" class="btn btn-danger">
            </div>
        </form>
    </div>
</body>
</html>
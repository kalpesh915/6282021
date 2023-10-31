<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @include("cdn")
</head>
<body>
    <div class="container-fluid">
        <h1 class="bg-primary text-center text-white p-4">Login Form</h1>
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
        <form action="/loginprocess" method="post">
            @csrf
            <div class="my-2 form-floating">
                <input type="email" name="email" id="email" placeholder="Enter Email Address" class="form-control">
                <label class="form-label" for="email">Enter Email Address</label>
            </div>
            <div class="my-2 form-floating">
                <input type="password" name="upass" id="upass" placeholder="Enter Password" class="form-control">
                <label class="form-label" for="upass">Enter Password</label>
            </div>
            <div class="my-2 form-floating">
                <input type="submit" value="Login" class="btn btn-primary">
                <input type="reset" value="Reset" class="btn btn-danger">
            </div>
        </form>
    </div>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/story/en">English</a></li>
        <li class="nav-item"><a class="nav-link" href="/story/hi">Hindi</a></li>
        <li class="nav-item"><a class="nav-link" href="/story/gu">Gujarati</a></li>
        <li class="nav-item"><a class="nav-link" href="/getdata">Get Data</a></li>
        <li class="nav-item"><a class="nav-link" href="/pagination">Pagination</a></li>
    </ul>
</nav>
</body>
</html>
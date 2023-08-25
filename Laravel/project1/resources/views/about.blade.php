<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @include("cdn")
</head>
<body>
    @include("navbar")
    {{-- <h1>Welcome {{$user}} to About Page</h1> --}}

    <h1>Welcome {{$fname}} {{$lname}} to {{$city}}</h1>
</body>
</html>
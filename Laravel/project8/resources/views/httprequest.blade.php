<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Request</title>
</head>
<body>
    <h1>Get Method</h1>
    <form action="/getprocess" method="GET">
        <input type="text" name="fname" placeholder="Enter First Name">
        <input type="submit" value="Send Data">
    </form>
    <hr>
    <h1>Post Method</h1>
    <form action="/postprocess" method="POST">
        @csrf
        <input type="text" name="fname" placeholder="Enter First Name">
        <input type="submit" value="Send Data">
    </form>
    <hr>
    <h1>Put Method</h1>
    <form action="/putprocess" method="POST">
        @csrf
        {{method_field("PUT")}}
        <input type="text" name="fname" placeholder="Enter First Name">
        <input type="submit" value="Send Data">
    </form>
    <hr>
    <h1>DELETE Method</h1>
    <form action="/deleteprocess" method="POST">
        @csrf
        {{method_field("DELETE")}}
        <input type="text" name="fname" placeholder="Enter First Name">
        <input type="submit" value="Send Data">
    </form>
    <hr>

</body>
</html>
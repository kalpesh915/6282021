<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flash Session</title>
</head>
<body>
    <form action="/flashprocess" method="post">
        @csrf
        <input type="text" name="uname" placeholder="Enter your name" required>
        <input type="submit" value="Send Data">
    </form>
</body>
</html>
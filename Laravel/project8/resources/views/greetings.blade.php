<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greetings</title>
</head>
<body>
    @if(session("uname"))
        <h1>Welcome {{session("uname")}}</h1>
    @else
        <h1>Welcome Guest</h1>
    @endif
</body>
</html>
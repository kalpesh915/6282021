<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    {{ 11 + 5}}

    @if(11 > 18)
        <h1>True</h1>
    @else
        <h1>False</h1>
    @endif


    @for($i=0; $i<=10; $i++)
        <p>Value is {{$i}}</p>
    @endfor

    <button onclick="msg()">Click Me</button>

   {{-- @foreach($data as $tmp)
        <p>Welcome {{$tmp}}</p>
    @endforeach --}}
</body>
</html>

<script>
    function msg(){
        alert("Welcome");
        let myData = @json($data);
        alert(JSON.stringify(myData));
    }

    
</script>
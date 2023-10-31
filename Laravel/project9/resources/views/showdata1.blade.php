<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @include("cdn")
    <style>
        .w-5{
            width: 20px;
        }
    </style>
</head>
<body>
    <div class="conatiner-fluid">
        <div class="table-responsive">
            <table class="table table-hover table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Log id</th>
                        <th>Time Stamp</th>
                        <th>email</th>
                        <th>Event</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($data as $row)
                        <tr>
                            <td>{{$row["logid"]}}</td>
                            <td>{{$row["timestamp"]}}</td>
                            <td>{{$row["email"]}}</td>
                            <td>{{$row["event"]}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{$data->links()}}
        </div>
    </div>
</body>
</html>
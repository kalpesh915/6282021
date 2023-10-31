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
        <h1 class="bg-primary text-white p-4 text-center">
            {{ __('story.title') }}
        </h1>

        <p class="bg-success p-4">
            {{ __('story.text') }}
        </p>

        <h1 class="bg-info text-white p-4 text-center">
            {{ __('story.moral') }}
        </h1>
    </div>
</body>
</html>
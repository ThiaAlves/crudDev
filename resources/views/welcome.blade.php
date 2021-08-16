<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Developers</title>
        <link rel="icon" href="{{asset('images/favicon.ico')}}"/>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" />
	    <link href="https://fonts.googleapis.com/css?family=Montserrat|Tangerine|Lato:wght@900&display=swap" rel="stylesheet" />
  </head>
    <body>
        <div id="example"></div>

        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>

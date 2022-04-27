<!DOCTYPE html>
<html lang="es">
<!-- https://iescelia.org/yincana22 -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
    <title>Game Map</title>
</head>

<body>
    <!-- Navbar -->
    <header class="fixed-top">
        <div class="nav-flexbox">
            <nav>
                <a href="https://iescelia.org/web/">Home</a>
                <div id="indicator"></div>
            </nav>
            
            <div class="button r" id="button-1">
                <input type="checkbox" class="checkbox" id="toggle-mode">
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
        </div>    
    </header>

    <!-- Map -->
    <main>
        <div class="map-box">
            <div id="map"></div>
        </div>
    </main>

    <!-- Scripts -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0AUVJat2__UhZ8msExOQa5xYZpigP8Ew&libraries=places">
    </script>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>


</html>

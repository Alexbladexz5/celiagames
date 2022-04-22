<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
    <title>Game Map</title>
</head>

<body>
    <!-- Navbar -->
    <header class="fixed-top">
        <nav>
            <a href="#">HOME</a>
            <div id="indicator"></div>
            <div>
                <input type="checkbox" class="checkbox" id="checkbox">
                <label for="checkbox" class="label">
                    <i class="fas fa-moon"></i>
                    <i class='fas fa-sun'></i>
                </label>
            </div>
        </nav>


            <div class="button r" id="button-1">
                <input type="checkbox" class="checkbox" id="toggle-mode">
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>

    </header>

    <!-- Map -->
    <main>
        <div class="map-box">
            <div id="map"></div>
        </div>
    </main>

    <!-- Pantalla de carga -->
    <div id="loading"></div>

    <!-- Scripts -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0AUVJat2__UhZ8msExOQa5xYZpigP8Ew&libraries=places">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>

</html>

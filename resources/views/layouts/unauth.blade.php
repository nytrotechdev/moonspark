<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('assets/img/side-logo.png') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('assets/js/jquery-3.3.1.slim.min.js') }}"></script>
    <script src="{{ asset('assets/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>
    <div id="app">
        <header class="header">
            <a href="{{ route('landing') }}" class="logo">
                <span><img src="{{ asset('assets/img/logo.png') }}" alt=""></span>
                <span><img src="{{ asset('assets/img/side-logo.png') }}" alt=""></span>
            </a>

            <nav class="nav">
                <a href="/#">Buy Crypto</a>
                <a href="project/create">submit your project</a>
                <a href="#">wallet guide</a>
                <a href="#">earn</a>
                @guest
                @if (Route::has('login'))
                    <a href="{{ route('login') }}" class="main-btn btn-white">Login</a>
                @endif
                @if (Route::has('register'))
                <a href="{{ route('register') }}" class="main-btn btn-gold">signup</a>
                @endif
                @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }}
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </div>
                </li>
                @endguest

            </nav>

            <div id="menu-btn" class="fas fa-bars"></div>
        </header>



        <main class="">
            @yield('content')
        </main>

    <footer class="footer">
        <div class="container">
            <h2 class="heading">quick links</h2>
            <div class="footer_inner">
                <div class="row align-items-center justify-content-lg-around flex-lg-row flex-sm-column">
                    <a href="#" class="quick_links">about</a>
                    <a href="#" class="quick_links">announcements</a>
                    <a href="#" class="quick_links">risks</a>
                    <a href="#" class="quick_links">Terms & privacy policy</a>
                    <a href="#" class="quick_links">restrictions</a>
                    <a href="#" class="quick_links">contact</a>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="social_icons">
                    <div class="twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="telegram" data-toggle="tooltip" data-placement="top" title="Telegram">
                        <i class="fab fa-telegram"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>

</body>

</html>
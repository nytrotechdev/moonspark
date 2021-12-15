<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css">

    <!-- Styles -->
    <link href="{{ asset('css/client/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/jquery.dataTables.min.css') }}">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <style>
        /* .loading-indicator:before{content:'';background:#000000cc;position:fixed;width:100%;height:100%;top:0;left:0;z-index:10000000000}.loading-indicator:after{content:'Loading ...';position:fixed;width:100%;top:50%;left:0;z-index:10001;color:#fff;text-align:center;font-weight:700;font-size:1.5rem}.approve .dg-content:before{background:url("{{asset('/images/add-cat-popup.png')}}") no-repeat center !important}.reject .dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important}.dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important;} */
        .loading-indicator_v1:before{content:'';background:#000000cc;position:fixed;width:100%;height:100%;top:0;left:0;z-index:10000000000}.loading-indicator_v1:after{content:'Loading ...';position:fixed;width:100%;top:50%;left:0;z-index:10001;color:#fff;text-align:center;font-weight:700;font-size:1.5rem}.approve .dg-content:before{background:url("{{asset('/images/add-cat-popup.png')}}") no-repeat center !important}.reject .dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important}.dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important;}

        .owl-nav{
                display: flex;
                flex-direction: row-reverse;
                justify-content: center;
        }

    </style>

    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
    <!-- Scripts -->
    <script type="text/javascript">
        window.base_url = "{{ url('/') }}";
        window.user = @json(auth()->user());
        window.countries = @json(DB::table('countries')->get());
        window.supported_platform = @json(config('app.supported_platform'));
        window.moralis = @json(config('services.moralis'));
        window.appname = "{{config('app.name')}}";
        const serverUrl = "https://ftjydldokmpn.usemoralis.com:2053/server"; //Server url from moralis.io
        const appId = "72QFiGjbBZClvklxyaSDLXg2UHHODkEgMhQJAJnY"; // Application id from moralis.io
        window.Moralis = Moralis;
        // Moralis.start({ serverUrl, appId });

    </script>
    <script defer="true" src="{{ asset('js/client/app.js') }}"></script>
    <script defer="true" src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>

</head>
<body>
    <div id="app">
        <app/>
    </div>
</body>
</html>

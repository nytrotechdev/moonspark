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
        .owl-nav {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
        }

        body {
            background-color: black;
        }

        /* #app {
            margin: auto;
            width: 50%;
            padding: 10px;            
        } */

        #app img {
            width: 300px;
        }
    </style>
    <style>
        body {
            margin: 0
        }

        main {
            display: block
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            margin-top: 0
        }

        html {
            background-color: #040714
        }

        body {
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: .2px;
            color: silver
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            body {
                font-size: 18px;
                line-height: 28px
            }
        }

        @media only screen and (min-width: 1025px) {
            body {
                font-size: 20px;
                line-height: 30px
            }
        }

        p {
            margin: 0 0 24px
        }

        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #f9f9f9
        }

        .h1,
        .h2,
        h1,
        h2 {
            font-size: 26px;
            line-height: 36px
        }

        .h1,
        .h2,
        .h3,
        h1,
        h2,
        h3 {
            letter-spacing: normal
        }

        .h3,
        h3 {
            font-size: 22px;
            line-height: 32px
        }

        .h4,
        h4 {
            font-size: 16px;
            line-height: 26px
        }

        .h4,
        .h5,
        h4,
        h5 {
            font-weight: 400
        }

        .h5,
        h5 {
            font-size: 15px;
            line-height: 25px
        }

        .h6,
        h6 {
            font-size: 14px;
            line-height: 24px;
            font-weight: 400
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {

            .h1,
            h1 {
                font-size: 32px;
                line-height: 42px
            }

            .h2,
            h2 {
                font-size: 28px;
                line-height: 38px
            }

            .h3,
            h3 {
                font-size: 24px;
                line-height: 34px
            }

            .h4,
            h4 {
                font-size: 22px;
                line-height: 32px
            }

            .h5,
            h5 {
                font-size: 18px;
                line-height: 28px
            }

            .h6,
            h6 {
                font-size: 16px;
                line-height: 26px
            }
        }

        @media only screen and (min-width: 1025px) {

            .h1,
            h1 {
                font-size: 44px;
                line-height: 54px
            }

            .h2,
            h2 {
                font-size: 40px;
                line-height: 50px
            }

            .h3,
            h3 {
                font-size: 28px;
                line-height: 38px
            }

            .h4,
            h4 {
                font-size: 24px;
                line-height: 34px
            }

            .h5,
            h5 {
                font-size: 20px;
                line-height: 30px
            }

            .h6,
            h6 {
                font-size: 16px;
                line-height: 26px
            }
        }

        @media only screen and (max-width: 479px) {

            .h1,
            h1 {
                margin-bottom: 24px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 16px
            }

            p {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 480px) and (max-width:768px) {

            .h1,
            h1 {
                margin-bottom: 24px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 16px
            }

            p {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {

            .h1,
            h1 {
                margin-bottom: 24px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 16px
            }

            p {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 1025px) and (max-width:1440px) {

            .h1,
            h1 {
                margin-bottom: 30px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 24px
            }

            p {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 1441px) and (max-width:1920px) {

            .h1,
            h1 {
                margin-bottom: 30px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 24px
            }

            p {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 1921px) {

            .h1,
            h1 {
                margin-bottom: 34px
            }

            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-bottom: 28px
            }

            p {
                margin-bottom: 24px
            }
        }

        .medium,
        .text-md {
            font-size: 15px;
            line-height: 25px
        }

        .small,
        .text-sm {
            font-size: 14px;
            line-height: 24px
        }

        .fine,
        .footnote {
            font-size: 11px;
            line-height: 21px
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {

            .medium,
            .text-md {
                font-size: 16px;
                line-height: 26px
            }

            .small,
            .text-sm {
                font-size: 15px;
                line-height: 25px
            }

            .fine,
            .footnote {
                font-size: 12px;
                line-height: 22px
            }
        }

        @media only screen and (min-width: 1025px) {

            .medium,
            .text-md {
                font-size: 18px;
                line-height: 28px
            }

            .small,
            .text-sm {
                font-size: 16px;
                line-height: 26px
            }

            .fine,
            .footnote {
                font-size: 12px;
                line-height: 22px
            }
        }

        a,
        a:focus,
        a:hover {
            color: #f9f9f9
        }

        a:active {
            opacity: .8
        }

        .text-uppercase {
            text-transform: uppercase
        }

        .text-lowercase {
            text-transform: lowercase
        }

        .text-capitalize {
            text-transform: capitalize
        }

        a.primary,
        a.secondary,
        button.primary,
        button.secondary {
            text-decoration: none;
            font-weight: 400;
            letter-spacing: 1px;
            text-transform: uppercase
        }

        a.link,
        button.link {
            text-decoration: underline
        }

        .hero.hero-multiplan .grid-list .grid-item h3 i,
        .hero.hero-multiplan .grid-list .grid-item h4 i {
            font-size: .6em;
            font-style: normal;
            font-weight: 400;
            color: silver
        }

        .compact h1,
        .compact h2,
        .compact h3,
        .compact h4,
        .compact h5,
        .compact h6 {
            line-height: 1.2
        }

        .compact .grid-item h3,
        .compact .grid-item h4,
        .compact .grid-item h5 {
            margin-bottom: 8px
        }

        @media only screen and (max-width: 768px) {
            .compact h1 {
                font-size: 20px
            }

            .compact h2 {
                font-size: 16px
            }

            .compact h1,
            .compact h2,
            .compact h3 {
                margin-bottom: 16px
            }

            .compact .grid-item h3,
            .compact .grid-item h4,
            .compact .grid-item h5 {
                margin-bottom: 4px
            }

            .compact .grid-item p,
            .compact .grid-item picture {
                margin-bottom: 8px
            }
        }

        a.primary,
        a.secondary,
        button.primary,
        button.secondary {
            font-size: 15px;
            line-height: 15px
        }

        button.link {
            font-size: inherit;
            line-height: inherit
        }

        @media only screen and (min-width: 769px) {

            a.primary,
            a.secondary,
            button.primary,
            button.secondary {
                font-size: 18px;
                line-height: 18px
            }
        }

        .typeramp-avenir {
            font-family: Avenir, sans-serif
        }

        .typeramp-seol-sans {
            font-family: Seol-Sans, sans-serif;
            line-break: normal;
            word-break: break-word
        }

        .typeramp-seol-sans a.link,
        .typeramp-seol-sans button.link {
            text-underline-position: under
        }

        .typeramp-tazugane {
            font-family: Tazugane, sans-serif;
            line-break: normal;
            word-break: break-word
        }

        .typeramp-tazugane a.link,
        .typeramp-tazugane button.link {
            text-underline-position: under
        }

        .typeramp-xianghehei-sc {
            font-family: xiangHeHei-SC, sans-serif;
            line-break: normal;
            word-break: break-word
        }

        .typeramp-xianghehei-sc a.link,
        .typeramp-xianghehei-sc button.link {
            text-underline-position: under
        }

        .typeramp-xianghehei-tc {
            font-family: xiangHeHei-TC, sans-serif;
            line-break: normal;
            word-break: break-word
        }

        .typeramp-xianghehei-tc a.link,
        .typeramp-xianghehei-tc button.link {
            text-underline-position: under
        }

        @media only screen and (max-width: 768px) {

            .typeramp-seol-sans .hero h1 br,
            .typeramp-seol-sans .hero h1 br:after,
            .typeramp-seol-sans .hero h2 br,
            .typeramp-seol-sans .hero h2 br:after,
            .typeramp-tazugane .hero h1 br,
            .typeramp-tazugane .hero h1 br:after,
            .typeramp-tazugane .hero h2 br,
            .typeramp-tazugane .hero h2 br:after,
            .typeramp-xianghehei-sc .hero h1 br,
            .typeramp-xianghehei-sc .hero h1 br:after,
            .typeramp-xianghehei-sc .hero h2 br,
            .typeramp-xianghehei-sc .hero h2 br:after,
            .typeramp-xianghehei-tc .hero h1 br,
            .typeramp-xianghehei-tc .hero h1 br:after,
            .typeramp-xianghehei-tc .hero h2 br,
            .typeramp-xianghehei-tc .hero h2 br:after {
                content: normal
            }
        }

        .top {
            justify-content: flex-start
        }

        .middle {
            justify-content: center
        }

        .bottom {
            justify-content: flex-end
        }

        .both-ends {
            justify-content: space-between
        }

        .left {
            text-align: left
        }

        .center {
            text-align: center
        }

        .right {
            text-align: right
        }

        @media only screen and (min-width: 1025px) {
            .lg-text-center {
                align-items: center;
                text-align: center
            }

            .lg-text-center picture {
                margin-left: auto;
                margin-right: auto
            }

            .lg-text-left {
                align-items: flex-start;
                text-align: left
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .md-text-center {
                align-items: center;
                text-align: center
            }

            .md-text-center picture {
                margin-left: auto;
                margin-right: auto
            }

            .md-text-left {
                align-items: flex-start;
                text-align: left
            }
        }

        @media only screen and (max-width: 768px) {
            .sm-text-center {
                align-items: center;
                text-align: center
            }

            .sm-text-center picture {
                margin-left: auto;
                margin-right: auto
            }

            .sm-text-left {
                align-items: flex-start;
                text-align: left
            }
        }

        ul:not(.grid-list) {
            text-align: left
        }

        footer picture,
        header picture,
        main picture {
            min-height: 1px
        }

        .language-selector {
            position: relative;
            display: inline-block;
            opacity: .6;
            margin: 0 8px
        }

        .language-selector:hover {
            opacity: 1
        }

        .language-selector:hover select {
            text-decoration: underline
        }

        .language-selector .globe {
            left: 2px;
            top: 49%;
            width: 18px
        }

        .language-selector .down,
        .language-selector .globe {
            pointer-events: none;
            position: absolute;
            z-index: 0;
            transform: translateY(-50%)
        }

        .language-selector .down {
            right: 2px;
            top: 47%;
            width: 22px
        }

        .language-selector label {
            position: relative;
            display: block;
            pointer-events: none;
            height: 0;
            overflow: hidden;
            opacity: 0;
            z-index: -1
        }

        .language-selector .down,
        .language-selector .globe .cls-1 {
            fill: #f9f9f9
        }

        .language-selector .globe .cls-2 {
            fill: none;
            stroke: #f9f9f9;
            stroke-miterlimit: 10;
            stroke-width: 33px
        }

        #language-selector {
            padding: 0 26px;
            margin: 8px auto;
            z-index: 1;
            border: none;
            display: inline-block;
            background-color: transparent;
            cursor: pointer;
            -webkit-appearance: none;
            -moz-appearance: none;
            color: #f9f9f9;
            text-align: center;
            -moz-text-align-last: center;
            text-align-last: center
        }

        #language-selector::-ms-expand {
            display: none
        }

        #language-selector option {
            color: #040714
        }

        @media only screen and (max-width: 768px) {
            .language-selector .globe {
                top: 46%;
                width: 16px
            }

            .language-selector .down {
                width: 20px
            }

            #language-selector {
                padding: 0 22px
            }
        }

        body div#oneid-wrapper {
            position: fixed
        }

        section {
            position: relative;
            box-sizing: border-box;
            padding: 5.6vw;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat
        }

        section.center>picture {
            display: inline-block
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            section {
                padding: 10vw 5vw
            }
        }

        @media only screen and (max-width: 768px) {
            section {
                padding: 10vw 5vw
            }
        }

        .modal {
            display: none;
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 100%;
            z-index: 50;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .8)
        }

        .modal p {
            color: #f9f9f9
        }

        .modal.open {
            display: flex
        }

        .modal .modal-content {
            background-color: #40424a;
            position: relative;
            width: 100%;
            max-width: 700px
        }

        .modal .modal-scroller {
            padding: 50px;
            height: 100%;
            max-height: 50vh;
            overflow: auto
        }

        .modal .close-button {
            background-color: #40424a;
            color: #f9f9f9;
            opacity: .85;
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            z-index: 1;
            border: none;
            padding: 4px 12px;
            font-size: 32px;
            font-family: sans-serif;
            font-weight: 400;
            cursor: pointer
        }

        .modal .close-button:active,
        .modal .close-button:focus,
        .modal .close-button:hover {
            opacity: 1;
            text-decoration: none
        }

        .modal-open {
            -webkit-overflow-scrolling: touch;
            overflow: hidden
        }

        footer {
            position: relative;
            box-sizing: border-box;
            padding: 26px 8px;
            text-align: center;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat
        }

        footer .logo {
            width: 80px;
            margin-bottom: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto
        }

        footer a.link,
        footer button.link {
            color: silver;
            padding: 8px 12px;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 0;
            white-space: nowrap
        }

        footer button.link {
            background: 0 0;
            border: none;
            cursor: pointer
        }

        footer a.link:hover,
        footer button.link:hover {
            color: #f9f9f9
        }

        footer .fine {
            max-width: 1024px;
            margin: 4px auto 15px
        }

        @media only screen and (max-width: 768px),
        only screen and (min-width:769px) and (max-width:1024px) {
            footer {
                padding: 5vw
            }
        }

        .hero {
            position: relative;
            min-height: 100vh;
            padding: 5.6vw;
            display: flex;
            align-items: center
        }

        .hero,
        .hero .content {
            box-sizing: border-box
        }

        .hero .content {
            width: 50%;
            z-index: 1
        }

        .hero .content>:last-child {
            margin-bottom: 0
        }

        .hero.hero-banner-padding {
            padding-bottom: 10vw
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero {
                min-height: 70vh;
                padding: 40vw 5vw 10vw
            }

            .hero.hero-banner-padding {
                padding-bottom: 14vw
            }
        }

        @media only screen and (max-width: 768px) {
            .hero {
                min-height: 70vh;
                padding: 40vw 5vw 20vw
            }

            .hero.hero-banner-padding {
                padding-bottom: 22vw
            }
        }

        @media only screen and (min-width: 1025px) {
            .hero.lg-align-center {
                justify-content: center
            }

            .hero.lg-align-left {
                justify-content: flex-start
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero.md-align-center {
                justify-content: center
            }

            .hero.md-align-left {
                justify-content: flex-start
            }
        }

        @media only screen and (max-width: 768px) {
            .hero.sm-align-center {
                justify-content: center
            }

            .hero.sm-align-left {
                justify-content: flex-start
            }
        }

        .hero .background {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-repeat: no-repeat;
            z-index: 0;
            pointer-events: none
        }

        @media only screen and (min-width: 1025px) {
            .hero .background.lg {
                display: block;
                background-position: 50%;
                background-size: cover
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero .background.md {
                display: block;
                background-position: top;
                background-size: 100%
            }
        }

        @media only screen and (max-width: 768px) {
            .hero .background.sm {
                display: block;
                background-position: top;
                background-size: 100%
            }
        }

        .hero.bg-100 .background.lg {
            background-position: top;
            background-size: 100%
        }

        .hero .hint {
            position: absolute;
            bottom: 2vw;
            margin: 0 auto;
            cursor: pointer;
            padding: 6px;
            width: 48px;
            height: 48px;
            background-color: transparent;
            border: none;
            opacity: .65;
            -webkit-animation: bounce 1.75s infinite;
            animation: bounce 1.75s infinite;
            font-size: 0
        }

        .hero .hint:hover {
            opacity: 1
        }

        .hero .hint .down {
            fill: #f9f9f9;
            pointer-events: none
        }

        .hero.lg-align-center .hint {
            margin: 0 auto;
            left: auto
        }

        .hero.lg-align-left .hint {
            left: 5.6vw;
            margin-left: -14px
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero.md-align-center .hint {
                margin: 0 auto;
                left: auto
            }

            .hero.md-align-left .hint {
                left: 5vw;
                margin-left: -14px
            }
        }

        @media only screen and (max-width: 768px) {

            .hero.sm-align-center .hint,
            .hero.sm-align-left .hint {
                margin: 0 auto;
                left: auto
            }
        }

        @-webkit-keyframes bounce {

            0%,
            20%,
            50%,
            80%,
            to {
                transform: translateY(0)
            }

            40% {
                transform: translateY(-7px)
            }

            60% {
                transform: translateY(-3.5px)
            }
        }

        @keyframes bounce {

            0%,
            20%,
            50%,
            80%,
            to {
                transform: translateY(0)
            }

            40% {
                transform: translateY(-7px)
            }

            60% {
                transform: translateY(-3.5px)
            }
        }

        @supports (-webkit-touch-callout:none) {
            @media only screen and (min-width: 769px) {
                .hero {
                    min-height: calc(100vh - 60px)
                }
            }
        }

        @media only screen and (min-width: 1025px) {
            .hero picture {
                margin-bottom: 2vw
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero picture {
                margin-bottom: 3vw
            }
        }

        @media only screen and (max-width: 768px) {
            .hero picture {
                margin-bottom: 3vw
            }
        }

        @media only screen and (min-width: 1025px) {
            .hero .content {
                max-width: 640px
            }

            .hero .content.container-full {
                max-width: none
            }

            .hero .content.container-large {
                max-width: 740px
            }

            .hero .content.container-medium {
                max-width: 640px
            }

            .hero .content.container-small {
                max-width: 540px
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero .content {
                width: 100%;
                max-width: 600px
            }

            .hero .content.container-full {
                max-width: none
            }

            .hero .content.container-large {
                max-width: 640px
            }

            .hero .content.container-medium {
                max-width: 600px
            }

            .hero .content.container-small {
                max-width: 500px
            }
        }

        @media only screen and (max-width: 768px) {
            .hero .content {
                width: 100%;
                max-width: 500px
            }

            .hero .content.container-full {
                max-width: none
            }

            .hero .content.container-large {
                max-width: 540px
            }

            .hero .content.container-medium {
                max-width: 500px
            }

            .hero .content.container-small {
                max-width: 440px
            }
        }

        @media only screen and (max-width: 768px) {

            .hero h1 br,
            .hero h2 br {
                content: ""
            }

            .hero h1 br:after,
            .hero h2 br:after {
                content: " "
            }
        }

        .hero.hero-multiplan .grid-list .grid-item h1,
        .hero.hero-multiplan .grid-list .grid-item h2,
        .hero.hero-multiplan .grid-list .grid-item h3,
        .hero.hero-multiplan .grid-list .grid-item h4,
        .hero.hero-multiplan .grid-list .grid-item h5 {
            margin-top: 0
        }

        .hero.hero-multiplan .grid-list .grid-item :last-child {
            margin-bottom: 0
        }

        .hero.hero-multiplan .grid-list picture {
            height: 52px;
            width: auto;
            max-width: none
        }

        .hero.hero-multiplan .grid-list img {
            width: auto;
            height: 52px
        }

        .hero.hero-multiplan .content>picture:last-child {
            position: absolute;
            bottom: 3vw;
            left: 5.6vw;
            right: 5.6vw
        }

        @media only screen and (min-width: 1025px) {
            .hero.hero-multiplan .hint {
                left: auto;
                right: 5.6vw;
                margin-right: -14px
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero.hero-multiplan .hint {
                left: auto;
                right: 5.6vw;
                margin-right: -14px
            }
        }

        @media only screen and (max-width: 768px) {
            .hero.hero-multiplan .grid-list.mobile-one-column {
                max-width: 320px;
                margin: 0 auto
            }

            .hero.hero-multiplan .grid-list.mobile-one-column .grid-item {
                padding-left: 0;
                padding-right: 0;
                border-bottom: 2px solid hsla(0, 0%, 100%, .2)
            }

            .hero.hero-multiplan .grid-list.mobile-one-column .grid-item:first-child {
                padding-top: 0
            }

            .hero.hero-multiplan .grid-list.mobile-one-column .grid-item:first-child picture {
                display: none
            }

            .hero.hero-multiplan .grid-list.mobile-one-column .grid-item:last-child {
                border-bottom: none
            }

            .hero.hero-multiplan .content picture:last-child {
                display: none
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .hero.hero-multiplan {
                min-height: auto;
                padding: 10vw 5vw
            }
        }

        .compact .grid-item p,
        .compact .grid-item picture {
            margin-bottom: 16px
        }

        @media only screen and (max-width: 768px) {

            .compact .grid-item p,
            .compact .grid-item picture {
                margin-bottom: 8px
            }
        }

        .grid-list {
            display: flex;
            flex-wrap: wrap;
            padding-left: 0;
            justify-content: space-around;
            margin: 0 -12px
        }

        .five-column .grid-item {
            flex: 0 0 20%;
            max-width: 20%
        }

        .four-column .grid-item {
            flex: 0 0 25%;
            max-width: 25%
        }

        .three-column .grid-item {
            flex: 0 0 33.3%;
            max-width: 33.3%
        }

        .two-column .grid-item {
            flex: 0 0 50%;
            max-width: 50%
        }

        .one-column .grid-item {
            flex: 0 0 100%;
            max-width: 100%
        }

        .adaptable .grid-item {
            flex: 1 1 0;
            padding: 20px;
            min-width: 300px
        }

        @media only screen and (max-width: 768px) {
            .mobile-five-column .grid-item {
                flex: 0 0 20%;
                max-width: 20%
            }

            .mobile-four-column .grid-item {
                flex: 0 0 25%;
                max-width: 25%
            }

            .mobile-three-column .grid-item {
                flex: 0 0 33.3%;
                max-width: 33.3%
            }

            .mobile-two-column .grid-item {
                flex: 0 0 50%;
                max-width: 50%
            }

            .mobile-one-column .grid-item {
                flex: 0 0 100%;
                max-width: 100%
            }
        }

        .grid-item {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 12px
        }

        .grid-item h1,
        .grid-item h2,
        .grid-item h3,
        .grid-item h4,
        .grid-item h5,
        .grid-item h6 {
            margin-top: 20px
        }

        .grid-item.center {
            align-items: center
        }

        .grid-item.left {
            align-items: flex-start
        }

        .grid-item.right {
            align-items: flex-end
        }

        .grid-item:last-child {
            margin-bottom: 0
        }

        .grid-item.card {
            transition: opacity 1s;
            align-items: center;
            max-width: 380px;
            width: 100%;
            padding: 60px 40px 0;
            height: 100%;
            background-size: 100%;
            background-position: top;
            box-sizing: border-box;
            background-repeat: no-repeat;
            margin-top: 40px
        }

        .grid-item.card>* {
            margin-top: 24px;
            margin-bottom: 0
        }

        .grid-item.card h2+p,
        .grid-item.card h3+p,
        .grid-item.card h4+p,
        .grid-item.card h5+p,
        .grid-item.card h6+p,
        .grid-item.card:first-of-type,
        .grid-item.card>:first-child {
            margin-top: 0
        }

        .grid-item.card a.link:last-of-type,
        .grid-item.card h1,
        .grid-item.card h2,
        .grid-item.card h3,
        .grid-item.card h4,
        .grid-item.card h5,
        .grid-item.card h6,
        .grid-item.card p {
            max-width: 100%
        }

        .grid-item.card picture {
            margin-right: auto;
            margin-left: auto;
            max-width: none
        }

        .grid-item.card picture img {
            width: auto;
            max-height: 60px;
            margin: 0 auto
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            .grid-item.card {
                padding: 60px 36px 0
            }
        }

        @media only screen and (min-width: 1025px) {
            .grid-item.card {
                padding: 60px 44px 0
            }
        }

        @media only screen and (min-width: 769px) {
            .grid-item.card {
                margin-top: 0
            }

            .grid-item.card>* {
                margin-top: 28px;
                margin-bottom: 0
            }
        }

        a.primary,
        a.secondary,
        button.primary,
        button.secondary {
            cursor: pointer;
            border-radius: 4px;
            box-sizing: border-box;
            vertical-align: middle;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            transition: all .2s ease 0s
        }

        a.primary *,
        a.secondary *,
        button.primary *,
        button.secondary * {
            margin-top: 1px
        }

        a.primary,
        button.primary {
            color: #f9f9f9;
            background: #0063e5;
            border: none
        }

        a.secondary,
        button.secondary {
            color: #f9f9f9;
            background-color: #040714;
            border: 1px solid silver
        }

        a.textColorDark,
        button.textColorDark {
            color: #040714
        }

        a.primary:focus,
        a.primary:hover,
        button.primary:focus,
        button.primary:hover {
            color: #f9f9f9;
            background: #016cf9;
            border: none;
            text-decoration: none
        }

        a.secondary:focus,
        a.secondary:hover,
        button.secondary:focus,
        button.secondary:hover {
            color: #040714;
            background-color: #f9f9f9;
            border: 1px solid #f9f9f9;
            text-decoration: none
        }

        a.textColorDark:focus,
        a.textColorDark:hover,
        button.textColorDark:focus,
        button.textColorDark:hover {
            color: #040714
        }

        a.backgroundColorOverride:focus.textColorDark,
        a.backgroundColorOverride:hover.textColorDark,
        button.backgroundColorOverride:focus.textColorDark,
        button.backgroundColorOverride:hover.textColorDark {
            filter: brightness(.8)
        }

        a.backgroundColorOverride:focus:not(.textColorDark),
        a.backgroundColorOverride:hover:not(.textColorDark),
        button.backgroundColorOverride:focus:not(.textColorDark),
        button.backgroundColorOverride:hover:not(.textColorDark) {
            filter: brightness(1.2)
        }

        a.primary:active,
        a.secondary:active,
        button.primary:active,
        button.secondary:active {
            opacity: .7;
            transform: scale(.97);
            transition: 0s
        }

        a.primary,
        a.secondary,
        button.primary,
        button.secondary {
            margin-bottom: 20px;
            height: 50px;
            padding: 11.5px 24px;
            width: 100%;
            max-width: 320px
        }

        a.primary.large,
        a.secondary.large,
        button.primary.large,
        button.secondary.large {
            padding: 11.5px 24px;
            max-width: 540px
        }

        a.primary.small,
        a.secondary.small,
        button.primary.small,
        button.secondary.small {
            padding: 9px 12px;
            max-width: 150px
        }

        @media only screen and (min-width: 769px) {

            a.primary,
            a.secondary,
            button.primary,
            button.secondary {
                margin-bottom: 20px;
                height: 60px;
                padding: 16.5px 24px;
                max-width: 360px
            }

            a.primary.large,
            a.secondary.large,
            button.primary.large,
            button.secondary.large {
                padding: 20.5px 33px;
                max-width: 700px;
                height: 68px
            }

            a.primary.small,
            a.secondary.small,
            button.primary.small,
            button.secondary.small {
                padding: 8px 14px;
                max-width: 260px;
                height: 50px
            }

            a.primary *,
            a.secondary *,
            button.primary *,
            button.secondary * {
                margin-top: 3px
            }
        }

        a.link,
        button.link {
            padding: 0;
            color: #f9f9f9;
            cursor: pointer;
            background: 0 0;
            border: none;
            text-align: inherit
        }

        footer img,
        footer picture,
        header img,
        header picture,
        section img,
        section picture {
            display: block;
            width: 100%;
            height: auto
        }

        .thumbnail {
            aspect-ratio: 1.66666667;
            overflow: hidden;
            border-radius: 4px
        }

        .device {
            aspect-ratio: 2;
            overflow: hidden
        }

        h1 picture,
        h2 picture,
        h3 picture,
        h4 picture,
        h5 picture,
        h6 picture,
        p picture {
            display: inline-block;
            margin-bottom: 0
        }

        @media only screen and (max-width: 768px) {
            picture.sm-60 {
                max-width: 60px
            }

            picture.sm-80 {
                max-width: 80px
            }

            picture.sm-100 {
                max-width: 100px
            }

            picture.sm-130 {
                max-width: 130px
            }

            picture.sm-160 {
                max-width: 160px
            }

            picture.sm-180 {
                max-width: 180px
            }

            picture.sm-200 {
                max-width: 200px
            }

            picture.sm-240 {
                max-width: 240px
            }

            picture.sm-280 {
                max-width: 280px
            }

            picture.sm-320 {
                max-width: 320px
            }

            picture.sm-360 {
                max-width: 360px
            }

            picture.sm-400 {
                max-width: 400px
            }

            picture.sm-440 {
                max-width: 440px
            }

            picture.sm-500 {
                max-width: 500px
            }

            picture.sm-600 {
                max-width: 600px
            }

            picture.sm-700 {
                max-width: 700px
            }

            picture.sm-800 {
                max-width: 800px
            }
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {
            picture.md-60 {
                max-width: 60px
            }

            picture.md-80 {
                max-width: 80px
            }

            picture.md-100 {
                max-width: 100px
            }

            picture.md-130 {
                max-width: 130px
            }

            picture.md-160 {
                max-width: 160px
            }

            picture.md-180 {
                max-width: 180px
            }

            picture.md-200 {
                max-width: 200px
            }

            picture.md-240 {
                max-width: 240px
            }

            picture.md-280 {
                max-width: 280px
            }

            picture.md-320 {
                max-width: 320px
            }

            picture.md-360 {
                max-width: 360px
            }

            picture.md-400 {
                max-width: 400px
            }

            picture.md-440 {
                max-width: 440px
            }

            picture.md-500 {
                max-width: 500px
            }

            picture.md-600 {
                max-width: 600px
            }

            picture.md-700 {
                max-width: 700px
            }

            picture.md-800 {
                max-width: 800px
            }
        }

        @media only screen and (min-width: 1025px) {
            picture.lg-60 {
                max-width: 60px
            }

            picture.lg-80 {
                max-width: 80px
            }

            picture.lg-100 {
                max-width: 100px
            }

            picture.lg-130 {
                max-width: 130px
            }

            picture.lg-160 {
                max-width: 160px
            }

            picture.lg-180 {
                max-width: 180px
            }

            picture.lg-200 {
                max-width: 200px
            }

            picture.lg-240 {
                max-width: 240px
            }

            picture.lg-280 {
                max-width: 280px
            }

            picture.lg-320 {
                max-width: 320px
            }

            picture.lg-360 {
                max-width: 360px
            }

            picture.lg-400 {
                max-width: 400px
            }

            picture.lg-440 {
                max-width: 440px
            }

            picture.lg-500 {
                max-width: 500px
            }

            picture.lg-600 {
                max-width: 600px
            }

            picture.lg-700 {
                max-width: 700px
            }

            picture.lg-800 {
                max-width: 800px
            }
        }

        .sidealign {
            display: flex;
            align-items: center
        }

        .sidealign .text-container {
            box-sizing: border-box;
            padding: 0 2vw
        }

        .sidealign.border {
            margin: 2vw;
            padding: 4vw 2vw;
            border: 1px solid #f9f9f9
        }

        @media only screen and (max-width: 768px) {
            .sidealign {
                flex-direction: column
            }

            .sidealign .sidealign-image img {
                margin-bottom: 20px
            }

            .sidealign .primary,
            .sidealign .secondary,
            .sidealign .sidealign-image {
                margin-left: auto;
                margin-right: auto
            }

            .sidealign .text-container {
                text-align: center
            }

            .sidealign.mobile-container-top {
                flex-direction: column-reverse
            }

            .sidealign.mobile-container-bottom {
                flex-direction: column
            }
        }

        @media only screen and (min-width: 769px) {

            .sidealign.side-by-side.text-container-left,
            .sidealign.side-by-side:nth-child(odd) {
                flex-direction: row-reverse
            }

            .sidealign.side-by-side.text-container-right {
                flex-direction: row
            }

            .sidealign.side-by-side .sidealign-image,
            .sidealign.side-by-side .text-container {
                flex: 0 0 50%;
                max-width: 50%
            }

            .sidealign.full-bleed .sidealign-image,
            .sidealign.overlay .sidealign-image {
                position: relative
            }

            .sidealign.full-bleed .text-container,
            .sidealign.overlay .text-container {
                position: absolute
            }

            .sidealign.overlay .text-container {
                width: calc(50% - 5vw);
                right: 5vw;
                top: 0;
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: center
            }

            .sidealign.overlay.text-container-right .text-container {
                left: 50%
            }

            .sidealign.full-bleed {
                padding: 0
            }

            .sidealign.full-bleed .text-container {
                left: 0;
                top: 0;
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 40%;
                padding-left: 5vw
            }

            .sidealign.full-bleed.text-container-right .text-container {
                left: 60%
            }
        }

        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 70px;
            z-index: 4;
            display: flex;
            align-items: center;
            padding: 0 36px;
            opacity: 1;
            transform: translateZ(0);
            transition: opacity .5s ease-out;
            pointer-events: none
        }

        .nav a {
            margin: 5px
        }

        .nav a.image {
            width: 80px;
            height: auto;
            max-height: 70px;
            padding: 0 14px;
            display: inline-block;
            margin-right: auto;
            transition: all .2s ease 0s
        }

        .nav .secondary {
            background-color: rgba(0, 0, 0, .8)
        }

        .nav .link {
            padding: 12px;
            background-color: transparent
        }

        .nav .link:focus,
        .nav .link:hover,
        .nav .secondary:focus,
        .nav .secondary:hover {
            background-color: #f9f9f9;
            color: #040714;
            border-color: transparent
        }

        .nav.pre-sticky {
            z-index: 3;
            background-color: transparent;
            opacity: 1;
            pointer-events: none;
            justify-content: flex-end
        }

        .nav.pre-sticky>* {
            pointer-events: auto
        }

        .show-top-nav .nav.pre-sticky {
            opacity: 0;
            pointer-events: none
        }

        .show-top-nav .nav.pre-sticky>* {
            pointer-events: none
        }

        .nav.pre-sticky .link {
            background-color: rgba(0, 0, 0, .8)
        }

        .nav.post-sticky {
            z-index: 4;
            background-color: #040714;
            opacity: 0
        }

        .nav.post-sticky .link {
            background-color: transparent
        }

        .show-top-nav .nav.post-sticky {
            opacity: 1;
            pointer-events: auto
        }

        .nav.cta-toast {
            display: none;
            top: auto;
            bottom: 0;
            height: 88px;
            background-color: rgba(0, 0, 0, .8);
            z-index: 4;
            padding: 0 20px;
            justify-content: center;
            transform: translate3d(0, 100%, 0);
            transition: transform .5s ease 0s
        }

        .nav.cta-toast .link,
        .nav.cta-toast .primary,
        .nav.cta-toast .secondary {
            margin: 0
        }

        .show-cta-toast .nav.cta-toast {
            transform: translateZ(0);
            pointer-events: auto
        }

        .hide-cta-toast .nav.cta-toast {
            transform: translate3d(0, 100%, 0);
            pointer-events: none
        }

        @media only screen and (max-width: 768px) {
            .nav {
                padding: 0 12px 0 20px
            }

            .nav a.image {
                width: 64px;
                max-height: 52px;
                padding: 0 12px
            }

            .nav .link,
            .nav .primary,
            .nav .secondary {
                padding: 8px 12px
            }

            .nav .secondary {
                border-color: silver;
                background-color: rgba(0, 0, 0, .8)
            }

            .nav .link {
                border-color: transparent
            }

            .nav.cta-toast {
                display: flex
            }

            .has-cta-toast .nav.post-sticky .primary,
            .has-cta-toast .nav.pre-sticky .primary {
                display: none
            }

            .has-cta-toast .nav .primary,
            .has-cta-toast .nav .secondary {
                text-transform: uppercase;
                letter-spacing: 1px
            }
        }

        @media only screen and (max-width: 479px) {
            .nav {
                height: 52px
            }

            .nav .link,
            .nav .primary,
            .nav .secondary {
                text-transform: none;
                font-size: 14px;
                letter-spacing: 0
            }
        }

        @media only screen and (max-width: 360px) {
            .nav {
                padding: 0 8px 0 10px
            }

            .nav .link,
            .nav .primary,
            .nav .secondary {
                font-size: 13px
            }
        }

        .nav a.primary,
        .nav a.secondary,
        .nav button.primary,
        .nav button.secondary {
            max-width: none;
            height: 40px;
            width: auto
        }

        .nav a.primary *,
        .nav a.secondary *,
        .nav button.primary *,
        .nav button.secondary * {
            margin-top: 0
        }

        .nav a.secondary,
        .nav button.secondary {
            padding-left: 8px;
            padding-right: 8px
        }

        @media only screen and (max-width: 479px) {

            .nav a.primary,
            .nav a.secondary,
            .nav button.primary,
            .nav button.secondary {
                text-transform: capitalize;
                font-size: 13px;
                line-height: 15px
            }
        }

        @media only screen and (min-width: 769px) {

            .nav a.primary,
            .nav a.secondary,
            .nav button.primary,
            .nav button.secondary {
                max-width: 260px;
                height: 50px;
                text-transform: uppercase;
                max-width: none
            }

            .nav a.secondary,
            .nav button.secondary {
                padding-left: 16px;
                padding-right: 16px
            }
        }

        div.spacer-1,
        div.spacer-10,
        div.spacer-11,
        div.spacer-12,
        div.spacer-13,
        div.spacer-14,
        div.spacer-15,
        div.spacer-16,
        div.spacer-17,
        div.spacer-18,
        div.spacer-19,
        div.spacer-2,
        div.spacer-20,
        div.spacer-3,
        div.spacer-4,
        div.spacer-5,
        div.spacer-6,
        div.spacer-7,
        div.spacer-8,
        div.spacer-9 {
            height: 0;
            width: 100%
        }

        div.spacer-1 {
            margin-top: 2.5px
        }

        div.spacer-2 {
            margin-top: 5px
        }

        div.spacer-3 {
            margin-top: 7.5px
        }

        div.spacer-4 {
            margin-top: 10px
        }

        div.spacer-5 {
            margin-top: 12.5px
        }

        div.spacer-6 {
            margin-top: 15px
        }

        div.spacer-7 {
            margin-top: 17.5px
        }

        div.spacer-8 {
            margin-top: 20px
        }

        div.spacer-9 {
            margin-top: 22.5px
        }

        div.spacer-10 {
            margin-top: 25px
        }

        div.spacer-11 {
            margin-top: 27.5px
        }

        div.spacer-12 {
            margin-top: 30px
        }

        div.spacer-13 {
            margin-top: 32.5px
        }

        div.spacer-14 {
            margin-top: 35px
        }

        div.spacer-15 {
            margin-top: 37.5px
        }

        div.spacer-16 {
            margin-top: 40px
        }

        div.spacer-17 {
            margin-top: 42.5px
        }

        div.spacer-18 {
            margin-top: 45px
        }

        div.spacer-19 {
            margin-top: 47.5px
        }

        div.spacer-20 {
            margin-top: 50px
        }

        @media only screen and (min-width: 769px) {
            div.spacer-1 {
                margin-top: 4px
            }

            div.spacer-2 {
                margin-top: 8px
            }

            div.spacer-3 {
                margin-top: 12px
            }

            div.spacer-4 {
                margin-top: 16px
            }

            div.spacer-5 {
                margin-top: 20px
            }

            div.spacer-6 {
                margin-top: 24px
            }

            div.spacer-7 {
                margin-top: 28px
            }

            div.spacer-8 {
                margin-top: 32px
            }

            div.spacer-9 {
                margin-top: 36px
            }

            div.spacer-10 {
                margin-top: 40px
            }

            div.spacer-11 {
                margin-top: 44px
            }

            div.spacer-12 {
                margin-top: 48px
            }

            div.spacer-13 {
                margin-top: 52px
            }

            div.spacer-14 {
                margin-top: 56px
            }

            div.spacer-15 {
                margin-top: 60px
            }

            div.spacer-16 {
                margin-top: 64px
            }

            div.spacer-17 {
                margin-top: 68px
            }

            div.spacer-18 {
                margin-top: 72px
            }

            div.spacer-19 {
                margin-top: 76px
            }

            div.spacer-20 {
                margin-top: 80px
            }
        }

        .accordion-container {
            background-color: #13151d;
            width: 100%;
            text-align: left;
            margin-top: 16px;
            box-sizing: border-box
        }

        .accordion-container:first-child {
            margin-top: 0
        }

        .accordion-container button.accordion-btn {
            text-align: inherit;
            background: 0 0;
            border: none;
            padding: 24px;
            margin: 0;
            width: 100%;
            cursor: pointer
        }

        .accordion-container button.accordion-btn * {
            display: inline-block;
            margin: 0;
            width: 100%;
            position: relative;
            padding-right: 26px;
            box-sizing: border-box
        }

        .accordion-container button.accordion-btn :after {
            color: #f9f9f9;
            content: "+";
            font-size: 40px;
            position: absolute;
            right: 0;
            top: calc(50% - 16px);
            line-height: .8
        }

        .accordion-container .accordion-child {
            max-height: 0;
            overflow: hidden;
            margin: 0;
            padding: 0 24px;
            transition: max-height, .25s ease-in-out
        }

        .accordion-container .accordion-child * {
            margin-top: 16px;
            margin-bottom: 0
        }

        .accordion-container .accordion-child :first-child {
            margin-top: 0
        }

        .accordion-container.open button.accordion-btn :after {
            content: "\2013"
        }

        .accordion-container.open .accordion-child {
            max-height: 1500px;
            padding-bottom: 24px
        }

        .banner {
            width: 100%;
            position: relative
        }

        .banner>a picture,
        .banner>picture {
            margin: 0
        }

        .banner .banner-content-container {
            display: flex;
            position: absolute;
            align-content: center;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%
        }

        .banner .banner-content-container.no-pointer {
            pointer-events: none
        }

        .banner .banner-content-container.position-center {
            justify-content: space-around
        }

        .banner .banner-content-container.position-center .banner-content {
            max-width: 40%
        }

        .banner .banner-content-container.position-left {
            justify-content: flex-start
        }

        .banner .banner-content-container.position-left .banner-content {
            padding-left: 3vw;
            max-width: 40%
        }

        .banner .banner-content-container.position-right {
            justify-content: flex-end
        }

        .banner .banner-content-container.position-right .banner-content {
            padding-right: 3vw;
            max-width: 40%
        }

        .banner .banner-content-container .banner-content {
            box-sizing: border-box;
            align-self: center;
            text-align: center;
            width: 100%;
            max-height: 100%
        }

        .banner .banner-content-container .banner-content.align-left {
            text-align: left
        }

        .banner .banner-content-container .banner-content.align-right {
            text-align: right
        }

        .banner .banner-content-container .banner-content :last-child {
            margin-bottom: 0
        }

        .hero .banner {
            left: 0;
            bottom: 0;
            z-index: -1;
            position: absolute
        }

        @media only screen and (min-width: 1025px) {

            .banner .banner-content-container.position-center .banner-content,
            .banner .banner-content-container.position-left .banner-content,
            .banner .banner-content-container.position-right .banner-content {
                max-width: 33.3333%
            }
        }

        .tab-container {
            min-height: 50vw
        }

        .tab-container [role=tabpanel] {
            display: none
        }

        .tab-container [role=tabpanel][aria-hidden=false] {
            display: flex;
            margin-top: 24px
        }

        .tab-container [role=tablist] {
            overflow-x: scroll;
            white-space: nowrap;
            padding-left: 2vw;
            padding-right: 2vw;
            margin-top: 24px
        }

        .tab-container [role=tablist]::-webkit-scrollbar {
            display: none
        }

        .tab-container [role=tablist] [aria-selected=false] {
            text-decoration: none
        }

        .tab-container [role=tablist] [aria-selected=false]:hover {
            text-decoration: underline
        }

        .tab-container [role=tab] {
            width: auto;
            pointer-events: all;
            display: inline-block;
            padding: 0;
            margin: 0 2.5vw
        }

        @media only screen and (min-width: 769px) and (max-width:1024px),
        only screen and (min-width:1025px) {
            .tab-container [role=tab] {
                margin: 0 1vw
            }
        }

        .tab-container [role=tab][aria-hidden=false] {
            padding: 5px 0 0;
            display: inline-block;
            border-top: 5px solid #f9f9f9
        }

        .tab-container [role=tab][aria-hidden=false]:after {
            content: none
        }

        .countdown {
            flex-direction: row;
            margin-bottom: 2vw
        }

        .countdown,
        .countdown .counter-box {
            display: flex;
            justify-content: center
        }

        .countdown .counter-box {
            flex-direction: column;
            align-items: center;
            width: 72px;
            height: 56px;
            margin: 8px
        }

        .countdown .counter-box .unit-title {
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 2.5px
        }

        .countdown .counter-box .unit {
            font-size: 26px;
            letter-spacing: 2px;
            font-weight: 700
        }

        html.loading body {
            display: none
        }
    </style>
    <style data-style="override">
        .en .hero .primary,
        .en-us .hero .primary {
            display: none
        }

        .en header {
            display: none
        }

        nav.pre-sticky a.medium.link {
            background-color: transparent
        }

        .nav.pre-sticky .link {
            background-color: transparent
        }

        .nav .link {
            padding: 0;
            color: silver
        }

        .nav .link:hover {
            color: #f9f9f9
        }

        .nav p {
            margin: 0
        }

        @media only screen and (min-width: 769px) and (max-width:1024px) {

            .en-tw .hero .content.container-large,
            .zh-tw .hero .content.container-large {
                margin-top: -100px
            }
        }

        @media (min-width: 1025px) {
            .en-tw .hero .content.container-large {
                margin-top: 240px;
                margin-bottom: 30px
            }

            .en-tw .hero .content.container-large button.primary {
                margin-bottom: -30px
            }

            .en-tw .hero .content.container-large h1 {
                font-size: 36px;
                margin-bottom: 0
            }

            .en-tw .hero .content {
                width: 85%
            }
        }

        @media (min-width: 1025px) {
            .zh-tw .hero .content.container-large {
                margin-top: 235px;
                margin-bottom: 15px
            }

            .zh-tw .hero .content.container-large h1 {
                font-size: 36px;
                line-height: 40px
            }

            .zh-tw .hero .content.container-large h3 {
                font-size: 25px;
                line-height: 34px
            }

            .zh-tw .hero .content.container-large button.primary {
                margin-bottom: -30px
            }
        }

        @media (max-width: 425px) {
            .zh-tw section p {
                font-size: 11px
            }
        }
    </style>

</head>

<body>
    <section class="hero sm-align-center md-align-center lg-align-center" data-gv2-element="container" data-gv2-key="onboarding_cta" data-gv2-type="cta_button" data-gv2-index="0" data-analytics-section="hero:Hero - SPLASH - Unavailable in your country:null">
        <div class="content container-medium sm-text-center md-text-center lg-text-center">
            <picture class="sm-130 md-160 lg-180 logo d-flex">
                <img src="/assets/img/logo.png" width="1045" height="569" alt="MoonSpark Logo">
                <img style="width: 50px;" src="/assets/img/side-logo.png" alt=""></span>
            </picture>
            <h1>Sorry, MoonSpark is not available in your region.</h1>
        </div>
    </section>
</body>

</html>
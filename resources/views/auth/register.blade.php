@extends('layouts.unauth')

@section('content')
<section class="signup-form">
    <div class="container">
        <div class="signup-form-container">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <h3>Register</h3>

                <div class="form-group">
                    <label for="name" class="col-form-label text-md-right">{{ __('Name') }}</label>

                    <div class="">
                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                        @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group">
                    <label for="email" class="col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                    <div class="">
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                        @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="col-form-label text-md-right">{{ __('Password') }}</label>

                    <div class="">
                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>

                <div class="form-group">
                    <label for="password-confirm" class="col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                    <div class="">
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                    </div>
                </div>

                <div class="form-group mb-0">
                    <div class="mt-4">
                        <button type="submit" class="main-btn btn-gold">
                            {{ __('Register') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
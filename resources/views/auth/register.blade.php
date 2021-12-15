@extends('layouts.unauth')

@section('content')
<section class="signup-form">
    <div class="container">
        <div class="signup-form-container">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <h3>Create an Account</h3>
                <input type="hidden" name="refer" value="{{request('refer')}}">
                <div class="row">
                    <div class="form-group col-6">
                        <label for="name" class="col-form-label text-md-right">{{ __('First Name') }}</label>

                        <div class="">
                            <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" required autocomplete="name" autofocus>

                            @error('first_name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group col-6">
                        <label for="name" class="col-form-label text-md-right">{{ __('Last Name') }}</label>

                        <div class="">
                            <input id="name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" required autocomplete="name" autofocus>

                            @error('last_name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
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
                    <label for="country" class="col-form-label text-md-right">{{ __('Country') }}</label>

                    <div class="">
                        <select class="form-control" name="country">
                            <option value="">Select Country</option>
                            @foreach ($countries as $country)
                                <option value="{{$country->code}}">{{ $country->name }}</option>                            
                            @endforeach
                        </select>

                        @error('country')
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
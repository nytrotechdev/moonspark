<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'email',
        'phone',
        'country',        
        'phone',
        'status',
        'image',
        'wallet_address',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['created_date'];

    public function getNameAttribute($value)
    {   
        return $this->first_name.' '.$this->last_name;
    }

    public function getCreatedDateAttribute(){
        // return $this->created_at;
        return $this->created_at->format(config('app.date_format'));
    }

    public function projects(){
        return $this->hasMany(Project::class);
    }

    public function getImageAttribute($value){
        return $value ? asset("storage/$value") : "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name={$this->name}";
    }
}

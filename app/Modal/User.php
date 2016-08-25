<?php
namespace App\Modal;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Carbon\Carbon;

class User extends model
{
    protected $table = 'users';

    public function jobs()
    {
        return $this->hasMany('App\Modal\Job');
    }

    public function applys()
    {
        return $this->hasMany('App\Modal\Apply');
    }
}

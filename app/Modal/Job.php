<?php
namespace App\Modal;

use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;


class Job extends Model
{
    protected $table = 'jobs';

    public function users()
    {
        return $this->belongsTo('App\Modal\User');
    }

    public function applys()
    {
        return $this->hasMany('App\Modal\Apply');
    }

    public function questions()
    {
        return $this->hasMany('App\Modal\Question');
    }
}

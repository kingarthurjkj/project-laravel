<?php
namespace App\Modal;

use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;


class Apply extends Model
{
    protected $table = 'applys';

    public function users()
    {
        return $this->belongsTo('App\Modal\User');
    }

    public function jobs()
    {
        return $this->belongsTo('App\Modal\Job');
    }
}

<?php
namespace App\Modal;

use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;


class Question extends Model
{
    protected $table = 'questions';

    public function jobs()
    {
        return $this->belongsTo('App\Modal\Job');
    }
}

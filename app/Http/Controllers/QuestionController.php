<?php

namespace App\Http\Controllers;

use App\Modal\Job;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use App\Modal\Question;
use App\Modal\Info;
use App\Modal\Profile;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Filesystem\Factor;
use Symfony\Component\HttpFoundation\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use App\Http\Requests;


class QuestionController extends Controller
{

    
    public function addQuestion(Request $request)
    {

        //get request params
        $question = $request->get('question');
        $job_id = $request->get('id');
        $date = date('y-m-d h:i:s');
        $created_at = $date;
        $updated_at = $date;

        //insert user_table
        Question::insert(['question' => $question, 'job_id' => $job_id, 'created_at' => $created_at, 'updated_at' => $updated_at]);
    }

}

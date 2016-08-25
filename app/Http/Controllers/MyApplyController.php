<?php

namespace App\Http\Controllers;

use App\Modal\Job;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use App\Modal\User;
use App\Modal\Info;
use App\Modal\Apply;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Filesystem\Factor;
use Symfony\Component\HttpFoundation\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use App\Http\Requests;


class MyApplyController extends Controller
{

    
    public function getMyApply()
    {
        $id=Session::get('userid');
        return Job::leftjoin('applys','applys.job_id','=','jobs.id')
            ->where('applys.user_id',$id)
            ->get();
      }

    public function delete(Request $request){

        $id = $request->get('id');
        $apply =Apply::destroy($id);
        return $apply;

    }

}

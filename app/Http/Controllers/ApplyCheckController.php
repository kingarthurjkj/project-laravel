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


class ApplyCheckController extends Controller
{

    
    public function getApplyjob($id)
    {

        return User::leftjoin('applys','applys.user_id','=','users.id')
            ->where('job_id',$id)
            ->where('pflag',1)
            ->get();
      }

    public function accept(Request $request){

        $id = $request->get('id');
        $apply = Apply::find($id);

       if ($apply->astatus == 'apply'){

                $apply->astatus = 'accept';
                $date = date('y-m-d h:i:s');
                $apply->created_at = $date;
                $apply->updated_at = $date;
                $apply->save();
                return $apply;
        }
        return false;

    }

    public function cancel(Request $request){

        $id = $request->get('id');
        $apply = Apply::find($id);

        if ($apply->astatus == 'apply'){

            $apply->astatus = 'cancel';
            $date = date('y-m-d h:i:s');
            $apply->created_at = $date;
            $apply->updated_at = $date;
            $apply->save();

            return $apply;
        }
        return false;

    }
    public function delete(Request $request){

        $id = $request->get('id');
        $apply =Apply::find($id);
        $apply->pflag = 0;
        $apply->save();
        return $apply;

    }

}

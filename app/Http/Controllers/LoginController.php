<?php

namespace App\Http\Controllers;

use App\Modal\Job;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use App\Modal\User;
use App\Modal\Info;
use App\Modal\Profile;
use App\Modal\Apply;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Filesystem\Factor;
use Symfony\Component\HttpFoundation\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use App\Http\Requests;


class LoginController extends BaseController
{
    public function Login(Request $request){

        $username = $request->get('username');
        $password = $request->get('password');

        $credentials=array ('username' => $username,'password' => $password );

        if(Auth::attempt($credentials)){

            $id = Auth::user()->id;
            Session::set('userid',$id);
            return redirect('view');
        }else{
            Session::flash('error','you are incorrect');
            return view('sign');
        }
    }

    public function Logout(){
        Auth::logout();
        
    }

    public function Password(Request $request){

        $id = $request->get('id');
        $currentpassword = bcrypt($request->get('currentpassword'));
        $password = bcrypt($request->get('password'));
        $user = User::find($id);
        $pass= $user->password;

        if (strcmp($currentpassword , $pass)){
            $user->password = $password;
            $user->save();
        }
    }
    
    public function signUp(Request $request){

        //get request params
        $username = $request->get('username');
        $password = bcrypt($request->get('password'));
        $fullname = $request->get('fullname');
        $email = $request->get('email');
        $address = $request->get('address');
        $country = $request->get('country');
        $citytown = $request->get('city');
        $role = 'free';
        $date = date('y-m-d h:i:s');
        $created_at = $date;
        $updated_at = $date;

        //insert user_table
        User::insert(['username' => $username, 'password' => $password, 'email' => $email, 'fullname'=>$fullname, 'address'=>$address,
            'city/town' => $citytown, 'country' => $country,'role' => $role, 'created_at' => $created_at,'updated_at' => $updated_at]);

        Profile::insert(['firstname' => $fullname, 'lastname' => '', 'mobilenumber'=>'', 'interest'=>'',
            'occupation' => '', 'about' => '','websiteurl' => '','imgurl' => 'assets/admin/pages/media/profile/' , 'created_at' => $created_at,'updated_at' => $updated_at]);

        return view('sign');
    }
    public function image(Request $request){
        $id=Session::get('userid');
        $profile = Profile::find($id);
        $profile->imgurl = 'assets/admin/pages/media/profile/'.$id.'.jpg';
        $profile->save();
        $img=$request->file('image');

        $img->move(public_path().'/assets/admin/pages/media/profile/', $id.'.jpg');

    }

    public function uploadfile(Request $request){

        $id=Session::get('jobid');
        $img=$request->file('image');
        $type=$img->getClientOriginalExtension();
        $img->move(public_path().'/assets/attachedfile/', $id.'.'.$type);
        $job = Job::find($id);
        $job->fileurl='assets/attachedfile/'. $id.'.'.$type;
        $job->save();
    }

    public function applyfile(Request $request){

        $id=Session::get('applyid');
        $img=$request->file('image');
        $type=$img->getClientOriginalExtension();
        $img->move(public_path().'/assets/applyfile/', $id.'.'.$type);
        $apply = Apply::find($id);
        $apply->afileurl='assets/applyfile/'. $id.'.'.$type;
        $apply->save();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modal\Apply;
use App\Modal\Job;
use App\Modal\User;
use App\Modal\Info;
use Illuminate\Support\Facades\Session;


class ApplyController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */

    private $request;
    

    function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
//        return Apply::all();
        return Job::find(3)->applys;
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        $apply = new Apply();

        $apply->aoverview = $this->request->input('aoverview');
        $apply->afileurl = '';
        $apply->astatus = 'apply';
        $apply->user_id = Session::get('userid');
        $apply->job_id = $this->request->input('id');
        $apply->pflag = 1;
        $date = date('y-m-d h:i:s');
        $apply->created_at = $date;
        $apply->updated_at = $date;
        $apply->save();
        Session::set('applyid',$apply->id );
        return $apply;

    }

    /**
     * Store a newly created resource in storage.
     * @return Response
     */
    public function store()
    {

        $apply = new Apply();

        $apply->aoverview = $this->request->input('aoverview');
        $apply->afileurl = '';
        $apply->astatus = 'apply';
        $apply->user_id = Session::get('userid');
        $apply->job_id = $this->request->input('jobid');
        $apply->pflag = 1;
        $date = date('y-m-d h:i:s');
        $apply->created_at = $date;
        $apply->updated_at = $date;
        $apply->save();
        Session::set('applyid',$apply->id );
        return $apply;

      
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {

        return Apply::find($id);

    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     * @return Response
     */
    public function update($id)
    {


    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modal\Job;
use App\Modal\Info;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Session;


class JobController extends Controller
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
        return Job::all();
        
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        $job = new Job();

        $job->jtitle = $this->request->input('jtitle');
        $job->jclosingtime = $this->request->input('jclosingtime');
        $job->jsalary = $this->request->input('jsalary');
        $job->jtype = $this->request->input('jtype');
        $job->jlocation = $this->request->input('jlocation');
        $job->jcategory = $this->request->input('jcategory');
        $job->jcountry = $this->request->input('jcountry');
        $job->joverview = $this->request->input('joverview');
        $job->user_id = Session::get('userid');
        $job->fileurl = '';
        $date = date('y-m-d h:i:s');
        $job->created_at = $date;
        $job->updated_at = $date;
        $job->save();
        Session::set('jobid',$job->id );
        return $job;
    }

    /**
     * Store a newly created resource in storage.
     * @return Response
     */
    public function store()
    {

      $job = new Job();

        $job->jtitle = $this->request->input('jtitle');
        $job->jclosingtime = $this->request->input('jclosingtime');
        $job->jsalary = $this->request->input('jsalary');
        $job->jtype = $this->request->input('jtype');
        $job->jlocation = $this->request->input('jlocation');
        $job->jcategory = $this->request->input('jcategory');
        $job->jcountry = $this->request->input('jcountry');
        $job->joverview = $this->request->input('joverview');
        $job->user_id = Session::get('userid');
        $job->fileurl = '';
        $date = date('y-m-d h:i:s');
        $job->created_at = $date;
        $job->updated_at = $date;
        $job->save();
        Session::set('jobid',$job->id );
        return $job;
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($jid)
    {

        return Job::find($jid);

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
        return Job::destroy($id);
    }


}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modal\Profile;




class ProfileController extends Controller
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
        return Profile::all();
        
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {


    }

    /**
     * Store a newly created resource in storage.
     * @return Response
     */
    public function store()
    {

      $Profile = new Profile();

      
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {

        return Profile::find($id);

    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $Profile = Profile::find($id);

        $Profile->firstname = $this->request->input('firstname');
        $Profile->lastname = $this->request->input('lastname');
        $Profile->mobilenumber = $this->request->input('mobilenumber');
        $Profile->interest = $this->request->input('interest');
        $Profile->occupation = $this->request->input('occupation');
        $Profile->about = $this->request->input('about');
        $Profile->websiteurl = $this->request->input('websiteurl');
        $Profile->imgurl = $this->request->input('imgurl');

        $date = date('y-m-d h:i:s');
        $Profile->created_at = $date;
        $Profile->updated_at = $date;
        $Profile->save();
        return $Profile;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     * @return Response
     */
    public function update($id)
    {

        $Profile = Profile::find($id);

        $Profile->firstname = $this->request->input('firstname');
        $Profile->lastname = $this->request->input('lastname');
        $Profile->mobilenumber = $this->request->input('mobilenumber');
        $Profile->interest = $this->request->input('interest');
        $Profile->occupation = $this->request->input('occupation');
        $Profile->about = $this->request->input('about');
        $Profile->websiteurl = $this->request->input('websiteurl');
        $Profile->imgurl = $this->request->input('imgurl');

        $date = date('y-m-d h:i:s');
        $Profile->created_at = $date;
        $Profile->updated_at = $date;
        $Profile->save();
        return $Profile;


    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        return Profile::destroy($id);
    }
}

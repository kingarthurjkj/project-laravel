<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modal\Info;



class InfoController extends Controller
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
        return Info::all();

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


    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($jid)
    {

        return Info::find(1);

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
        return Info::destroy($id);
    }
}

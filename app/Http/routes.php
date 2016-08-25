<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {

    return view('sign');
});

Route::get('/login', function () {

    return view('sign');
});

//auth
Route::post('/signup', 'LoginController@signUp');
Route::post('/login', 'LoginController@Login');
Route::post('/logout', 'LoginController@Logout');





Route::group(['middleware' => ['auth']], function () {


    Route::group(['middleware' => ['admin']], function () {

        Route::get('/viewadmin', function () {

            return redirect('poster');
        });
        Route::get('/getapplyjob/{id}', 'ApplyCheckController@getApplyjob');//poster apply get
        Route::post('/posteraccept', 'ApplyCheckController@accept');//poster apply control
        Route::post('/postercancel', 'ApplyCheckController@cancel');//poster apply control
        Route::post('/posterdelete', 'ApplyCheckController@delete');//poster apply control
        Route::post('/addquestion', 'QuestionController@addQuestion');//poster add question his job
        Route::resource('/myjob','MyJobController');//resource poster job
        Route::post('/uploadfile', 'LoginController@uploadfile');
    });

    Route::group(['middleware' => ['user']], function () {

        Route::get('/view', function () {

            return redirect('free');
        });

        Route::get('/getmyapply', 'MyApplyController@getMyApply');
        Route::post('/freedelete', 'MyApplyController@delete');//poster apply control
        Route::post('/applyfile', 'LoginController@applyfile');

    });

    Route::get('/poster', function () {

        return view('poster');
    });
    Route::get('/free', function () {

        return view('free');
    });

    //profile
    Route::resource('/profile', 'ProfileController');
    Route::resource('/info', 'InfoController');
    Route::resource('/job','JobController');
    Route::resource('/apply','ApplyController');
    Route::post('/image', 'LoginController@image');
    Route::post('/password', 'LoginController@Password');

});





<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\User;
use App\Models\Admin;
use App\Models\Project;
use App\Models\TokenPrice;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    /**
     * index
     *
     * @param  mixed $request
     * @return void
     */
    public function index(Request $request){

        $projects = Project::with('client');
        
        if($request->status == 0)
            return $projects = $projects->where('status', 0)->get();
 
        if($request->status == 1)
            return $projects = $projects->where('status', 1)->get();


        return [];

    }


    /**
     * show
     *
     * @param  mixed $request
     * @param  mixed $task
     * @return void
     */
    public function show(Request $request, $project){
        return Project::find($project);
    }


    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(ProjectRequest $request){
      
        $client = User::find($request->user_id);

        $data = collect($request->all())->toArray();

        $data['status'] = '1';

        if($request->logo && $request->hasfile('logo')){
            $filename = $data['project_ticker'].".png";
            $path = $request->file('logo')->storeAs('public/project_logo', $filename);
            $data['logo'] = str_replace('public/','',$path);
        }else{
            unset($data['logo']);
        }

        if($request->short_video && $request->hasfile('short_video')){
            $filename = $data['project_ticker']."_short_video.png";
            $path = $request->file('short_video')->storeAs('public/short_video', $filename);
            $data['short_video'] = str_replace('public/','',$path);
        }else{
            unset($data['short_video']);
        }

        // $data['available_balance'] = $data['no_of_token'];

        $project = new Project();
        $project->fill($data);
        $project->save();

        // Setting Exchange Rate
        TokenPrice::create([
            'amount' => 1,
            'currency' => 'usd',
            'active' => 1,
            'project_id' => $project->id,
        ]);        


        return $this->responseSuccess("The Project is added successfully", $project);
    }


    public function update(ProjectRequest $request, $project){
      
        $client = User::find($request->user_id);

        $data = collect($request->all())->toArray();

        $data['status'] = $request->status;

        if($request->logo && $request->hasfile('logo')){
            $filename = $data['project_ticker'].".png";
            $path = $request->file('logo')->storeAs('public/project_logo', $filename);
            $data['logo'] = str_replace('public/','',$path);
        }else{
            unset($data['logo']);
        }

        if($request->short_video && $request->hasfile('short_video')){
            $filename = $data['project_ticker']."_short_video.png";
            $path = $request->file('short_video')->storeAs('public/short_video', $filename);
            $data['short_video'] = str_replace('public/','',$path);
        }else{
            unset($data['short_video']);
        }

        $project = Project::find($project);
        $project->fill($data);
        $project->save();


        return $this->responseSuccess("The Project is updated successfully", $project);
    }


    /**
     * formatTime
     *
     * @param  mixed $data
     * @return void
     */
    public function formatTime($data){
        $length = 2;
        $hour = str_pad($data['time_hour'],$length,"0", STR_PAD_LEFT);
        $mint = str_pad($data['time_minutes'],$length,"0", STR_PAD_LEFT);
        $secd = str_pad($data['time_second'],$length,"0", STR_PAD_LEFT);
        return "{$hour}:{$mint}:{$secd}";
    }


    public function destroy($project){
        $project = Project::find($project);
        $project->delete();
        return $this->responseSuccess("The project is deleted successfully");
    }


    public function updateStatus(Request $request, $project){
        $project = Project::find($project);
        $project->status = $request->status;
        $project->save();

        return $this->responseSuccess("The project status has been updated successfully");
    }

}

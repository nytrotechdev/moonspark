<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Admin;
use App\Models\User;
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
        $user = $request->user();

        $projects = Project::with('client', 'tokenPrice')->mine($user)->latest()->get();

        return $projects;

    }

    public function latestProject(Request $request){
        $projects = Project::select(
            'id', 'project_name', 'project_ticker', 'project_detail', 'logo',
            'market_cape', 'diluted_market_cape', 'decimal', 'created_at'
        )->with('client');
        
        if($request->limit == 0)
            $projects->take($request->limit);
        
        return $projects->with('tokenPrice')->active()->latest()->get();    
    }

    /**
     * show
     *
     * @param  mixed $request
     * @param  mixed $task
     * @return void
     */
    public function show(Request $request, $project){

        return Project::with('tokenPrice')->find($project);
    }


    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(ProjectRequest $request){
      
        $client = $request->user();

        $data = collect($request->all())->toArray();

        $data['status'] = '0';
        $data['user_id'] = $client->id;

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

        $this->notify([
            "name" => "Admin",
            "title" => "New Project submitted by {$request->user()->name}",
            "text" => $request->user()->name." has created a project a new project - $request->project_name ($request->project_ticker) on Moonspark.finance ",
            "transaction_id" => $project->id,
            "transaction_type" => get_class($project),
        ], Admin::all(), 'project_creation');

        return $this->responseSuccess("The Project is added successfully, Please wait for Admin approval", $project);
    }


    public function update(ProjectRequest $request, $project){
      
        $client = User::find($request->user_id);

        $data = collect($request->all())->toArray();

        $data['status'] = $request->status;

        if($request->logo && $request->hasfile('logo')){
            $filename = $data['project_ticker']."_".rand(100000000,1000000000).".png";
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

        $this->notify([
            'name' => "Admin",
            "title" => "Project details updated by {$request->user()->name}",
            "text" => $request->user()->name." has updated a project detail of - $request->project_name ($request->project_ticker) on Moonspark.finance ",
            "transaction_id" => $project->id,
            "transaction_type" => get_class($project),
        ], Admin::all(), 'project_updation');


        return $this->responseSuccess("The Project is updated successfully", $project);
    }

    public function setRate(Request $request, $project)
    {   
        $request->validate([
            'amount' => 'required|numeric',
            'currency' => 'required',
            'project_id' => 'required'
        ]);

        $project = Project::find($request->project_id);

        // Setting Exchange Rate
        TokenPrice::whereProjectId($request->project_id)->update([
            'amount' => $request->amount,
            'currency' => $request->currency,
        ]);

        $this->notify([
            'name' => "Admin",
            "title" => "Project price updated by {$request->user()->name}",
            "text" => $request->user()->name." has recently updated a price for project - $request->project_name ($request->project_ticker) on Moonspark.finance ",
            "transaction_id" => $project->id,
            "transaction_type" => get_class($project),
        ], Admin::all(), 'project_rate');



        return $this->responseSuccess("The Project rate is updated successfully");

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


    public function destroy(Request $request, $project){

        $project = Project::find($project);

        $this->notify([
            'name' => "Admin",
            "title" => "Project price updated by {$request->user()->name}",
            "text" => $request->user()->name." has deleted a project - $request->project_name ($request->project_ticker) on Moonspark.finance ",
            "transaction_id" => $project->id,
            "transaction_type" => get_class($project),
        ], Admin::all(), 'project_deletion');


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

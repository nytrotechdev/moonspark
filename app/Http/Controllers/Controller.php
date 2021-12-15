<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Notification;
use App\Notifications\GeneralNotification;
use Illuminate\Support\Str;
use stdClass;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function responseWithError($errors = [], $code = 422)
    {
        return response(['message' => 'The given data was invalid', 'errors' => $errors], $code);
    }

    protected function responseSuccess($message = '', $payload = [], $code = 200)
    {
        return response(['message' => $message, 'data' => $payload], $code);
    }    

    public function notify($data, $users, $type)
    {
        try{
            $payload = new stdClass;
            $subject = $data['title'];
            $payload->name = @$data['name'] ? $data['name'] : (request()->user() ? request()->user()->name : "");
            $payload->subject = $subject;
            $payload->mini_text = $subject;
            $payload->type = Str::snake($data['title']);
            $payload->text = $data['text'];
            $payload->action_url = "#";
            $payload->target_url = "#";
            $payload->action_text = "Login";
            $payload->transaction_id = $data['transaction_id'];
            $payload->transaction_type = $data['transaction_type'];
        
            Notification::send($users, new GeneralNotification($payload, $type));

        }
        catch (\Exception $e){
            dd($e->getMessage());
        }
    }    
}

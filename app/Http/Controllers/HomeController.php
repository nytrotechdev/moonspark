<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\FiatRate;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return "";
    }

    public function adminAddress(Request $request){
        $admin = Admin::first();

        if(!$admin || !$admin->wallet_address) return $this->responseWithError(['message' => "Reciever address is not set, contact support"]);

        return $admin->wallet_address;
    }

    public function getExchangeRate(){

        $rates = FiatRate::select('eth', 'bnb')->whereDate('created_at', Carbon::now())->first();

        if($rates) return $rates;

        $curl = curl_init();
        
        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH%2CBNB",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache",
            "postman-token: 99df3f9e-b845-77a8-b70b-e460eef59eee"
          ),
        ));
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        
        curl_close($curl);
        
        if ($err) {

            echo "cURL Error #:" . $err;

        } else {
            $rates = json_decode($response);

            $return = FiatRate::create([
                "eth" => $rates->ETH,
                "bnb" => $rates->BNB,                
            ]);

            return $return;
        }

    }


    public function update(Request $request){
        $user = $request->user();

        $request->validate([
            "first_name" => "required",
            "last_name" => "required",
        ]);


        $data = $request->all();

        if(!(strpos($request->image,'http') > -1)) {
            $data['image'] = $this->upload($request);
        }
        else
            unset($data['image']);

        if($request->password)
            $data['password'] = Hash::make($request->password);

        $user->fill($data);

        $user->save();

        return response()->json(["message" => "Profile updated successfully"]);
    }    


    public function upload(Request $request){
        $image_64 = $request->image;  // your base64 encoded

        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $image = str_replace($replace, '', $image_64); 
      
       $image = str_replace(' ', '+', $image); 
      
       $imageName = Str::random(10).'.'.$extension;
      
       Storage::disk('public')->put($imageName, base64_decode($image));

       return "$imageName";
    }


}

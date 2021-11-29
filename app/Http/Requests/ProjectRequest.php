<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // "user_id" => "required",
            "project_name" => "required",
            "project_ticker" => "required",
            "logo" => "required",
            "project_detail" => "required",
            "project_type" => "required",
            "email" => "required",
            "name_of_ceo" => "required",
            "tokenomics_detail" => "required",
            "whitepaper_link" => "required",
            "contract" => "required",
            "contract_link" => "required",
            "decimal" => "required",
            "no_of_token" => "required|numeric",
            "max_no_of_token" => "required|numeric",
            // "status" => "required"
        ];
    }
}

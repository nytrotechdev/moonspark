<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "project_name",  "project_ticker",  "logo",  "project_detail",  
        "fund_raised_todate",  "total_raised_todate",  "smart_contract_audited",  "smart_contract_audited_text",  "project_type",  "token_usecase",  "website",  "medium",  "twitter",  "telegram",  "tg_handle",  "email",  "name_of_ceo",  "name_of_cto",  "bio_of_ceo",  "bio_of_cto",  "short_video",  "project_business_incorporated",  "project_business_incorporated_where",  "project_business_lic",  "project_business_lic_list",  "project_business_lic_plan",  "tokenomics_detail",  "project_business_model",  "legal_opinion",  "market_cape",  "diluted_market_cape",  "summary",  "core_team",  "mvp",  "whitepaper_link",  "total_follower",  "youtube_link",  "partnership",  "core_developer",  "security_concerns",  "split",  "relevant_info",  "contract",  "contract_link",  "decimal",  "no_of_token", "status" , "max_no_of_token"
        
    ];


    protected $appends = ['created_date'];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }

    public function scopeMine($query, $user){
        $query->where('user_id', $user->id);
    }

    public function client(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getLogoAttribute($value){
        return $value ? asset("storage/$value") : null;
    }

    public function getShortVideoAttribute($value){
        return ($value) ? asset("storage/$value") : null;
    }


}

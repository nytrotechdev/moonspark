<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index(){
        return Page::latest()->get();
    }

    /**
     * show
     *
     * @param  mixed $Page
     * @return void
     */
    public function show($pages){
        return Page::find($pages);
    }


    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request){
        $request->validate([
            "title" => 'required',
            "body" => 'required',
            "author_name" => 'required',
            "mini_description" => 'required',
        ]);

        $page = new Page();
        $page->fill($request->all());
        $page->save();

        return $this->responseSuccess("page is saved successfully");

    }


    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $blog
     * @return void
     */
    public function update(Request $request, $page){
        $request->validate([
            "title" => 'required',
            "body" => 'required',
            "author_name" => 'required',
            "mini_description" => 'required',
        ]);
        $page = Page::find($page);
        $page->fill($request->all());
        $page->save();

        return $this->responseSuccess("Page is updated successfully");

    }


    /**
     * destroy
     *
     * @param  mixed $request
     * @param  mixed $blog
     * @return void
     */
    public function destroy(Request $request, $page){
        $page = Page::find($page);
        $page->delete();
        return $this->responseSuccess("Page is deleted successfully");
    }
}

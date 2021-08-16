<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Developer;

class DeveloperController extends Controller
{
    public function index() {
        $Developers = Developer::readDeveloper();
        return $Developers;
    }

    public function store(Request $request) {
        if($request->isMethod('post'))
            return Developer::createDeveloper($request->input());
        else
            return Developer::updateDeveloper($request->input());
    }

    public function destroy($id) {
        return Developer::deleteDeveloper($id);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    protected $guarded = [];

    public static function readDeveloper()
    {
        return Developer::orderBy('updated_at', 'desc')->paginate(5);
    }

    public static function createDeveloper($data)
    {
        return Developer::create([
            'nome' => $data['nome'],
            'sexo' => $data['sexo'],
            'idade' => $data['idade'],
            'hobbie' => $data['hobbie'],
            'dataNascimento' => $data['dataNascimento']
        ]);
    }

    public static function updateDeveloper($data)
    {
        return Developer::where('id', $data['id'])->update([
            'nome' => $data['nome'],
            'sexo' => $data['sexo'],
            'idade' => $data['idade'],
            'hobbie' => $data['hobbie'],
            'dataNascimento' => $data['dataNascimento']
        ]);
    }

    public static function deleteDeveloper($id)
    {
        return Developer::where('id', $id)->delete();        
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    use HasFactory;
    protected $filable =[
        'ci',
        'nombre',
        'apellidos',
        'telefono',
        'direccion',
        'departamento',
        'rol',
    ];
}

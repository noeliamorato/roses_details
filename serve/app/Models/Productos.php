<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;
    protected $filable =[
        'nombre',
        'descripcion',
        'precio',
        'cantidad',
        'id_categorias',
        'imagen',
        'colores',
    ];
}

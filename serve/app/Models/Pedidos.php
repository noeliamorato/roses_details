<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedidos extends Model
{
    use HasFactory;
    protected $filable =[
        'id_cientes',
        'id_productos',
        'metodos_pago',
        'fecha',
    ];
}

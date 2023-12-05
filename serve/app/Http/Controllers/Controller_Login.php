<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Clientes;

class Controller_Login extends Controller
{
    public function store(Request $request)
    {
        // Obtener el nombre de usuario y contraseña de la solicitud
        $nombreUsuario = $request->input('nombre');
        $password = $request->input('password');
        
        // Buscar al usuario en la base de datos por nombre de usuario
        $usuario = Clientes::where('nombre', $nombreUsuario)->first();
        
        // Verificar si el usuario existe y si la contraseña coincide
        if ($usuario && $usuario->password === $password) {
            // Usuario autenticado, puedes realizar acciones adicionales aquí si es necesario
            return response()->json(['message' => "¡Bienvenido, $nombreUsuario!"]);
        } else {
            // Usuario no encontrado o contraseña incorrecta
            return response()->json(['message' => 'Usuario no encontrado.'], 404);
        }
    }
}

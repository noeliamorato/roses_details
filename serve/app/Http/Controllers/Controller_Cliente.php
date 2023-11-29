<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Clientes;

class Controller_Cliente extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Clientes::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $Clien=new Clientes();
        $Clien->ci=$request->ci;
        $Clien->nombre=$request->nombre;
        $Clien->apellidos=$request->apellidos;
        $Clien->telefono=$request->telefono;
        $Clien->direccion=$request->direccion;
        $Clien->departamento=$request->departamento;
        $Clien->rol=$request->rol;
        $Clien->save();
        return $Clien;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Clien=Clientes::find($id);
        $Clien->ci=$request->ci;
        $Clien->nombre=$request->nombre;
        $Clien->apellidos=$request->apellidos;
        $Clien->telefono=$request->telefono;
        $Clien->direccion=$request->direccion;
        $Clien->departamento=$request->departamento;
        $Clien->rol=$request->rol;
        $Clien->save();
        return $Clien;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Clientes::destroy($id);
    }
}

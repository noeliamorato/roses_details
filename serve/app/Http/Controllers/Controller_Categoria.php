<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categorias;

class Controller_Categoria extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Categorias::all();
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
        $Cat=new Categorias();
        $Cat->nombre=$request->nombre;
        $Cat->descripcion=$request->descripcion;
        $Cat->save();
        return $Cat;
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
        $Cat=Categorias::find($id);
        $Cat->nombre=$request->nombre;
        $Cat->descripcion=$request->descripcion;
        $Cat->save();
        return $Cat;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Categorias::destroy($id);
    }
}

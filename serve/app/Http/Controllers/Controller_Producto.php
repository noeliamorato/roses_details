<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Productos;

class Controller_Producto extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Productos::all();
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
        $Prod=new Productos();
        $Prod->nombre=$request->nombre;
        $Prod->descripcion=$request->descripcion;
        $Prod->precio=$request->precio;
        $Prod->cantidad=$request->cantidad;
        $Prod->id_categorias=$request->id_categorias;
        $Prod->imagen=$request->imagen;
        $Prod->colores=$request->colores;
        $Prod->save();
        return $Prod;
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
        $Prod=Productos::find($id);
        $Prod->nombre=$request->nombre;
        $Prod->descripcion=$request->descripcion;
        $Prod->precio=$request->precio;
        $Prod->cantidad=$request->cantidad;
        $Prod->id_categorias=$request->id_categorias;
        $Prod->imagen=$request->imagen;
        $Prod->colores=$request->colores;
        $Prod->save();
        return $Prod;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Productos::destroy($id);
    }
}

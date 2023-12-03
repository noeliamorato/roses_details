<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pedidos;

class Controller_Pedido extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pedidos::all();
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
        $Ped=new Pedidos();
        $Ped->id_clientes=$request->id_clientes;
        $Ped->id_productos=$request->id_productos;
        $Ped->metodos_pago=$request->metodos_pago;
        $Ped->fecha=$request->fecha;
        $Ped->save();
        return $Ped;
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
        $Ped=Pedidos::find($id);
        $Ped->id_clientes=$request->id_clientes;
        $Ped->id_productos=$request->id_productos;
        $Ped->metodos_pago=$request->metodos_pago;
        $Ped->fecha=$request->fecha;
        $Ped->save();
        return $Ped;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Pedidos::destroy($id);
    }
}

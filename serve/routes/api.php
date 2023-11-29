<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller_Cliente;
use App\Http\Controllers\Controller_Categoria;
use App\Http\Controllers\Controller_Pedido;
use App\Http\Controllers\Controller_Producto;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Clientes', [Controller_Cliente::class, 'index']);
Route::post('/Clientes', [Controller_Cliente::class, 'store']);
Route::put('/Clientes/{id}', [Controller_Cliente::class, 'update']);
Route::delete('/Clientes/{id}', [Controller_Cliente::class, 'destroy']);

Route::get('/Categorias', [Controller_Categoria::class, 'index']);
Route::post('/Categorias', [Controller_Categoria::class, 'store']);
Route::put('/Categorias/{id}', [Controller_Categoria::class, 'update']);
Route::delete('/Categorias/{id}', [Controller_Categoria::class, 'destroy']);

Route::get('/Productos', [Controller_Producto::class, 'index']);
Route::post('/Productos', [Controller_Producto::class, 'store']);
Route::put('/Productos/{id}', [Controller_Producto::class, 'update']);
Route::delete('/Productos/{id}', [Controller_Producto::class, 'destroy']);

Route::get('/Pedidos', [Controller_Pedido::class, 'index']);
Route::post('/Pedidos', [Controller_Pedido::class, 'store']);
Route::put('/Pedidos/{id}', [Controller_Pedido::class, 'update']);
Route::delete('/Pedidos/{id}', [Controller_Pedido::class, 'destroy']);

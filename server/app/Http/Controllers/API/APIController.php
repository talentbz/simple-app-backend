<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB, Validator, Exception, Auth ;
use App\Models\User;
use App\Models\Items;
use App\Models\ItemImages;
use Laravel\Cashier\Cashier;

class APIController extends Controller
{
    public function login(Request $request)
    {
        try {
            $users = $request->validate([
                'email' => ['required'],
                'password' => ['required'],
            ]);
            
            if(Auth::attempt($users)){
                return response()->json(['result' => true, 'data' => $users]);
            } else {
                return response()->json(['result' => false, 'message' => 'No user']);
            }
        } catch (Exception $e) {
            return response()->json(['result' => false, 'message' => $e->getMessage()]);
        }
         
    }

    public function search(Request $request) 
    {
        try{
            $data = $request->title;
            $items = Items::join('item_images', 'items.id', '=', 'item_images.item_id')
                          ->where('items.item_name', 'LIKE', "%{$data}%")
                          ->orWhere('items.item_title', 'LIKE', "%{$data}%")
                          ->orWhere('items.item_description', 'LIKE', "%{$data}%")
                          ->orWhere('items.item_origin1', 'LIKE', "%{$data}%")
                          ->get();      
            return response()->json(['result' => true, 'data' => $items]);
        } catch (Exception $e) {
            return response()->json(['result' => false, 'message' => $e->getMessage()]);
        }
    }
    public function details(Request $request) 
    {
        try{
            $id = $request->id;
            $items = Items::join('item_images', 'items.id', '=', 'item_images.item_id')
                          ->where('items.id', '=', $id)  
                          ->get();
            return response()->json(['result' => true, 'data' => $items]);
        } catch (Exception $e) {
            return response()->json(['result' => false, 'message' => $e->getMessage()]);
        }
    }


}

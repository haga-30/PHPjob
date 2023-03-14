<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Post extends Model
{
  protected $guarded = array('id');

  //Validation定義
  public static $rules = array(
      'body' =>   ['required', 'string', 'max:255'],
  );
  
  //論理削除
  use SoftDeletes;
  protected $dates = ['deleted_at'];
}

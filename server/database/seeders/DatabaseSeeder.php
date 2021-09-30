<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $root_url = 'https://trucker.sebthe.ninja';
        //user table seed
        DB::table('users')->insert([
            [
                'username' => '山田　太郎',
                'email'    => 'yamada.tarou@gmail.com',
                'password' => Hash::make('yamada'), 
            ],
            [
                'username' => '鈴木　一朗',
                'email'    => 'suzuki.iticho@yahoo.co.jp',
                'password' => Hash::make('suzuki'),       
            ],
            [
                'username' => '大谷　翔平',
                'email'    => 'syohei.ootani@ntt.com',
                'password' => Hash::make('ootani'),       
            ],
            [
                'username' => 'ダルビッシュ',
                'email'    => 'darvish@qmail.com',
                'password' => Hash::make('darvish'),       
            ],
            [
                'username' => '中田　翔',
                'email'    => 'nakata.sho@abc.com',
                'password' => Hash::make('nakata'),   
            ],    
        ]);

        //items table seed
        DB::table('items')->insert([
            [
                'item_name'        => 'Apple, esashi, Iwate',
                'item_title'       => '江刺産、りんご',
                'item_description' =>'岩手県の県南部に位置する奥州市の江刺（えさし）地区のリンゴです',       
                'item_origin'      => '岩手県',
                'latitude'         => 39.1997691,
                'longitude'        => 141.1457213,
            ],
            [
                'item_name'        => 'Fuji Ringo,  Nagano pref.',
                'item_title'       => '長野県産サンふじりんご',
                'item_description' =>'収穫期は2021年11月からになります',       
                'item_origin'      => '長野県',
                'latitude'         => 36.7607522,
                'longitude'        => 138.3935465,
            ],
            [
                'item_name'        => 'Apple fuji, Akita',
                'item_title'       => '葉とらずふじ',
                'item_description' =>'奥羽山脈の麓、秋田県横手市よりおいしさ・新鮮さを限りなく求めて作りました',       
                'item_origin'      => '秋田県',
                'latitude'         => 39.3182413,
                'longitude'        => 140.4473043,
            ],
            [
                'item_name'        => 'Apple tsugaru, Aomori.',
                'item_title'       => '津軽リンゴA',
                'item_description' =>'青森県津軽産のリンゴです。',       
                'item_origin'      => '青森県',
                'latitude'         => 40.9271739,
                'longitude'        => 140.9280987,
            ],
            [
                'item_name'        => 'Fuji Ringo. San Joaquin',
                'item_title'       => 'ブラジル産ふじ',
                'item_description' =>'ブラジル・サンジョアキンさんのリンゴです。',       
                'item_origin'      => 'サンタカタリーナ州',
                'latitude'         => 27.3056713,
                'longitude'        => -50.8486831,
            ],
            [
                'item_name'        => 'Apple, Malus Sieversii, wild crabapple from Kazakhstan.',
                'item_title'       => 'カザフスタン産リンゴ',
                'item_description' =>'Malus Sieversii、カザフスタン産の野生のリンゴ。今日の野生リングの起源となります。',       
                'item_origin'      => 'サンディクタウスキー・ライオン',
                'latitude'         => 52.544261,
                'longitude'        => 68.948805,
            ],
            [
                'item_name'        => "apple's origin to China",
                'item_title'       => '中国産元リンゴ',
                'item_description' =>'リンゴの起源の新疆ウイグル自治区で取れました。',       
                'item_origin'      => 'バグラシュ県',
                'latitude'         => 42.093463,
                'longitude'        => 86.798286,
            ],
            [
                'item_name'        => "Royal Gala Apples Granny Smith, Fuji apples Origin CHINA",
                'item_title'       => '',
                'item_description' =>'中国産リンゴ',       
                'item_origin'      => '中国, 甘粛省',
                'latitude'         => 35.971402,
                'longitude'        => 103.240005,
            ],
            [
                'item_name'        => "Grade 1 APPLES FRUITS",
                'item_title'       => 'Royal Gala Apple and Fuji Apple',
                'item_description' =>'Fresh Red Delicious Apple Fruit Fresh Apple',       
                'item_origin'      => 'United States',
                'latitude'         => 45.3350509,
                'longitude'        => -92.952856,
            ],
            [
                'item_name'        => "Akita Beniakari",
                'item_title'       => '秋田産ふじ',
                'item_description' =>'赤く光るベニアカリは、甘みの強い「おりん」と食感の良い「チアキ」の2種類のリンゴのハイブリッドです。また、表面に星型のドットがあり、甘さを感じさせます。',       
                'item_origin'      => '日本,秋田県',
                'latitude'         => 39.578606,
                'longitude'        => 140.202356,
            ],
        ]);
        //item_images seed
        DB::table('item_images')->insert([
            [
                'item_id'        => 1,
                'item_url_top'   => $root_url.'/images/image0_1.png',
                'item_url_1'     => $root_url.'/images/image1_1.png',       
                'item_url_2'     => $root_url.'/images/image2_1.png',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 2,
                'item_url_top'   => $root_url.'/images/image0_2.png',
                'item_url_1'     => $root_url.'/images/image1_2.png',       
                'item_url_2'     => $root_url.'/images/image2_2.png',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 3,
                'item_url_top'   => $root_url.'/images/image0_3.png',
                'item_url_1'     => $root_url.'/images/image1_3.png',       
                'item_url_2'     => $root_url.'/images/image2_3.png',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 4,
                'item_url_top'   => $root_url.'/images/image0_4.png',
                'item_url_1'     => $root_url.'/images/image1_4.png',       
                'item_url_2'     => $root_url.'/images/image2_4.png',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 5,
                'item_url_top'   => $root_url.'/images/image0_5.png',
                'item_url_1'     => $root_url.'/images/image1_5.png',       
                'item_url_2'     => '',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 6,
                'item_url_top'   => $root_url.'/images/image0_6.png',
                'item_url_1'     => $root_url.'/images/image1_6.png',       
                'item_url_2'     => '',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 7,
                'item_url_top'   => $root_url.'/images/image0_7.png',
                'item_url_1'     => '',       
                'item_url_2'     => '',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 8,
                'item_url_top'   => $root_url.'/images/image0_8.png',
                'item_url_1'     => $root_url.'/images/image1_8.png',       
                'item_url_2'     => '',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 9,
                'item_url_top'   => '',
                'item_url_1'     => '',       
                'item_url_2'     => '',
                'item_url_3'     => '',
            ],
            [
                'item_id'        => 10,
                'item_url_top'   => $root_url.'/images/image0_9.png',
                'item_url_1'     => $root_url.'/images/image1_9.png',       
                'item_url_2'     => $root_url.'/images/image2_9.png',
                'item_url_3'     => $root_url.'/images/image3_9.png',
            ],
        ]);
    }
}

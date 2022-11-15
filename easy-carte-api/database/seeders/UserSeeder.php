<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insertOrIgnore([
            'full_name' => 'João Vital',
            'birth_date' => '2000-07-21',
            'email' => 'dev_produtor2@ticto.com.br',
            'password' => Hash::make('password')
        ]);
    }
}

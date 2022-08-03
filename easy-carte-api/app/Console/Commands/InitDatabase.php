<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class InitDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialize the database for the API';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $query = "CREATE DATABASE IF NOT EXISTS easy_carte";

        Config::set("database.connections.mysql.database", null);
        DB::purge('mysql');

        if (DB::unprepared($query)) {
            $this->info("\nComando executado com sucesso!\n");
            Config::set("database.connections.mysql.database", "easy_carte");
            DB::purge('mysql');
        } else {
            $this->error("\nErro ao criar o banco de dados!\n");
        }

        $this->call('migrate');
        $this->call('db:seed');
    }
}

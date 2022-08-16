<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RefreshDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Freshly migrates and seed the database';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->warn(
            'This will migrate the database fresh, and seed the default data again.'
        );
        $this->error('YOU WILL LOSE ALL YOUR DATA!!!');
        $choice = $this->choice('You really want to continue? y/N', ['No', 'Yes'], 0);

        if ($choice === 'No') {
            return $this->info('Nothing changed.');
        }

        $this->call('migrate:fresh');
        $this->call('db:seed');

        return $this->info('Database refreshed');
    }
}

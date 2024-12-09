<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;
    public function boot(): void
    {
        // Set the default timezone to GMT+7 (Asia/Bangkok)
        date_default_timezone_set('Asia/Bangkok');

        parent::boot(); // Ensure parent boot method is called to initialize the app
    }
}

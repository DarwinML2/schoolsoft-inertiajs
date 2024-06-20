<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Stancl\Tenancy\Resolvers\PathTenantResolver;



/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware('tenant')->prefix("{" . PathTenantResolver::$tenantParameterName . "}")->group(function () {

    Route::get('/', function () {
        return Inertia::render('Home', ['school', tenant()]);
    });

});

require __DIR__ . '/auth.php';
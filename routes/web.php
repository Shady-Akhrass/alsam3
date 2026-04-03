<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/Login');
});

Route::post('/login', function () {
    // Add your authentication logic here
    // For now, just redirect back with a success message
    return back()->with('status', 'Login attempt processed');
})->name('login');

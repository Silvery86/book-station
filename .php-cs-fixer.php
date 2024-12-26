<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$finder = Finder::create()
    ->in(__DIR__) // Adjust to your project directory
    ->name('*.php') // Target PHP files
    ->exclude('vendor') // Exclude vendor directory
    ->notPath('bootstrap/cache') // Exclude other directories if needed
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new Config())
    ->setRules([
        '@PSR12' => true, // Use PSR-12 coding standard
        'array_syntax' => ['syntax' => 'short'], // Use short array syntax
        'single_quote' => true, // Use single quotes for strings
        'no_unused_imports' => true, // Remove unused imports
        'ordered_imports' => ['sort_algorithm' => 'alpha'], // Sort imports alphabetically
        'phpdoc_align' => ['align' => 'vertical'], // Align PHPDoc comments
    ])
    ->setFinder($finder);

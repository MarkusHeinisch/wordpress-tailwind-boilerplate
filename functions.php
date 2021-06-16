<?php

add_action('wp_enqueue_scripts', function() {
	wp_enqueue_script("main", get_template_directory_uri() . "/assets/out/js/main.js", [], "1.0.0", true);
	wp_enqueue_style("main", get_template_directory_uri() . "/assets/out/css/main.css", [], "1.0.0", "all");
});
<?php
/**
 * @package sa-reviews
 * @version 1.0
 * 
 * Plugin name: Sterling Google Reviews
 * Author: Heigh10.com
 * Author URI: https://heigh10.com
 * Text domain: sa-reviews
 * Version: 1.0
 * Description: Fetching Google reviews from google using Javascript API and react. Use shortcode <code>[google_sa_reviews]</code>
 * 
 */

 if( ! defined( 'ABSPATH' ) ) wp_die("Action not allowed!"); // No direct access allowed.


class SAReviews {

    function __construct() {

            /**
            * Define Plugins Contants
            */
        define ( 'SA_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
        define ( 'SA_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

        /**
         * Loading Necessary Scripts
         */
        add_action( 'wp_enqueue_scripts', function () {
            wp_enqueue_script( 'sa-reviews', SA_URL . 'build/reviews.js', [ 'jquery', 'wp-element' ], "1.0.0", true );
        } );


        /**
         * Shortcode
         */
        add_shortcode( "google_sa_reviews", function(){

        ob_start();
        ?>
        <link rel="stylesheet" id="sa-reviews-css" href="<?php echo SA_URL ; ?>build/reviews.css?ver=1.0.0">
        <div id="reviews-app">
        <span class="animate-spin h-5 w-5 flex items-center justify-center">Loading...</span>
        </div>
        
        <?php
        
        $app = ob_get_contents();
        ob_end_clean();
        return $app;
        
    });

    }
}

new SAReviews();
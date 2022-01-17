<?php
/**
 * The template for displaying all single event
 */

get_header(); ?>

	    <main id="content">
			<div id="pictureTopBanner" style="background-image: url(<?php the_field('banner_picture'); ?>)">
				<div class="banner-text-area">
					<div class="banner-text-area-background"></div>
					<div class="container">
						<div class="banner-text"><h1><?php echo do_shortcode('[event]#_EVENTDATES[/event]'); ?></h1></div>
					</div>
				</div>
			</div>
			<div id="main-content">
				<div class="container">
					<diw class="row justify-content-center">
						<div class="col-3">
							<?php echo do_shortcode('[event]#_BOOKINGFORM[/event]'); ?>
						</div>
					</diw>
				</div>
                <?php echo do_shortcode('[event]#_BOOKINGPRESENT[/event]'); ?>
			</div>
		</main>

<?php get_footer();
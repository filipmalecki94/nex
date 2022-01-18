<?php
/**
 * The template for displaying all pages
 *
 * @package Nord_Experten
 */

get_header(); ?>

		<main id="content">
			<?php if ( is_front_page() ) : ?>
				<div id="carouselTopBanner" class="carousel slide carousel-fade" data-bs-ride="carousel">
  					<div class="carousel-inner">
    					<div class="carousel-item active" style="background-image: url(<?php the_field('banner_picture_1'); ?>)"></div>
    					<div class="carousel-item" style="background-image: url(<?php the_field('banner_picture_2'); ?>)"></div>
    					<div class="carousel-item" style="background-image: url(<?php the_field('banner_picture_3'); ?>)"></div>
						<div class="banner-text-area">
							<div class="banner-text-area-background"></div>
							<div class="container">
								<div class="banner-text"><?php the_field('welcome_text'); ?></div>
								<a href="ueber-uns" class="banner-text-button">Lernen Sie uns kennen</a>
							</div>
						</div>
  					</div>
				</div>
			<?php else: ?>
				<div id="pictureTopBanner" style="background-image: url(<?php the_field('banner_picture'); ?>)">
					<div class="banner-text-area">
						<div class="banner-text-area-background"></div>
						<div class="container">
							<div class="banner-text"><h1><?php the_field('banner_text'); ?></h1></div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<div id="main-content">
				<div class="container">
					<?php the_content(); ?>
				</div>
			</div>
		</main>

<?php get_footer();

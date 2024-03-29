<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

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
					<?php  if ( is_singular( 'presse' ) ) : ?>
						<section id="single-article">
							<div class="container">
								<div class="row">
									<div class="col-3 image">
										<img src="<?php the_field('article_picture'); ?>" alt="">
										<?php if( get_field('article_pdf') ): ?>
											<a class="pdf-file" href="<?php the_field('article_pdf'); ?>" target="_blank">PDF Herunterladen</a>
										<?php endif; ?>	
									</div>
									<div class="col-9 text">
										<p class="date-time">Veröffentlicht am <?php the_date(); ?>, <?php the_time(); ?></p>
										<h2><?php the_title() ?></h2>
										<?php the_field('article_text'); ?>
									</div>
								</div> 
							</div>
						</section>
					<?php endif ?>
					<?php  if ( is_singular( 'news' ) ) : ?>
						<section id="single-news">
							<div class="container">  
								<div class="row">
									<div class="col-3 image">
										<img src="<?php the_field('news_picture'); ?>" alt="">
									</div>
									<div class="col-9 text">
										<p class="date-time">Veröffentlicht am <?php the_date(); ?>, <?php the_time(); ?></p>
										<h2><?php the_title() ?></h2>
										<?php the_field('news_text'); ?>
									</div>
								</div>
							</div>
						</section>
					<?php endif ?>
					<?php  if ( is_singular( 'event' ) ) : ?>
						<section id="single-event">
							<div class="container">  
								EVENT
							</div>
						</section>
					<?php endif ?>
				</div>
			</div>

			<?php the_content(); ?>

		</main>

<?php get_footer();

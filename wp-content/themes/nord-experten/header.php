<?php
/**
 * The header for our theme
 *
 * @package Nord_Experten
 */

?>
<!doctype html>

<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<div id="page" class="site">
		<header id="header">
			<div id="contact-bar">
				<div class="container">
					<!-- the query -->
					<?php
            			$args = array(
							'post_type' => 'kontaktdetails'
            			);
						$the_query = new WP_Query( $args );
					?>
					<?php if ( $the_query->have_posts() ) : ?>
						<ul class="nav justify-content-end">
							<!-- the loop -->
							<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  								<li class="nav-item">
								  <a class="nav-link email" href="mailto:<?php the_field('e-mail'); ?>"><span class="icon"></span><span class="text"><?php the_field('e-mail'); ?></span></a>
  								</li>
  								<li class="nav-item">
    								<a class="nav-link phone" href="tel:<?php the_field('phone'); ?>"><span class="icon"></span><span class="text"><?php the_field('phone'); ?></span></a>
  								</li>
  								<li class="nav-item">
    								<a class="nav-link xing" href="<?php the_field('xing'); ?>" target="_blink"><span class="icon"></span></a>
  								</li>
								<li class="nav-item">
    								<a class="nav-link facebook" href="<?php the_field('facebook'); ?>" target="_blink"><span class="icon"></span></a>
  								</li>
								<li class="nav-item">
    								<a class="nav-link linkedin" href="<?php the_field('linkedin'); ?>" target="_blink"><span class="icon"></span></a>
  								</li>
								<li class="nav-item">
    								<a class="nav-link instagram" href="<?php the_field('instagram'); ?>" target="_blink"><span class="icon"></span></a>
  								</li>
							<?php endwhile; ?>
            				<!-- end of the loop -->
							<?php wp_reset_postdata(); ?> 
						</ul>
					<?php endif; ?>
				</div>
			</div>
			<nav class="navbar navbar-expand-lg justify-content-end">
				<div class="container align-items-end">
					<?php the_custom_logo();?>
  					<button class="navbar-toggler ms-auto align-self-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    					<span class="navbar-toggler-icon"></span>
  					</button>
  					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<?php
							wp_nav_menu( $args = array(
								'theme_location'	=> 'top-menu',
								'container'			=>  false,
								'menu_class'		=> 'navbar-nav ms-auto',
								'items_wrap'        => '<ul class="%2$s">%3$s</ul>',
							) );
						?>
  					</div>
				</nav>
			</div>
		</header>
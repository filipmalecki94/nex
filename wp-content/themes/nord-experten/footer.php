<?php
/**
 * The template for displaying the footer
 *
 * @package Nord_Experten
 */

?>

		<footer id="footer">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-md-6 contact">
						<h3>Kontakt</h3>
						<div class="line"></div>
						<!-- the query -->
						<?php
            				$args = array(
								'post_type' => 'kontaktdetails'
            				);
							$the_query = new WP_Query( $args );
						?>
						<?php if ( $the_query->have_posts() ) : ?>
							<!-- the loop -->
							<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
								<address>
									<p><?php bloginfo( 'name' ); ?></p>
									<p><?php bloginfo( 'description' ); ?></p>
									<p>Herrn&nbsp;<?php the_field('represented_by'); ?></p>
										<a class="address" href="https://www.google.de/maps/place/<?php the_field('street'); ?>+<?php the_field('number'); ?>,+<?php the_field('postcode'); ?>+<?php the_field('place'); ?>" target="_blank">
											<p><?php the_field('street'); ?>&nbsp;<?php the_field('number'); ?></p>
											<p><?php the_field('postcode'); ?>&nbsp;<?php the_field('place'); ?></p>
									</a>
								</address>
							<?php endwhile; ?>
            				<!-- end of the loop -->
							<?php wp_reset_postdata(); ?>
						<?php endif; ?>	 	
					</div>
					<div class="col-xl-3 col-md-6 about">
						<h3>Über uns</h3>
						<div class="line"></div>
						<nav class="footer-navbar-left">
							<?php
								wp_nav_menu( $args = array(
									'theme_location'	=> 'bottom-menu-left',
									'container'			=>  false,
									'menu_class'		=> 'nav',
									'items_wrap'        => '<ul class="%2$s">%3$s</ul>',
								) );
							?>
						</nav>
					</div>
					<div class="col-xl-3 col-md-6 info">
						<h3>Infos & Presse</h3>
						<div class="line"></div>
						<nav class="footer-navbar-right">
							<?php
								wp_nav_menu( $args = array(
									'theme_location'	=> 'bottom-menu-right',
									'container'			=>  false,
									'menu_class'		=> 'nav',
									'items_wrap'        => '<ul class="%2$s">%3$s</ul>',
								) );
							?>
						</nav>
					</div>
					<div class="col-xl-3 col-md-6 form">
						<h3>Kontaktieren sie uns</h3>
						<div class="line"></div>
						<?php echo do_shortcode( '[contact-form-7 id="40" title="Kontaktformular_Fusszeile"]' ); ?>
					</div>
				</div>
			</div>
		</footer>

<?php wp_footer(); ?>

</body>

</html>
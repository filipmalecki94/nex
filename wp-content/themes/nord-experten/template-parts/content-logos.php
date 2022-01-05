<div id="logos">
    <!-- the query -->
    <?php
        $args = array(
			'post_type' => 'logos' 
        );
		$the_query = new WP_Query( $args );
	?>
	<?php if ( $the_query->have_posts() ) : ?>
        <div class="row align-items-center justify-content-between">
            <!-- the loop -->
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <div class="col-1 logo-pic">
                    <a href="<?php the_field('logo_website'); ?>" target="_blank"><img src="<?php the_field('logo_picture'); ?>" alt="<?php $image_url = get_field('logo_picture'); $image_id = pippin_get_image_id($image_url); $image_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true ); echo $image_alt; ?>"></a>
                </div>
            <?php endwhile; ?>
            <!-- end of the loop -->
			<?php wp_reset_postdata(); ?>
        </div>
    <?php endif; ?>	
</div>
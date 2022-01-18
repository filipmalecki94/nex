<div id="representation-box">
    <div class="box-header">
        <h3>Unser Vorstand</h3>
    </div>
    <!-- the query -->
    <?php
        $args = array(
			'post_type' => 'kontaktdetails'
        );
		$the_query = new WP_Query( $args );
	?>
	<?php if ( $the_query->have_posts() ) : ?>
        <div class="box-content">
            <!-- the loop -->
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <div class="row president">
                    <div class="col-3 photo">
                        <a href="<?php echo get_home_url(); ?>/midglied/thorsten-uebler/"><img src="<?php the_field('president_photo'); ?>" alt=""></a>
                    </div>
                    <div class="col-9 name align-self-center">
                        <a href="<?php echo get_home_url(); ?>/midglied/thorsten-uebler/"><?php the_field('president_name'); ?></a>
                        <p>Präsident</p>
                    </div>
                </div>
                <div class="row deputy-president">
                    <div class="col-3 photo">
                        <a href="<?php echo get_home_url(); ?>/midglied/michael-watzlawik/"><img src="<?php the_field('deputy_president_photo'); ?>" alt=""></a>   
                    </div>
                    <div class="col-9 name align-self-center">
                        <a href="<?php echo get_home_url(); ?>/midglied/michael-watzlawik/"><?php the_field('deputy_president_name'); ?></a>
                        <p>Stellvertretender Präsident</p>
                    </div>
                </div>
            <?php endwhile; ?>
            <!-- end of the loop -->
			<?php wp_reset_postdata(); ?>
        </div>
        <div class="box-button">
            <a href="kontakt">Kontakt</a>
        </div>
    <?php endif; ?>	 
</div>
<div id="contact-container">
    <div class="row justify-content-between">
        <div class="col-7 contact-form">
            <?php echo do_shortcode( '[contact-form-7 id="1301" title="Kontaktformular"]' ); ?>
        </div>
        <!-- the query -->
        <?php
            $args = array(
			    'post_type' => 'kontaktdetails' 
            );
		    $the_query = new WP_Query( $args );
	    ?>
        <?php if ( $the_query->have_posts() ) : ?>
            <div class="col-4 contact-boxes">
                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <div class="address-phone-mail">
                        <div class="box-header">
                            <h2>Kontakt</h2>
                        </div>
                        <p class="main-name"><?php bloginfo( 'name' ); ?></p>
                        <p class="sub-name"><?php bloginfo( 'description' ); ?></p>
                        <p class="representer-name">Herrn <a href="<?php echo get_home_url(); ?>/midglied/lars-schapke/"><?php the_field('represented_by'); ?></a></p>
                        <a class="address" href="https://www.google.de/maps/place/<?php the_field('meeting_place_street'); ?>+<?php the_field('meeting_place_number'); ?>,+<?php the_field('meeting_place_postcode'); ?>+<?php the_field('meeting_place_place'); ?>" target="_blank">
                            <address>
                                <?php the_field('meeting_place_street'); ?>&nbsp;<?php the_field('meeting_place_number'); ?><br>
                                <?php the_field('meeting_place_postcode'); ?>&nbsp;<?php the_field('meeting_place_place'); ?>
                            </address>
                        </a>
                        <p class="contact-mail">E-Mail Kontakt: <a href="mailto:<?php the_field('e-mail'); ?>"><?php the_field('e-mail'); ?></a></p>
                        <p class="contact-phone">Rufen Sie uns an: <a href="tel:<?php the_field('phone'); ?>"><?php the_field('phone'); ?></a></p>
                    </div>
                    <div class="management">
                        <div class="box-header">
                            <h2>Unser Vorstand</h2>
                        </div>
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
                    </div>
                <?php endwhile; ?>
                <!-- end of the loop -->
			    <?php wp_reset_postdata(); ?>
            </div>
        <?php endif; ?>	 
    </div>
</div>
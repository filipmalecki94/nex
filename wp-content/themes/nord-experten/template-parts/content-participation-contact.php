<div id="participation-contact-box">
    <div class="box-header">
        <h3>Teilnahme & Kontakt</h3>
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
                <div class="row justify-content-center">
                    <div class="col-2 icon-place"></div>
                    <div class="col-xl-7 col-9 text">
                        <p class="place-name"><?php the_field('meeting_place_name'); ?></p>
                        <a class="address" href="https://www.google.de/maps/place/<?php the_field('meeting_place_street'); ?>+<?php the_field('meeting_place_number'); ?>,+<?php the_field('meeting_place_postcode'); ?>+<?php the_field('meeting_place_place'); ?>" target="_blank">
                            <address>
                                <?php the_field('meeting_place_street'); ?>&nbsp;<?php the_field('meeting_place_number'); ?><br>
                                <?php the_field('meeting_place_postcode'); ?>&nbsp;<?php the_field('meeting_place_place'); ?>
                            </address>
                        </a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-2 icon-hours"></div>
                    <div class="col-xl-7 col-9 text">
                        <p class="date">
                            Mittwoch,&nbsp;
                            <?php if( get_field('show_date') == 'autom' ) : ?>
                                <span id="autoDate"></span>
                            <?php endif; ?>
                            <?php if( get_field('show_date') == 'manual' ) : ?>
                                <?php the_field('meeting_date'); ?>
                            <?php endif; ?>
                            &nbsp;von</p>
                        <p class="hours"><?php the_field('meeting_start_time'); ?>&nbsp;Uhr&nbsp;bis&nbsp;ca.&nbsp;<?php the_field('meeting_end_time'); ?>&nbsp;Uhr</p>
                    </div>
                </div>
                <a class="contact-mail" href="mailto:<?php the_field('e-mail'); ?>"><?php the_field('e-mail'); ?></a>
            <?php endwhile; ?>
            <!-- end of the loop -->
			<?php wp_reset_postdata(); ?>
        </div>
        <div class="box-button">
            <button type="button" class="reg-button" data-bs-toggle="modal" data-bs-target="#meeting_date">Jetzt Anmelden</button>
        </div>
    <?php endif; ?>	 
</div>
<?php if( !current_user_can('administrator') && !current_user_can('contributor')) : ?>
    <div class="modal fade" id="meeting_date" tabindex="-1" aria-labelledby="meeting-date-label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="meeting-date-label"> Wir freuen uns auf Ihren Besuch</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <?php echo do_shortcode('[fullcalendar type="event" category="Treffen"]'); ?>
                </div>
            </div>
        </div>
    </div>    
<?php endif; ?>	
<div id="events-counter">
    <div class="background"></div>
    <div class="container">
        <div class="header">
            <h2>Zahlen. <span class="red">Daten. </span>Fakten.</h2>
        </div>
        <h3>Seit Gründung im Jahr 2012 bis heute:</h3>
        <!-- the query -->
        <?php
            $args = array(
				'post_type' => 'zahlen-daten-fakten'
            );
			$the_query = new WP_Query( $args );
		?>
        <?php if ( $the_query->have_posts() ) : ?>
        <!-- the loop -->
        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <div class="row justify-content-between">
            <div class="col-lg-2 col-sm-5 counter-box">
                <p class="counter-name">Empfehlungen</p>
                <p class="counter-value" data-count="<?php the_field('recommendations'); ?>">0</p>
            </div>
            <div class="col-lg-2 col-sm-5 counter-box">
                <p class="counter-name">Gäste</p>
                <p class="counter-value" data-count="<?php the_field('guests'); ?>">0</p>
            </div>
            <div class="col-lg-5 col-sm-5 counter-box red">
                <p class="counter-name">Umsätze</p>
                <p class="block-counter">
                    <span class="counter-value" data-count="<?php the_field('sales_million'); ?>">0</span>.
                    <span class="counter-value" data-count="<?php the_field('sales_thousand'); ?>">0</span>.
                    <span class="counter-value"
                        data-count="<?php the_field('sales_hundred'); ?>">0</span>,&nbsp;00&nbsp;€
                </p>
            </div>
            <div class="col-lg-2 col-sm-5 counter-box">
                <p class="counter-name">Mitglieder</p>
                <p class="counter-value" data-count="<?php the_field('members'); ?>">0</p>
            </div>
        </div>
        <div class="bottom-line">
            <p class="bottom-text">Wert einer
                Empfehlung&nbsp;=&nbsp;<?php the_field('recommendation_value'); ?>,00&nbsp;€</p>
        </div>
        <?php endwhile; ?>
        <!-- end of the loop -->
        <?php wp_reset_postdata(); ?>
        <?php endif; ?>
    </div>
</div>
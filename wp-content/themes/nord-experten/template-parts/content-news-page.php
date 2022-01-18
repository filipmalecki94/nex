<div id="news-page">
    <div class="container">
        <!-- the query -->
        <?php
            $args = array(
			    'post_type' => 'news',
                'orderby'           => 'date',
                'order'             => 'DESC',
            );
		    $the_query = new WP_Query( $args );
	    ?>
	    <?php if ( $the_query->have_posts() ) : ?>
            <div class="row justify-content-start">
                <!-- the loop -->
			    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <div class="col-lg-3 col-sm-6 single-news">
                        <div class="news-card">
                            <a href="<?php the_permalink(); ?>">
                                <div class="news-pic" style="background-image: url(<?php the_field('news_picture'); ?>)"></div>
                            </a>
                            <div class="news-text-box">
                                <a href="<?php the_permalink(); ?>"><h2 class="news-title"><?php the_title(); ?></h2></a>
                                <?php showBeforeMore(get_field('news_text')); ?>
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
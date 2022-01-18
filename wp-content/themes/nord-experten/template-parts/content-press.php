<div id="press">
    <div class="container">
        <!-- the query -->
        <?php
            $args = array(
			    'post_type' => 'presse'
            );
		    $the_query = new WP_Query( $args );
	    ?>
	    <?php if ( $the_query->have_posts() ) : ?>
            <div class="row justify-content-start">
                <!-- the loop -->
			    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <div class="col-lg-3 col-sm-6 single-article">
                        <div class="article-card">
                            <a href="<?php the_permalink(); ?>">
                                <div class="article-pic" style="background-image: url(<?php the_field('article_picture'); ?>)"></div>
                            </a>
                            <div class="article-text-box">
                                <a href="<?php the_permalink(); ?>"><h2 class="article-title"><?php the_title(); ?></h2></a>
                                <?php showBeforeMore(get_field('article_text')); ?>
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
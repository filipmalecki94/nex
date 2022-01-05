<?php if( !current_user_can('administrator') && !current_user_can('contributor')) : ?>
    <div id="current-lectures">
        <?php echo do_shortcode('[events_list limit="3" category="Vortrag"]'); ?>
    </div>
<?php endif; ?>
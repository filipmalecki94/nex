<?php
/**
 * Nord Experten functions and definitions
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'nord_experten_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function nord_experten_setup() {

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
	        'top-menu' => 'Kopfzeilenmenü',
	        'bottom-menu-left' => 'Fußzeilenmenü links',
			'bottom-menu-right' => 'Fußzeilenmenü rechts'
        ) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'nord_experten_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'nord_experten_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */
function nord_experten_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'nord_experten_content_width', 1200 );
}
add_action( 'after_setup_theme', 'nord_experten_content_width', 0 );

/**
 * Register widget area.
 */
function nord_experten_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'nord-experten' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'nord-experten' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'nord_experten_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function nord_experten_scripts() {
	/*
	 * Styles
	 */
	//jQuery
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://code.jquery.com/jquery-3.6.0.min.js', false, null, true);
	wp_enqueue_script('jquery');
	//Bootstrap
	wp_enqueue_style( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css' );
	//Main
	wp_enqueue_style( 'project-name-style', get_stylesheet_uri(), array(), _S_VERSION );
	/*
	 * Scripts
	 */
	//Popper
	wp_enqueue_script( 'popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js', array('jquery'), null, true );
	//Bootstrap
	wp_enqueue_script( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js', array('jquery'), null, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'nord_experten_scripts' );

/*
* Script for selected pages only
*/
// 
function selected_pages_scripts() {
    if ( is_front_page() || is_page( 'ueber-uns' ) ) {
		//Meeting date
		wp_enqueue_script( 'date', get_template_directory_uri() . '/js/date.js', array('jquery'), null, true );
		//Counter
		wp_enqueue_script('counter', get_template_directory_uri() . '/js/counter.js', array('jquery'), null, true);
    }
	if ( is_page( 'termine' ) ) {
		//Meeting date
		wp_enqueue_script( 'date', get_template_directory_uri() . '/js/date.js', array('jquery'), null, true );
    }
  }
add_action('wp_enqueue_scripts', 'selected_pages_scripts');

/**
 * Register post type
 */
function codex_custom_init() {
	//Contact details
	$args = array(
        'public'     => true,
        'label'      => 'Kontaktdetails',
        'supports'   => array( 'title' )
    );
	register_post_type( 'kontaktdetails', $args );
	//News
	$args = array(
        'public'     => true,
        'label'      => 'News',
        'supports'   => array( 'title' )
    );
	register_post_type( 'news', $args );
	//Facts
	$args = array(
        'public'     => true,
        'label'      => 'Zahlen Daten Fakten',
        'supports'   => array( 'title' )
    );
	register_post_type( 'zahlen-daten-fakten', $args );
}
add_action( 'init', 'codex_custom_init' );

/*
* Register shortcodes
*/
//Participation and contact
function participation_contact_shortcode($attr) {
	ob_start();
	get_template_part( 'template-parts/content', 'participation-contact' );
	return ob_get_clean();
}
add_shortcode('participation_contact', 'participation_contact_shortcode');
//Representation
function representation_shortcode($attr) {
	ob_start();
	get_template_part( 'template-parts/content', 'representation' );
	return ob_get_clean();
}
add_shortcode('representation', 'representation_shortcode');
//News line
function news_line_shortcode($attr) {
	ob_start();
	get_template_part( 'template-parts/content', 'news-line' );
	return ob_get_clean();
}
add_shortcode('news_line', 'news_line_shortcode');
//Events counter
function events_counter_shortcode($attr) {
	ob_start();
	get_template_part( 'template-parts/content', 'events-counter' );
	return ob_get_clean();
}
add_shortcode('events_counter', 'events_counter_shortcode');
//Current lectures
function current_lectures_shortcode($attr) {
	ob_start();
	get_template_part( 'template-parts/content', 'current-lectures' );
	return ob_get_clean();
}
add_shortcode('current_lectures', 'current_lectures_shortcode');

/*
* Retrieves the attachment ID from the file URL
*/
function pippin_get_image_id($image_url) {
    global $wpdb;
    $attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url )); 
    return $attachment[0]; 
}

/**
* Switch Show text before more
*/
function showBeforeMore($fullText){
    if(@strpos($fullText, '<!--more-->')){
        $morePos = strpos($fullText, '<!--more-->');
        print substr($fullText,0,$morePos);
    } else {
        print $fullText;
    }
}


function schedule_email_before(int $datetime, int $eventId, array $args) {
    wp_schedule_single_event($datetime, 'send_email_before', array_merge(['event_id' => $eventId], $args));
}

function delete_crons_by_event_id(int $eventId)
{
    $crons = _get_cron_array();

    $cronsToSet = [];
    foreach ( $crons as $timestamp => $cron ) {
        if(isset($cron['send_email_before'])) {
            foreach ($cron['send_email_before'] as $md5key => $sendEmailBefore) {
                if($sendEmailBefore['args']['event_id'] !== $eventId) {
                    $cronsToSet[$timestamp] = $cron;
                }
            }
        } else {
            $cronsToSet[$timestamp] = $cron;
        }
    }
    _set_cron_array( $cronsToSet, true );
}

function send_email_before(int $eventId, array $recipients, string $subject, string $body, array $attachments = []) {
    $m = new EM_Mailer();
    $att = [];

    if ($attachments['summary']['csv'] ?? false) {
        $att[] = generate_summary_csv($eventId);
    }

    if ($attachments['booking_list']['csv'] ?? false) {
        $att[] = generate_booking_list_csv($eventId);
    }

    if ($attachments['booking_list']['pdf'] ?? false) {
        $att[] = generate_booking_list_pdf('booking_list_'.$eventId, $eventId);
    }

    foreach ($recipients as $recipient) {
        $m->send($subject, $body, $recipient, $att);
    }
}
add_action('send_email_before','send_email_before',10,5);

function generate_summary_csv(int $eventId): string
{
    global $wpdb;

    $data = [[
        'Event ID',
        'Person ID',
        'Name',
        'Date',
        'Registered',
        'Present',
    ]];

    $EM_Event = em_get_event($eventId);
    $firstDayMonth = date('Y-m-01', $EM_Event->start);
    $lastDayMonth = date('Y-m-t', $EM_Event->start);

    $Table_Name   = $wpdb->prefix.'em_bookings';
    $sql_query    = $wpdb->prepare("
                        SELECT 
                               bookings.event_id, 
                               bookings.person_id, 
                               users.display_name, 
                               events.event_start, 
                               IF(bookings.person_id > 0, TRUE, FALSE) as registered, 
                               bookings.booking_present,
                               bookings.booking_status
                        FROM nex_em_bookings as bookings
                        LEFT JOIN nex_em_events events on bookings.event_id = events.event_id
                        LEFT JOIN nex_users users on bookings.person_id = users.ID
                        WHERE events.event_start >= %s AND events.event_start <= %s
                        ORDER BY event_start, booking_status",
        $firstDayMonth, $lastDayMonth);
    $rows = $wpdb->get_results($sql_query, ARRAY_A);

    $approved = [];
    foreach ($rows as $row) {
        if ($row['booking_status'] == 1 && !isset($approved[$row['event_id']][$row['person_id']]) ) {
            $approved[$row['event_id']][$row['person_id']] = [
                'event_id' => $row['event_id'],
                'person_id' => $row['person_id'],
                'name' => $row['display_name'],
                'date' => $row['event_start'],
                'registered' => $row['registered'],
                'present' => $row['booking_present'] ?? $row['booking_status'] != 1 ?? 0
            ];
        }
    }

    $cancelled = [];
    foreach ($rows as $row) {
        if ($row['booking_status'] != 1 && !isset($cancelled[$row['event_id']][$row['person_id']]) && !isset($approved[$row['event_id']][$row['person_id']])) {
            $cancelled[$row['event_id']][$row['person_id']] = [
                'event_id' => $row['event_id'],
                'person_id' => $row['person_id'],
                'name' => $row['display_name'],
                'date' => $row['event_start'],
                'registered' => $row['registered'],
                'present' => $row['booking_present'] ?? $row['booking_status'] != 1 ?? 0
            ];
        }
    }

    foreach ($approved as $event_id => $bookings) {
        foreach ($bookings as $personId => $booking) {
            $data[] = $booking;
        }
    }
    foreach ($cancelled as $event_id => $bookings) {
        foreach ($bookings as $personId => $booking) {
            $data[] = $booking;
        }
    }

    return export_data_to_csv('summary_' . date('Y_m', $EM_Event->start), $data);
}

function generate_booking_list_csv(int $eventId): string
{
    global $wpdb;

    $data = [[
        'Person ID',
        'Name',
        'Status',
        'Registered',
        'Present',
    ]];

    $EM_Event = em_get_event($eventId);

    $Table_Name   = $wpdb->prefix.'em_bookings';
    $sql_query    = $wpdb->prepare("
                        SELECT 
                               bookings.event_id, 
                               bookings.person_id, 
                               users.display_name, 
                               events.event_start, 
                               IF(bookings.person_id > 0, TRUE, FALSE) as registered, 
                               bookings.booking_present,
                               bookings.booking_status
                        FROM nex_em_bookings as bookings
                        LEFT JOIN nex_em_events events on bookings.event_id = events.event_id
                        LEFT JOIN nex_users users on bookings.person_id = users.ID
                        WHERE bookings.event_id = %d
                        ORDER BY users.display_name", $eventId);
    $rows = $wpdb->get_results($sql_query, ARRAY_A);
    $EMpty_Booking = new EM_Booking();
    $approved = [];
    foreach ($rows as $row) {
        if ($row['booking_status'] == 1 && !isset($approved[$row['event_id']][$row['person_id']]) ) {
            $approved[$row['event_id']][$row['person_id']] = [
                'person_id' => $row['person_id'],
                'name' => $row['display_name'],
                'status' => $EMpty_Booking->status_array[$row['booking_status']],
                'registered' => $row['registered'],
                'present' => $row['booking_present'] ?? $row['booking_status'] != 1 ?? 0
            ];
        }
    }

    $cancelled = [];
    foreach ($rows as $row) {
        if ($row['booking_status'] != 1 && !isset($cancelled[$row['event_id']][$row['person_id']]) && !isset($approved[$row['event_id']][$row['person_id']])) {
            $cancelled[$row['event_id']][$row['person_id']] = [
                'person_id' => $row['person_id'],
                'name' => $row['display_name'],
                'status' => $EMpty_Booking->status_array[$row['booking_status']],
                'registered' => $row['registered'],
                'present' => $row['booking_present'] ?? $row['booking_status'] != 1 ?? 0
            ];
        }
    }

    foreach ($approved as $event_id => $bookings) {
        foreach ($bookings as $personId => $booking) {
            $data[] = $booking;
        }
    }
    foreach ($cancelled as $event_id => $bookings) {
        foreach ($bookings as $personId => $booking) {
            $data[] = $booking;
        }
    }

    return export_data_to_csv('booking_list_' . $EM_Event->event_id, $data);
}

function export_data_to_csv(string $filename, array $data = []): string
{
    $upload_dir = wp_upload_dir();

    ob_end_clean();

    $dir = $upload_dir['basedir'] . '/csv/'.$filename.'.csv';

    $fp = fopen($dir, 'w');
    foreach($data as $record)
    {
        $outputRecord = $record;
        fputcsv($fp, $outputRecord);
    }

    fclose( $fp );

    return $dir;
}

function generate_booking_list_pdf(string $filename, int $eventId): string
{
    $upload_dir = wp_upload_dir();
    $dir = $upload_dir['basedir'] . '/pdf/'.$filename.'.pdf';
    $dompdf = new DOMPDF();
    $dompdf->load_html(do_shortcode('[event]#_BOOKINGPRESENT[/event]'));
    $dompdf->set_paper('A4', 'landscape');
    $dompdf->render();
    $output = $dompdf->output();
    file_put_contents($dir, $output);

    return $dir;
}
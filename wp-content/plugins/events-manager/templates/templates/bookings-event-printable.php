<?php
/*
 * This page displays a printable view of bookings for a single event.
 * You can override the default display settings pages by copying this file to yourthemefolder/plugins/events-manager/templates/ and modifying it however you need.
 * Here you can assume that $EM_Event is globally available with the right EM_Event object.
 */
global $EM_Event;

$bookings = $EM_Event->get_bookings()->bookings;

$approved = [];
foreach ($EM_Event->get_bookings()->bookings as $EM_Booking) {
    if ($EM_Booking->booking_status == 1 && !isset($approved[$EM_Booking->person_id])) {
        $approved[$EM_Booking->person_id] = $EM_Booking;
    }
}

$cancelled = [];
foreach ($EM_Event->get_bookings()->bookings as $EM_Booking) {
    if ($EM_Booking->booking_status != 1 && !isset($cancelled[$EM_Booking->person_id]) && !isset($approved[$EM_Booking->person_id])) {
        $cancelled[$EM_Booking->person_id] = $EM_Booking;
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title><?= sprintf(__('Bookings for %s','events-manager'), $EM_Event->name); ?></title>
        <link rel="stylesheet" href="<?= EM_DIR_URI; ?>includes/css/events_manager.css" type="text/css" media="screen" />
    </head>
    <body id="printable">
        <div id="container">
            <h1><?= sprintf(__('Bookings for %s', 'events-manager'), $EM_Event->name); ?></h1>
            <p><?= $EM_Event->output("#d #M #Y"); ?></p>
            <p><?= $EM_Event->output("#_LOCATION, #_ADDRESS, #_TOWN"); ?></p>
            <h2><?php _e('Bookings data', 'events-manager'); ?></h2>
            <table id="bookings-table">
                <tr>
                    <th scope='col'><?php _e('Name', 'events-manager') ?></th>
                    <th scope='col'><?php _e('E-mail', 'events-manager') ?></th>
                    <th scope='col'><?php _e('Status', 'events-manager') ?></th>
                    <th scope='col'><?php _e('Present', 'events-manager') ?></th>
                </tr>
                <?php foreach (array_merge($approved,$cancelled) as $EM_Booking) : ?>
                        <tr>
                            <td><?= $EM_Booking->person->get_name() ?></td>
                            <td><?= $EM_Booking->person->user_email ?></td>
                            <td><?= $EM_Booking->get_status() ?></td>
                            <td style="text-align: center"><?= $EM_Booking->booking_status == 1 && $EM_Booking->booking_present ? 'x' : null ?></td>
                        </tr>
                    <?php
                endforeach; ?>
                <tr id="booked-spaces">
                    <td><?= PHP_EOL ?></td>
                    <td><?= PHP_EOL ?></td>
                    <td><?= _e('Booked', 'events-manager') ?></td>
                    <td><?= $EM_Event->get_bookings()->get_booked_spaces() . '/' . ($EM_Event->get_bookings()->get_spaces()) ?></td>
                </tr>
                <tr>
                    <td><?= PHP_EOL ?></td>
                    <td><?= PHP_EOL ?></td>
                    <td><?= _e('Presents', 'events-manager') ?></td>
                    <td><?= $EM_Event->get_bookings()->get_present_spaces(true) . '/' . $EM_Event->get_bookings()->get_booked_spaces()?></td>
                </tr>
            </table>
        </div>
    </body>
</html>
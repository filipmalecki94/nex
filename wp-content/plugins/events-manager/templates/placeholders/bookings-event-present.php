<?php
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
<div class="container">
    <form class="em-booking-present row justify-content-center" name='booking-present' method='post'  action='<?php echo apply_filters('em_booking_form_action_url',''); ?>#em-booking'>
        <h1><?= sprintf(__('Bookings for %s', 'events-manager'), $EM_Event->name) ?></h1>
        <p><?= $EM_Event->output("#d #M #Y"); ?></p>
        <p><?= $EM_Event->output("#_LOCATION, #_ADDRESS, #_TOWN"); ?></p>
        <h2><?php _e('Bookings data', 'events-manager'); ?></h2>
        <input type='hidden' name='action' value='present_save'/>
        <input type='hidden' name='event_id' value='<?php echo $EM_Event->get_bookings()->event_id; ?>'/>
        <input type='hidden' name='_wpnonce' value='<?php echo wp_create_nonce('present_save'); ?>'/>
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
                    <td style="justify-content: center;display: flex;">
                        <input type="checkbox"
                               name="fields[<?php echo $EM_Booking->booking_id; ?>][present]"
                               value="1"
                            <?= $EM_Booking->booking_status != 1 ? 'disabled' : null ?>
                            <?= $EM_Booking->booking_status == 1 && $EM_Booking->booking_present ? 'checked' : null ?>></td>
                </tr>
            <?php
            endforeach; ?>
        </table>
        <input type="submit" name="submit" class="em-booking-submit" id="em-booking-submit" value="Save" />
    </form>
</div>
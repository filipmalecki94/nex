<?php
global $EM_Event, $post;
$hours_format = em_get_hour_format();
$required = apply_filters('em_required_html', '<i>*</i>');
$EM_Event_Array = $EM_Event->to_array();
$arr = array_merge($EM_Event_Array['event_email_before'] ?? [], array_fill(0,10 - count($EM_Event_Array['event_email_before'] ?? []),[]));
?>
    <div class="email-before-container">
        <?php foreach ($arr as $id => $item): ?>
            <div class="event-email-before" id="email-before_<?= $id ?>" <?php if(!(($arr[$id-1]['active'] ?? false) || $id === 0)){echo 'style="display: none"';}?>>
                <div class="event-email-before-header" style="display: flex;justify-content: space-between;align-items: center;">
                    <h4>Email Before #<?= ($id + 1) ?></h4>
                    <a class="enable-event-email-before button button-primary button-large" ><?= ((!($item['active'] ?? 0)) )? 'Enable' : 'Disable'?></a>
                </div>
                <div <?php if((!($item['active'] ?? 0))) {echo 'style="display: none"';} ?> class="event-email-before-wrapper">
                    <input type="hidden" name="event_email_before_active_<?= $id ?>" <?= isset($item['active']) ?  'value="'.(empty($item['active'])?(int)($id === 0):$item['active']).'"' : 'value="0"'  ?>>
                    <div class="email-before-to">
                        <label>Send to</label>
                        <input type="text" name="event_email_before_to_<?= $id ?>" <?= isset($item['to']) ?  'value="'.$item['to'].'"' : ''  ?>>
                    </div>
                    <div class="email-before-subject" style="margin-top:10px;">
                        <label>Subject</label>
                        <input type="text" name="event_email_before_subject_<?= $id ?>" <?= isset($item['subject']) ?  'value="'.$item['subject'].'"' : ''  ?>>
                    </div>
                    <div class="email-before-attach-booking-list" style="margin-top:10px;">
                        <label>Attach booking list</label>
                        <br>
                        <label for="event_email_before_pdf_attach_booking_list_<?= $id ?>">PDF</label>
                        <input type="checkbox"
                               value="1"
                               name="event_email_before_pdf_attach_booking_list_<?= $id ?>"
                            <?= isset($item['pdf_attach_booking_list']) && $item['pdf_attach_booking_list'] == 1 ?  'checked' : null  ?>
                        >
                        <label for="event_email_before_csv_attach_booking_list_<?= $id ?>">CSV</label>
                        <input type="checkbox"
                               value="1"
                               name="event_email_before_csv_attach_booking_list_<?= $id ?>"
                            <?= isset($item['csv_attach_booking_list']) && $item['csv_attach_booking_list'] == 1 ?  'checked' : null  ?>
                        >
                    </div>
                    <div class="email-before-attach-summary" style="margin-top:10px;">
                        <label>Attach monthly summary</label>
                        <br>
                        <label for="event_email_before_pdf_attach_summary_<?= $id ?>">PDF</label>
                        <input type="checkbox"
                               value="1"
                               name="event_email_before_pdf_attach_summary_<?= $id ?>"
                            <?= isset($item['pdf_attach_summary']) && $item['pdf_attach_summary'] == 1 ?  'checked' : null  ?>
                        >
                        <label for="event_email_before_csv_attach_summary_<?= $id ?>">CSV</label>
                        <input type="checkbox"
                               value="1"
                               name="event_email_before_csv_attach_summary_<?= $id ?>"
                            <?= isset($item['csv_attach_summary']) && $item['csv_attach_summary'] == 1 ?  'checked' : null  ?>
                        >
                    </div>
                    <div class="email-before-content">
                        <label>Content</label>
                        <?php wp_editor($item['content'] ?? null,'event_email_before_content_'.$id); ?>
                    </div>
                    <?php if(false)://disabled ?>
                    <div class="email-before-date-time" >
                        <input type="hidden" name="_emnonce" value="<?php echo wp_create_nonce('edit_event'); ?>"/>
                        <div class="event-form-when" id="em-form-when"  style="display: flex;">
                            <p class="em-date-range">
                                <input class="em-date-start em-date-input-loc" type="text"/>
                                <input class="em-date-input" type="hidden" name="event_email_before_date_<?= $id ?>"
                                    <?= isset($item['date']) ?  'value="'.$EM_Event->email_before(false, $id)->getDate().'"' : ''  ?>/>
                            </p>
                            <p class="em-time-range">
                                <span class="em-event-text"><?php _e('Event starts at', 'events-manager'); ?></span>
                                <input class="em-time-input em-time-start" type="text" size="8" maxlength="8"
                                       name="event_email_before_time_<?= $id ?>"
                                    <?= isset($item['time']) ?  'value="'.$EM_Event->email_before(false, $id)->format($hours_format).'"' : ''  ?>/>
                            </p>
                        </div>
                    </div>
                    <?php endif; ?>
                    <label>When : </label>
                    <span class="em-booking-date-recurring">
                        <input type="text" name="event_email_before_days_<?= $id ?>" size="3" <?= isset($item['days']) ?  'value="'.$item['days'].'"' : ''  ?> />
                        <?php _e('day(s)','events-manager'); ?>
                        <select name="event_email_before_when_<?= $id ?>">
                            <option value="before" <?= isset($item['when']) && $item['when'] === 'before' ?  'selected="selected"' : ''  ?>><?php echo sprintf(_x('%s the event starts','before or after','events-manager'),__('Before','events-manager')); ?></option>
                            <option value="after" <?= isset($item['when']) && $item['when'] === 'after' ?  'selected="selected"' : ''  ?>><?php echo sprintf(_x('%s the event starts','before or after','events-manager'),__('After','events-manager')); ?></option>
                        </select>
                        <?php _e('at','events-manager'); ?>
                    </span>
                    <input class="em-time-input em-time-start" type="text" size="8" maxlength="8"
                           name="event_email_before_time_<?= $id ?>"
                            <?= isset($item['time']) ?  'value="'.isset($item['time']).'"' : ''  ?>
                    />
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    <script>
        jQuery('.enable-event-email-before').each(function (id,$e){
            jQuery($e).on('click',function (){
                let $eventEmailBeforeWrapper = jQuery(this).closest('.event-email-before').find('.event-email-before-wrapper'),
                    $input = $eventEmailBeforeWrapper.find('input[name="event_email_before_active_'+id);

                if($input.val(1-$input.val()).val() == 1) {
                    jQuery(this).closest('.email-before-container').find('#email-before_'+(id+1)).show();
                    jQuery(this).text('Disable');
                    $eventEmailBeforeWrapper.show();
                } else {
                    jQuery(this).text('Enable');
                    $eventEmailBeforeWrapper.hide();
                }
            });
        });
    </script>
<?php
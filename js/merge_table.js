(function ($) {
  Drupal.behaviors.crm_core_farm_merge_table = {
    attach: function(context) {
      $('#merge-farm-table tr').each(function() {
        var context = $(this);
        var all_radios = $('input[type=radio]', context);
        $('input[type=radio]:not(.processed)', context).change(function() {
          all_radios.addClass('processed');
          all_radios.not(this).attr('checked', '');
          all_radios.removeClass('processed');
        });
      });
    }
  }
})(jQuery);

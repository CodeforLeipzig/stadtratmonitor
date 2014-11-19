// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

$('[data-persona-login]').click(function(e) {
  e.preventDefault();
  navigator.id.get(function(assertion) {
    if (assertion) {
      if (assertion) {
        var form = $('#browser-id-form');
        form.find('input[name=assertion]').val(assertion);
        form.submit();
      } else {
        // TODO: Handle failure
      }
    }
  });
});

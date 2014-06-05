$(document).ready(function() {
    $("#tool-selection").accordion();
    // cfs ids
    var cfs = ["wkusdefault", "wkuslynx",
               "wkrudefault", "wknldefault",
               "wkcadefault", "wkapdefault",
               "wkapatag"];
    $("#cf-id").autocomplete({
        minLength: 0,
        source: cfs
    });
});
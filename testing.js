var dir = "/functions";
var fileextension = ".js";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        // List all js file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {

            var filename = this.href.replace(window.location.host, "").replace("http:///", "");

            $("body").append($("<script src=" + dir + filename + " defer></script>"));

        });
    }
});
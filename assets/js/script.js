$('h5').dblclick(function() { $(this).css('color', 'red'); });
$("#cor").click(function() { alert("El correo fue enviado correctamente..."); });
$("#pis, #pio, #pia").click(function() { $(".card").toggle(); });
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
$(function() {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
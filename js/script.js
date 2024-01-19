document.addEventListener("DOMContentLoaded", function () {
    var cookieNotice = document.getElementById("cookie-notice");
    var acceptCookiesBtn = document.getElementById("accept-cookies");

    acceptCookiesBtn.addEventListener("click", function () {
        cookieNotice.style.display = "none";
        // Aquí puedes realizar cualquier acción adicional al aceptar las cookies
    });
});

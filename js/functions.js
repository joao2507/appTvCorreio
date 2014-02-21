function showAlert(texto) {
    if (isPhoneGap()) {
        navigator.notification.alert(
                texto,
                null,
                'Alerta',
                'OK'
                );
    } else {
        alert(texto);
    }
}

function showAlertComTitulo(titulo, texto) {
    if (isPhoneGap()) {
        navigator.notification.alert(
                texto,
                null,
                titulo,
                'OK'
                );
    } else {
        alert(texto);
    }
}

function isPhoneGap() {
    return IS_PHONEGAP;
}

function showError(error) {
    hideLoader();
    showAlert('Ocorreu um erro! \nCódigo: ' + error.code + '\nDetalhe:' + error.message, 'OK', null);
}

function getData(key) {
    return window.localStorage.getItem(key);
}

function setData(key, value) {
    window.localStorage.setItem(key, value);
}

function showLoader(el) {
    $(el).append('<div id="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');
}

function hideLoader() {
    $("#spinner").remove();
}


function closeModalEasyCall(){
    $("#easy-call").kendoMobileModalView("close");
}

function confirmModalEasyCall(){
    $("#easy-call").kendoMobileModalView("close");
    app.navigate('#menu');
}
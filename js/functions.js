function initDropDown(container) {
    // if (kendo.ui.DropDownList) {
    //   $(container+" .dropdown").kendoDropDownList();
    //}
}

function closeDropDown(container) {
    //if (kendo.ui.DropDownList) {
    //  $(container+" .dropdown").data("kendoDropDownList").close();
    //}
}

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

function dataSource_error(e) {
    hideLoader();

    if (isPhoneGap())
        navigator.app.backHistory();
    else
        history.go(-1);
    showAlert('Não foi possível conectar ao servidor, por favor, tente novamente.');
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
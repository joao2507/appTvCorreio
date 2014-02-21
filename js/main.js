var app = null;
var TIMEOUT = 10000;
var devicePlatform = null;
var config_streaming = null;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});

document.addEventListener("deviceready", onDeviceReady, false);


var jqxhr = $.ajax({
    url: "http://cyoung.com.br/mobile/api/public/json/tvcorreio.json",
    dataType: "jsonp",
    jsonpCallback: "load_config",
    success: function(data) {
        if (data.banner.itens.length > 0) {
            $('#banner > .banner').cycle({
                fx: "scrollHorz",
                timeout: data.banner.timeout
            });

            $.each(data.banner.itens, function(i, item) {
                $('#banner > .banner').cycle('add', '<img src="' + item + '">');
            });

        }
        config_streaming = data.streaming;
    }
});

function onDeviceReady() {
    //adicionar o evento online
    document.addEventListener("online", onOnline, false);
    //adicionar o evento offline
    document.addEventListener("offline", onOffline, false);
    //monitorar o click no backbutton
    document.addEventListener("backbutton", function(e) {

        navigator.notification.confirm(
                'Você realmente deseja sair do aplicativo?',
                exitFromApp,
                'Sair',
                'Não,Sim'
                );

    }
    , false);

    navigator.splashscreen.hide();
    devicePlatform = device.platform;
}

function onOffline() {
    showAlert('Sem conexão a internet!');
}

function onOnline() {
    //$("#modal-alert").data("kendoMobileModalView").close();
    //hideLoader();
}

function exitFromApp(buttonIndex) {
    if (buttonIndex == 2) {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    }
}

function exitFromAccount(buttonIndex) {
    if (buttonIndex == 2) {
        onLogout();
    }
}

function onClickToPlayer() {
    alert(config_streaming.url.devicePlatform);
    window.open(config_streaming.url.devicePlatform, '_system');
    return false;
}
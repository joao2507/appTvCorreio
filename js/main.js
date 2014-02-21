var app = null;
var TIMEOUT = 10000;
var devicePlatform = null;
var config_streaming = null;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});

document.addEventListener("deviceready", onDeviceReady, false);
$.ajax({
    url: "http://cyoung.com.br/mobile/api/public/json/tvcorreio.json",
    dataType: "jsonp",
    jsonpCallback: "load_config",
    cache: false,
    success: function(data) {
        alert('configs carregadas');
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
    },
    error: function() {
        alert('Erro ao carregar as configurações do app');
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
    alert('click player');
    //alert(devicePlataform);
    alert(config_streaming.url.Android);
//    if(devicePlataform == 'Android')
//        window.open(config_streaming.url.Android, '_system');
//    else if(devicePlataform == 'iOS')
//        window.open(config_streaming.url.iOS, '_system');
    return false;
}

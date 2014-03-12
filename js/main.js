var app = null;
var config_streaming = null;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('body').data('so',device.platform);

    spinnerplugin.show();

    $.ajax({
        url: "http://cyoung.com.br/mobile/api/public/json/tvcorreio.json",
        dataType: "jsonp",
        jsonpCallback: "load_config",
        cache: false,
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
            spinnerplugin.hide();
        },
        error: function() {
            alert('Erro ao carregar as configurações do app');
            spinnerplugin.hide();
        }
    });

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

    }, false);
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

function onClickToPlayer() {
    try {
        var so =$('body').data('so');
        if (so == 'Android')
            window.open(config_streaming.url.Android, '_system');
        else if (so == 'iOS'){
            window.open('http://www.uol.com.br');
            //$('#player').html('<video src="'+config_streaming.url.iOS+'"></video>');
        }
        return false;
    }
    catch (e) {
        alert('Erro: ' + e.message);
    }
}

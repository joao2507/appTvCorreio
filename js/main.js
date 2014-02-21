var URL_SERVER = 'http://emlur.webhop.net:8084/';
var app = null;
var TIMEOUT = 10000;
var devicePlatform = null;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('mopa');
    //adicionar o evento online
    document.addEventListener("online", onOnline, false);
    //adicionar o evento offline
    document.addEventListener("offline", onOffline, false);
    //monitorar o click no backbutton
    document.addEventListener("backbutton", function(e) {
        //console.log('chamando o backbutton..'+page_id);
        //hideLoader();
        //var page_id = app.view().id;
        
        navigator.notification.confirm(
                    'Você realmente deseja sair do aplicativo?',
                    exitFromApp,
                    'Sair',
                    'Não,Sim'
                    );
        
        
//        if (page_id == '/') {
//            navigator.notification.confirm(
//                    'Você realmente deseja sair do aplicativo?',
//                    exitFromApp,
//                    'Sair',
//                    'Não,Sim'
//                    );
//        } else if (page_id == '#inicio') {
//            navigator.notification.confirm(
//                    'Você realmente deseja se deslogar da sua conta?',
//                    exitFromAccount,
//                    'Sair',
//                    'Não,Sim'
//                    );
//        } else if (page_id == '#login' || page_id == '#registro-conta') {
//            app.navigate('#intro');
//        }
//        else {
//            e.preventDefault();
//            navigator.app.backHistory();
//        }
    }
    , false);
    //hideLoader();
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

function onClickToPlayer(){
    if(devicePlatform == 'Android'){
        window.open('rtsp://174.37.99.198:1935/dvrid1816/1816', '_system');
    }else if(devicePlatform == 'iOS'){
        window.open('http://174.37.99.198:1935/dvrid1816/1816/playlist.m3u8', '_system');
    }
    return false;
}
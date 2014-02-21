var URL_SERVER = 'http://emlur.webhop.net:8084/';
var app = null;
var TIMEOUT = 10000;

app = new kendo.mobile.Application($(document.body), {
    skin: "flat"
});


function onLoad() {
    //if (isPhoneGap()) {
        //showLoader();
        document.addEventListener("deviceready", onDeviceReady, false);
    //}
}

// device APIs are available
//
function onDeviceReady() {
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
    VideoPlayer.play("rtsp://174.37.99.198:1935/dvrid1816/1816");
    //VideoPlayer.play("https://www.youtube.com/watch?v=24MGQQiKd8Q");
    //showAlert('mopa');
//    if(device.platform == 'Android'){
//        $('#player > iframe').attr('src', 'rtsp://174.37.99.198:1935/dvrid1816/1816');
//    }else if(device.platform == 'Android'){
//        $('#player > iframe').attr('src', 'http://174.37.99.198:1935/dvrid1816/1816/playlist.m3u8');
//    }
    return false;
}
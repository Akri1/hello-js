function playS() {
    const audio = document.getElementById( 'snd'+id );
    const divkey = document.getElementById( 'k'+id);
    audio.currentTime = 0;
    audio.play();
    divkey.className = 'active';
} 

function crearS( id ) {
    const divkey = document.getElementById( 'k'+id );
    divkey.className = '';
}
//
function myKeysDw( e ) {
    switch ( e.keyCode ) {
        case 65: playS('snd01');break;
        case 83: playS('snd02');break;
        default: console.log( e );
        break;
    }
}

function myKeysUp ( e ) {
    switch ( e.keyCode ) {
        case 65: clearS('snd01');break;
        case 83: clearS('snd02');break;
        default: console.log( e );
        break;
    }
}

var selBox = [];

// function boardClick(e) {
//     let r = e.target.parentNode.rowIndex
//     let c = e.target.cellIndex
//     selBox = [];
//     if (board[r][c] > 0) {
//             selBox = [ r, c ];
//     }
// }
function mouseOver( e ) {
    // //logs ( e.target );
    // console.log( e );
        let r = e.target.parentNode.rowIndex;
        let c = e.target.cellIndex;
        let offS = $( e.target ).offset();
        if ( board[r][c]>0 ) {
            $( 'div#buttons' )
            .show()
            .css( offS);
            selBox = [ r, c]
        } else {
            $( 'div#buttons' )
            .hide()
            .css( offS);
            selBox = [ ]
        }
    } 
    // $( 'div#buttons' ).css( offS);


    
    function moveUp() {
        if ( selBox.length > 0 && selBox[0] > 0 ) {
            let r = selBox[0];
            let c = selBox[1];
            if ( board[r-1][c] == 0 ) {
                moveCelles( [r,c], [r-1,c] );
                moveBOX( [r,c], [r-1,c] );
            } else {
            swapCelles ( [r,c], [r-1,c] );
                moveBOX( [r,c], [r-1,c] );
                moveBOX( [r-1,c], [r,c] );
            } 
        }
    selBox = [];
 }

   


function moveLeft() {
    if ( selBox.length > 0 && selBox[1] > 0 ) {
        let r = selBox[0];
        let c = selBox[1];
        if ( board[r][c-1] == 0 ) {
            moveCelles( [r,c], [r,c-1] );
            moveBOX( [r,c-1], [r,c]);
        } else {
           let t = board[r][c];
           swapCelles ( [r,c], [r,c-1] );
           moveBOX( [r,c], [r,c-1] );
           moveBOX( [r,c-1], [r,c] );
        } 
    }
    selBox = [];
}


function moveRight() {
    if ( selBox.length > 0 && selBox[1] < bCol-1) {
        let r = selBox[0];
        let c = selBox[1];
        if ( board[r][c+1] == 0 ) {
            moveCelles( [r,c], [r,c+1] );
            moveBOX( [r,c+1], [r,c]);
        } else {
           let t = board[r][c];
           swapCelles ( [r,c], [r,c+1] );
           moveBOX( [r,c], [r,c+1] );
           moveBOX( [r,c+1], [r,c] );
        } 
    }
    selBox = [];
}

function moveDown() {
    if ( selBox.length > 0 && selBox[0] < bRow-1)  {
        let r = selBox[0];
        let c = selBox[1];
        if ( board[r+1][c] == 0 ) {
            moveCelles( [r,c], [r+1,c] );
            moveBOX( [r,c], [r+1,c]);
        } else {
           let t = board[r][c];
           swapCelles ( [r,c], [r+1,c] );
           moveBOX( [r,c], [r+1,c] );
           moveBOX( [r+1,c], [r,c] );
        } 
    }
}
function logs(msg) {
    console.log( msg, selBox );

}


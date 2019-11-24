const boardSize = 4;

var board = [
    [0, 0, 2, 4],   
    [0, 2, 0, 0],
    [0, 2, 0, 2],
    [0, 2, 0, 0],
];

var elBoard = document.querySelectorAll( 'table#game2048 td' );

function drawBoard () {
    //Варіант 1 - математичний 
    for (let r=0; r < boardSize; r++) {
        for (let c=0; c < boardSize; c++) {
            let i = boardSize * r + c;
            if ( board[ r ][ c ] > 0) {
                elBoard[ i ].innerText = board [ r ][ c ];
             } else {
                 elBoard[ i ].innerText = '';
             }   
        }
    }
}

drawBoard();

function mover( a ) {                              // a :: [ ?, ?, ?, ?]
    for ( let c=0; c < boardSize-1; c++) {           // 1)всі клітинки без останньої ( c
        if( a[ c ] == 0 ) { // 2) 0 ? (так)
            let cNeO = -1;
            for ( let cR=c+1; cR < boardSize; cR ++ ) {     //      2.1) вправо ? > 0 ( cNeO )      
                if(a[ cR ] > 0) {    
                    cNeO = cR;
                    break;        
                }
            }
            if ( cNeO != -1 ) {
                a[ c ] = a[ cNeO ];                               //      2.2) (c) = ( cNeO ); ()  
                a [ cNeO ] = 0;    
            }    
        }
        let cEq = -1;
        for ( let cR=c+1; cR < boardSize; cR++ ) {
            if ( a[ c ] == a[ cR ] ) {
                cEq = cR;
                break;
            } 
        }
        if ( cEq != -1 ) {
            a[ c ] += a[ cEq ];
            a[ cEq ] = 0;
        }   
    }
    return a;
}

function mvLeft() {
    for ( let r=0; r < boardSize; r++) {                       //всі рядки
        //let row = board[ r ];                                  //взяти конкретний рядок
        //row = mover( row );                                    //рухаємо вліво цей рядок
        //board[ r ] = row;                                      //покласти назад рядок
        board[ r ] = mover(board[ r ] );
    }
    drawBoard();                                               //перемалювати 
}

function mvRight() {
    for ( let r=0; r < boardSize; r++) {
        board[ r ] = mover(board[ r ].reverse() ).reverse();
    }
    drawBoard();
}

function mvUp() {
    let a = [];
    for ( let c=0; c < boardSize; c++) {
        let a = [board[0][c], board[1][c], board[2][c], board[3][c] ];
        a = mover(a);
            board [0][c] = a[0];
            board [1][c] = a[1];
            board [2][c] = a[2];
            board [3][c] = a[3];
    }

    drawBoard();
}

function mvDown() {
    let a = [];
    for ( let c=0; c < boardSize; c++) {
        let a = [board[0][c], board[1][c], board[2][c], board[3][c] ];
        a = mover(a.reverse() ).reverse();
            board [0][c] = a[0];
            board [1][c] = a[1];
            board [2][c] = a[2];
            board [3][c] = a[3];
    }

    drawBoard();
}
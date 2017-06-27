function Game (){
  this.row1 = [];
  this.row1.length = 8
  this.row2 = [];
  this.row2.length = 8
  this.row3 = [];
  this.row3.length = 8
  this.row4 = [];
  this.row4.length = 8
  this.row5 = [];
  this.row5.length = 8
  this.row6 = [];
  this.row6.length = 8
  this.row7 = [];
  this.row7.length = 8
  this.row8 = [];
  this.row8.length = 8
}

function chessPiece(piece,movement){
  this.piece = piece;
  this.movement = movement;
  this.teamColor = "";
}

function Pawn(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "Pawn";
  this.movement = function(){   //define pawn's movements
  }
}

function Rook(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "Rook";
  this.movement = function(){   //define pawn's movements
  }
}

function Bishop(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "Bishop";
  this.movement = function(){   //define pawn's movements
  }
}

function Knight(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "Knight";
  this.movement = function(){   //define pawn's movements
  }
}

function Queen(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "Queen";
  this.movement = function(){   //define pawn's movements
  }
}

function King(){
  chessPiece.call(this,piece,movement,teamColor);
  this.piece = "King";
  this.movement = function(){   //define pawn's movements
  }
}

function colorBoard(){
  let counter = 0;
  let remainder = 1;
  for (let x = 0; x < 64; x++){
    if (x % 2  === remainder){
      $('#square'+x).css('background-color', 'green');
    }
    if (counter >= 7 ){ remainder = 0 };
    if (counter >= 15){ remainder = 1 };
    if (counter >= 23){ remainder = 0 };
    if (counter >= 31){ remainder = 1 };
    if (counter >= 39){ remainder = 0 };
    if (counter >= 47){ remainder = 1 };
    if (counter >= 55){ remainder = 0 };
    counter++;
  }
}

$(document).ready(function(){
  colorBoard();
});

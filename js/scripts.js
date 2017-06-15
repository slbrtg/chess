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

$(document).ready(function(){
  for (var x = 0.5; x < 64; x = x + 0.5){
    var jumpSquare = 1.5;
    if (x % jumpSquare === 0){
      $('#square'+x).css('background-color', 'green');
    }
  }
});

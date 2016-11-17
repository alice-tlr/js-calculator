var stream = '';

function calculate(){
  var result = eval(stream);
  stream = result;
  document.getElementById('display').innerHTML = result;
  console.log(result);
}

function c(){
  stream = "";
  document.getElementById('display').innerHTML = stream;
}

function number(a){
    var last = parseInt(stream.charAt(stream.length-1));
    if(stream === ''){
      stream = a;
    }
    else if(isNumber(last)){
      console.log(last);
      stream.charAt(stream.length-1) = last*10 + a;
    }
    else{
      stream += ' '+a;

    }
    document.getElementById('display').innerHTML = stream;
}

var times = function(){
  stream += ' *';
    document.getElementById('display').innerHTML = stream;
}

var divide = function(){
  stream += ' /';
    document.getElementById('display').innerHTML = stream;
}

var add = function(){
  stream += ' +';
    document.getElementById('display').innerHTML = stream;
}

var subtract = function(){
  stream += ' -';
    document.getElementById('display').innerHTML = stream;
}

function isNumber(a){
  if(a == NaN){
    return false;
  }
  else{return true;}
}

//When button is pushed
  //if number
    //add number to stream
  //if operation
    //add function to stream
  //if enter
    //run functions

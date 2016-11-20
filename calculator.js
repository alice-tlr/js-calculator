

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
      if(stream === ''){
      stream = '' + a;
    }
    else if(isNumber(a)){
      console.log(a);
      stream += a;
    }

    document.getElementById('display').innerHTML = stream;//display it in this bit of html
}

var times = function(){
  stream += ' * ';//this will apply * to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var divide = function(){
  stream += ' / ';//this will apply / to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var add = function(){
  stream += ' + ';//this will apply + to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var subtract = function(){
  stream += ' - ';//this will apply - to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

function isNumber(a){//this checks for errors,
  if(a == NaN){//if a is not a number
    return false;//return false
  }
  else{return true;}
}

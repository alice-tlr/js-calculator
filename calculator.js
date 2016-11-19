

var stream = '';

function calculate(){
  var result = eval(stream);//the result = the evaluation of whatever the stream variable is (this var relys on the outcome of another vars value, in thecase var streams value)

  stream = result;//here we change value of stream to the value of result.
  document.getElementById('display').innerHTML = result;//where we are putting the result within the HTML
  console.log(result);//print the result
}

function c(){
  stream = "";//make stream equal to nothing
  document.getElementById('display').innerHTML = stream;//put steam here in HTML
}

function number(a){
    
    if(stream === ''){//if steam is = to nothing
      stream = '' + a;//then steam = whatever a is (function number(a)) - we're adding '' empty string at the start to make sure its stored as a string not a number. if it was a number, when we do += it will actually calulate rather than concatinate. e.g  1+1 = 2 rather than 1 + 1 = 11
    }
    else if(isNumber(a)){//else/if if number is in the last position, print to console
      console.log(a);
      stream += a;//if its the last number, stream = stream plus a 0 on the end
    }

    else{
      stream += ' ' + a + ' ';//if we pass in a symbol, add it to the stream
      //stream += 'something'; is the same as
      //stream = stream + 'something';
    }
    document.getElementById('display').innerHTML = stream;//display it in this bit of html
}

var times = function(){
  stream += ' *';//this will apply * to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var divide = function(){
  stream += ' /';//this will apply / to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var add = function(){
  stream += ' +';//this will apply + to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

var subtract = function(){
  stream += ' -';//this will apply - to the end of your stream
    document.getElementById('display').innerHTML = stream;
}

function isNumber(a){//this checks for errors,
  if(a == NaN){//if a is not a number
    return false;//return false
  }
  else{return true;}
}

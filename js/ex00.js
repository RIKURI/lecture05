function ninobaisu(number){
  var remeindar, result;

  remeinder = number % 2;
  result = remeinder == 0;
  return result;
}


function gonobaisu(number){
  var remeindar, result;

  remeinder = number % 5;
  result = remeinder == 0;
  return result;
}

function junobaisu(number){
  var resultA, resultB;
  resultA = ninobaisu(number);
  resultB = gonobaisu(number);

  result = resultA && resultB;
  return result;
}

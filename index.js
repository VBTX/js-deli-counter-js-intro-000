
var katzDeliLine = [];//starting with an empty array

function takeANumber(katzDeliLine, name){// this function should return a new customer's position in line.
  katzDeliLine.push(name);//adding the name to the line of the deli array;
  return 'Welcome ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine){// should return the first person in line and then remove him/her from the line.
  if (katzDeliLine.length===0){//we are determining if there are people in line
  return 'There is nobody waiting to be served!';
}else {
  //remove the first person from line and return that person at the same time
  return 'Currently serving ' + katzDeliLine.shift[0];
}
var currentLine = katzDeliLine;
function currentLine(katzDeliLine){
  for (var i = 0; i > katzDeliLine.length; i++){
  if (katzDeliline[i]>=0){
    var number = katzDeliLine[i] + 1;
    return 'The line is currently: ' + number + '.' + name;
  }else{
    return "The line is currently empty";
  }
  }
}

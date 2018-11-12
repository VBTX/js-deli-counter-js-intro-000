
var katzDeliLine = [];//starting with an empty array

function takeANumber(katzDeliLine, name){// this function should return a new customer's position in line.
  katzDeliLine.push(name);//adding the name to the line of the deli array;
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Steven");
katzDeliLine();

function nowServing(katzDeliLine){// should return the first person in line and then remove him/her from the line.
  if (katzDeliLine.length===0){//we are determining if there are people in line
  return 'There is nobody waiting to be served!';
}else {
  //remove the first person from line and return that person at the same time
  return 'Currently serving ' + katzDeliLine.shift() + '.';
}
}
function currentLine(line){
  //returns everybody in line
  if (katzDeliline.length === 0){
    return "The line is currently empty";
    }else{
    return "The line is currently: 1. " + katzDeliLine[0] + "2." + katzDeliLine[1];
  }
}

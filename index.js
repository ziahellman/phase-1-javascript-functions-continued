// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
}

wrapAdjective("Hello")("hi");

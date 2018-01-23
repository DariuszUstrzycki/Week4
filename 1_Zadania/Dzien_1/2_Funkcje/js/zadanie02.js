function circleArea(r) {
  debugger;
  if (r <= 0)
    return false;
  else
    return Math.PI * Math.pow(r, 2)
}

function circleRing(r) {

  if (r <= 0)
    return false;
  else
    return 2 * Math.PI * r;
}

//circleArea(-2);
function centuryFromYear(year) {
  var count = 0;
  var result = year / 99;

  while(result < year) {
    result += 99;
    count++
  }
  return count;
}

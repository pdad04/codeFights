function addBorder(picture) {
  let pic = [];
  let length;

  // for each element add a '*' to the front and back
  // then add to the final array
  for(let i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
    pic.push(picture[i]);
  }

  // Get the length of the element
  // including the '*' then add
  // that many '*' to the 1st and last
  // element of the array.
  length = picture[0].length;
  pic.push('*'.repeat(length));
  pic.unshift('*'.repeat(length));

  return pic;
}

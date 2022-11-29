function find_average(array) {
    if (array == 0 || array == '') {
    return 0;
    }
    let sum = 0;
    for (i=0; i<array.length; i++) {
      sum +=array[i];
    }
    return sum/array.length;
  }
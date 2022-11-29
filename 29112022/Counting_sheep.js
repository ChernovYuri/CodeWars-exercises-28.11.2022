function countSheeps(arrayOfSheep) {
    if (arrayOfSheep !== 0 && arrayOfSheep !== undefined) {
    let countOfSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      arrayOfSheep[i] ? countOfSheep++ : countOfSheep += 0;
    }
    return countOfSheep;
      }
    else return 0;
  }
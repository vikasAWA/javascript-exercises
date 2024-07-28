function getTotalAge(death, birth) {
  if (!death) {
    const date = new Date();
    return date.getFullYear() - birth;
  }
  return death - birth;
}

const findTheOldest = function(array) {
  return array.reduce((oldest, currentItem) => {
    const oldestAge = getTotalAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getTotalAge(
      currentItem.yearOfDeath, currentItem.yearOfBirth
    );
    console.log(oldest);
    return oldestAge < currentAge ? currentItem : oldest;
  });
}

// Do not edit below this line
module.exports = findTheOldest;

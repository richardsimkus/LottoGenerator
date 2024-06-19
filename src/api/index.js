const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
// 6 default nums - "specialNum" paramater - set special numbers to false to be explicit on it being a boolean
// or adapted to change outcome based on the one special
// this could even be a callback func to add anything else to the array
// sort of mockApi? It would be easy to swap out with a real endpoint - would use Axios for that.
export const getLottoNumbers = async (specialNumber = false) => {
  //easy config
  const lottoNumberAmount = 6;
  const minNum = 1;
  const maxNum = 49;
  const lottoNumbers = [];

  for (let i = 0; i < lottoNumberAmount; i++) {
    let randomNumber = getRandomNumber(minNum, maxNum);
    while (lottoNumbers.includes(randomNumber)) {
      randomNumber = getRandomNumber(minNum, maxNum);
      console.log(randomNumber);
    }
    lottoNumbers.push(randomNumber);
  }

  lottoNumbers.sort((a, b) => a - b);
  // getSpecialNumber (doesn't conform to the rest of the numbers that must increment eachtime + whatever else like different number range)
  // const getSpecialNumber = () => specialNumber;
  // lottoNumbers.push(getSpecialNumber());
  // add specialNumber after sorting, not before
  return lottoNumbers;
};

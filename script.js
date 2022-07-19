// লুডু খেলায় আমরা কিভাবে ১-৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 6));

// কিভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের alphabetically নাম সাজাতে পারি
const students = ["Rony", "Jony", "Koly", "Orin", "Afrin", "Mou", "Somaiya"];
console.log(students.sort());

// কিভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি
const roll = [2, 6, 1, 45, 23, 20, 2];
console.log(
  roll.sort(function (a, b) {
    return a - b;
  })
);

//কোন সাল leap year কিনা তা বের করতে পারি যেভাবে
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
isLeapYear(2024);

//কোন sentence  এ কতগুলো vowel আছে তা নির্ণয় করা যায় যেভাবে
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}
console.log(countVowels("I Love You"));

//কোন array থেকে যেভাবে duplicate নাম্বরগুলোকে বের করে আনতে পারি
const numbers = [34, 35, 33, 65, 34, 35];

const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicates);

//কোন array থেকে যেভাবে unique নাম্বরগুলোকে বের করে আনতে পারি
const uniqueNumber = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(uniqueNumber);

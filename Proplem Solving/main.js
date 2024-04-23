// ============================ start Proplem solving 1
function sum(arr) {
  // حل اخر
  return arr.filter((x) => x > 0).reduce((acc, Current) => acc + Current, 0);

  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}
console.log(sum([2, 2, -2, 10, 1, 21, -4]));
// ============================ end Proplem solving 1

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function calc(num) {
  if (num % 2 === 0) {
    return "OK";
  } else {
    return "No";
  }
}
console.log(calc());
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function test(num, str) {
  let newString = " ";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;

  // حل اخر
  return str.repeat(num);
}
console.log(test(5, " MOHAMED "));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function numArr(num) {
  return num
    .toString()
    .split("")
    .map((n) => Number(n))
    .reverse();
}
console.log(numArr(123456789));

// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function name(arr) {
  // حل اخر
  return "found it is " + arr.indexOf("MO");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "MO") {
      return "Found It Is " + i;
    }
  }

  let data = arr.filter((item) => item === "MO");
  return data;
}
console.log(name(["aa", "aik", "aa", "aik", "MO"]));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function calaName(Value) {
  // حل اخر
  let PositivesArrayy = Value.filter((x) => x > 0).length;
  let SumNegativess = Value.filter((x) => x < 0).reduce(
    (acc, Current) => acc + Current,
    0
  );
  return [PositivesArrayy, SumNegativess];

  let PositivesArray = [];
  let SumNegatives = 0;
  for (let i = 0; i < Value.length; i++) {
    if (Value[i] > 0) {
      PositivesArray.push(Value[i]);
    } else {
      SumNegatives += Value[i];
    }
  }
  return [PositivesArray, SumNegatives];
}
console.log(calaName([1, 2, 3, -1, -2, -3]));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function IsName(str) {
  return str
    .split("")
    .map((str) => str.repeat(2))
    .join("__");
}
console.log(IsName("mohamed"));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function Opration(opration, Value1, Value2) {
  return eval(Value1 + opration + Value2);
}
console.log(Opration("+", 2, 3));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function SQuareNumper(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] * array[i]);
    }
  }
  return newArray;

  // حل اخر
  return array.map((num) =>
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num
  );
}
console.log(SQuareNumper([4, 3, 9, 7, 2, 1]));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function FUN_Problem(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}
console.log(FUN_Problem(2, 4, 7, 8));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function isSquare(n) {
  if (Math.sqrt(n) % 1) {
    return true;
  } else {
    return false;
  }

  // حل اخر
  return Math.sqrt(n) % 1 || n === 0 ? true : false;
}
console.log(isSquare(8));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function loop_games(numer, count) {
  let array = [];
  for (let i = 1; i <= count; i++) {
    array.push(numer * i);
  }
  return array;

  // حل اخر
  return Array.from(Array(count + 1).keys())
    .slice(1)
    .map((x) => x * numer);
}
console.log(loop_games(2, 4));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function Name_Fun(str) {
  return str.split(" ").join("");
}
console.log(Name_Fun("           M O  H A M E D"));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function Initert_Value(num) {
  return num.map((x) => (x < 0 ? x * -1 : x * -1));
  return num.map((x) => x * -1);
}
console.log(Initert_Value([-2, 3, -6, 22]));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function check_data(boolean) {
  return boolean ? "Yes" : "No";
}
console.log(check_data(true));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function Revers(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(Revers("MOHAMAD ADEL"));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function Nathan_driink(time) {
  let Quual = time * 0.5;
  Quual = Math.random(Quual);
  return Quual;

  // حل ابسط
  return Math.floor(time * 0.5);
}
console.log(Nathan_driink(3));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function convirt(num) {
  return num.toString();
}
console.log(convirt(34));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function average(array) {
  let Quual = 0;
  if (array.length === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    Quual += array[i];
  }
  let finaltyotal = Quual / array.length;
  return finaltyotal;

  // حل اخر
  let newNum = 0;
  array.map((x) => (array.length === 0 ? 0 : (newNum += x / array.length)));
  return newNum;

  // حل اخر
  return array.reduce((acc, Current) => acc + Current, 0) / array.length;
}
console.log(average([1, 3]));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function confirt_two(str) {
  return Number(str);
  return +str;
}
console.log(confirt_two("187287"));
// ============================ end Proplem solving 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================ start Proplem solving 2
function CountTheMonkeys(array) {
  let arr = [];
  for (let i = 1; i <= array; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(CountTheMonkeys(7));
// ============================ end Proplem solving 2

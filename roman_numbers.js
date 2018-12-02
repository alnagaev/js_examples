function convertToRoman(num) {
  let dict = {
    1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'
  }
  keys = Object.keys(dict).map(item => parseInt(item));
  if (keys.includes(num.toString())){
    console.log(dict[`${num}`]);
  }
  else {
    keys.forEach(function comparison(e) {
      if(num<e){
        console.log(num +"is less than"+ e);
      }
      else {
        console.log(num +"is more than"+ e);
      }
    });
  }


console.log(convertToRoman(5));

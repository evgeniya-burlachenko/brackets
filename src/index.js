module.exports = function check(str, bracketsConfig) {
	console.log("str", str)
	console.log("brack", bracketsConfig)
	bracketsConfig = bracketsConfig.map(item => item.join(''));
	console.log("brack2", bracketsConfig)

	while (bracketsConfig.length) {
	  let iterator = 0;
  
	  bracketsConfig.forEach(item => {
		if (str.indexOf(item) != -1) {
		  str = str.replace(item, '');
		  console.log("str2",str)
		} else {
		  iterator += 1;
		}
	  });
	  
	  if (iterator === bracketsConfig.length) {
		bracketsConfig.length = 0;
	  }
	}
	return str.length === 0 ? true : false;
}

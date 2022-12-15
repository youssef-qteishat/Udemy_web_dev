//jshint esversion: 6

// module export getDate now equals anonymous function that gets the current date
// you can also refer to module.exports as exports
exports.getDate = function(){

  const today = new Date();

  const options = {weekday: "long", day: "numeric", month: "long"};
  return today.toLocaleDateString("en-US", options);

}

module.exports.getDay = getDay;

  function getDay(){
    const today = new Date();

    const options = {weekday: "long"};
    return today.toLocaleDateString("en-US", options);
}

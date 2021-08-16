$(document).ready(function() {
  $("#sentence").submit(function(event) {
    event.preventDefault();
    const stringToSplit = $("input#entry").val();
    console.log(stringToSplit);
    function splitIt(stringToSplit) {
      let array = stringToSplit.split(" ");
      let arrayNew = [] ;
      console.log(array);
      array.forEach(function (element) {
        if (element.length >= 3) {
          arrayNew.push(element);
        }
        console.log(arrayNew)
      })
      let reverse = arrayNew.reverse();
      let rejoined = reverse.join();
      console.log(rejoined);


    }

    console.log(splitIt(stringToSplit))
  });
});


**// alternate ben method for filtering by length and reversing:
// const shortSentence = sentence.filter(word => word.length > 2);
// const reverseSentence = shortSentence.reverse();
// $("#result").text(reverseSentence.join(' '));
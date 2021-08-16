$(document).ready(function() {
  $("#sentence").submit(function(event) {
    event.preventDefault();
    const stringToSplit = $("input#entry").val();
    console.log(stringToSplit);
    const space = ' '
    function splitIt(stringToSplit) {
      let array = stringToSplit.split(space);
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



    // let favoriteThings = [animal, color, movie, superhero];
    // console.log(favoriteThings);
    // console.log(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    // let newFavoriteThings = [];
    // newFavoriteThings.push(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    // console.log("newFavoriteThings = " + newFavoriteThings);



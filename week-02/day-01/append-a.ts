// -  Create an array variable named `animals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end


let animals = ["kuty", "macsk", "cic"];

  animals = animals.map(function(element) {
      return `${element}a`
  });
  console.log(animals);
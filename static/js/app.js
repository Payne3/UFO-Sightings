// from data.js
var tableData = data;



// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("button");





// // Step 1: Loop Through `data` and console.log each ufo report object

function findMe() {

  tableData.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function ([key, value]) {
      console.log(key, value);

      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
// findMe();
submit.on("click", function () {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);


  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  // clear table before populating
  tbody.html('');



  // populate table with search criteria

  filteredData.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function ([key, value]) {

      console.log(key, value);

      var cell = tbody.append("td");
      cell.text(value);

      // clear input form

      d3.select('input').node().value = "";

    });
  });


  d3.select('input').node().value = "";
});
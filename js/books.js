queue()
.defer(d3.csv, "data/mylibrary.csv")
.await(charts);

function charts(error, myLibraryData) {
  var ndx = crossfilter(myLibraryData);

  showGenres(ndx);
  showAuthors(ndx);
  showProtGender(ndx);
  showLanguage(ndx);
  
  dc.renderAll()
}

function showGenres(ndx) {
  var dim = ndx.dimension(dc.pluck("genre"));
  var group = dim.group();

  dc.pieChart("#genres")
    .height(300)
    .radius(100)
    .transitionDuration(1500)
    .dimension(dim)
    .group(group)
}

function showProtGender(ndx) {
  var dim = ndx.dimension(dc.pluck("genderProtagonist"));
  var group = dim.group();

  dc.pieChart("#protGender")
    .height(300)
    .radius(100)
    .transitionDuration(1500)
    .dimension(dim)
    .group(group)
}

function showAuthors(ndx) {
  var dim = ndx.dimension(dc.pluck("author"));
  var group = dim.group();

dc.barChart("#authors")
  .width(800)
  .height(500)
  .margins ({top: 10, right: 50, bottom: 30, left: 50})
  .dimension(dim)
  .group(group)
  .transitionDuration(500)
  .x(d3.scale.ordinal())
  .xUnits(dc.units.ordinal)
  .elasticY(true)
  .xAxisLabel("Author")
  .yAxisLabel("Books")
  .yAxis().ticks(4)
}

function showLanguage(ndx) {
  var dim = ndx.dimension(dc.pluck("language"));
  var group = dim.group();

dc.barChart("#languages")
  .width(800)
  .height(500)
  .margins ({top: 10, right: 50, bottom: 30, left: 50})
  .dimension(dim)
  .group(group)
  .transitionDuration(500)
  .x(d3.scale.ordinal())
  .xUnits(dc.units.ordinal)
  .elasticY(false)
  .xAxisLabel("Language")
  .yAxisLabel("Books")
  .yAxis().ticks(10)
}
queue()
.defer(d3.csv, "data/mylibrary.csv")
.await(charts);

function charts(error, myLibraryData) {
  var ndx = crossfilter(myLibraryData);

  showGenres(ndx);
  showProtGender(ndx);
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

  dc.renderAll()
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

  dc.renderAll()
}
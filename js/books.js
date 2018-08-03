queue()
.defer(d3.json, "data/mylibrary.json")
.await(charts);

function charts(error, myLibraryData) {
  var ndx = crossfilter(myLibraryData);

  showGenres(ndx);
  showAuthors(ndx);
  showProtGender(ndx);
  showLanguage(ndx);
  showSeries(ndx);
  showNumberOfSeries(ndx);
  
  
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
  var dim = ndx.dimension(dc.pluck("Gender main character"));
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
  .width(600)
  .height(300)
  .margins ({top: 10, right: 10, bottom: 30, left: 30})
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
  .width(300)
  .height(500)
  .margins ({top: 10, right: 10, bottom: 30, left: 30})
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


function showSeries(ndx) {
  var dim = ndx.dimension(dc.pluck("series"));
  var group = dim.group();


dc.barChart("#seriesOrNot")
  .width(300)
  .height(500)
  .margins ({top: 10, right: 10, bottom: 30, left: 30})
  .dimension(dim)
  .group(group)
  .transitionDuration(500)
  .x(d3.scale.ordinal())
  .xUnits(dc.units.ordinal)
  .elasticY(false)
  .xAxisLabel("Series")
  .yAxisLabel("Books")
  .yAxis().ticks(10)
}

function showNumberOfSeries(ndx) {
  var totalSeries = ndx.groupAll().reduce(
    function (p, v) {
      if (v.number === 1) {
        p.isSeries++
      } 
      return p;
    },
    function (p, v) {
      if (v.number === 1) {
        p.isSeries--;
      } 
      return p;
    },
    function () {
      return {isSeries: 0};
    },
  )

  dc.numberDisplay("#numberOfSeries") 
    .formatNumber(d3.format("1"))
    .valueAccessor(function(d){
      return (d.isSeries);
    })
    .group(totalSeries)
}

function showTable(ndx) {
  var dim = ndx.dimension();
  var group = dim.group();

  dc.dataTable("#allBooks")
  .chart
  .columns([
    function(d) { return d.title; },
    function(d) { return d.author; },
    function(d) { return d.series; },
    function(d) { return d.genre; },])
  .group(group)
  .group(function(d) {return d.author;})
  .showGroups(true)
  .sortBy(function(d) {
    return d.author;
  })


}
$(document).ready(function() {
  queue()
    .defer(d3.json, "data/mylibrary.json")
    .await(charts);

  function charts(error, myLibraryData) {
    let ndx = crossfilter(myLibraryData);

    showGenres(ndx);
    showAuthors(ndx);
    showProtGender(ndx);
    showLanguage(ndx);
    showSeries(ndx);
    showNumberOfSeries(ndx);
    showTable(ndx);

    dc.renderAll();
  }

  let myTransTimeVariable = 500;
  var myWidthVariable = 250;

  function showGenres(ndx) {
    var dim = ndx.dimension(dc.pluck("genre"));
    var group = dim.group();

    dc.pieChart("#genres")
      .height(300)
      .width(myWidthVariable * 1.5)
      .radius(myWidthVariable / 2)
      .transitionDuration(myTransTimeVariable)
      .dimension(dim)
      .group(group)
      .legend(dc.legend().gap(7));
  }

  function showProtGender(ndx) {
    var dim = ndx.dimension(dc.pluck("Gender main character"));
    var group = dim.group();

    dc.pieChart("#protGender")
      .height(300)
      .width(myWidthVariable * 1.5)
      .radius(myWidthVariable / 2)
      .transitionDuration(myTransTimeVariable)
      .dimension(dim)
      .group(group)
      .legend(dc.legend());
  }

  function showAuthors(ndx) {
    var dim = ndx.dimension(dc.pluck("author"));
    var group = dim.group();

    dc.barChart("#authors")
      .width(myWidthVariable * 3)
      .height(300)
      .margins({
        top: 10,
        right: 10,
        bottom: 30,
        left: 30
      })
      .dimension(dim)
      .group(group)
      .transitionDuration(myTransTimeVariable)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .elasticY(true)
      .xAxisLabel("Author")
      .yAxisLabel("Books")
      .yAxis()
      .ticks(4);
  }

  function showLanguage(ndx) {
    var dim = ndx.dimension(dc.pluck("language"));
    var group = dim.group();

    dc.barChart("#languages")
      .width(myWidthVariable)
      .height(500)
      .margins({
        top: 10,
        right: 10,
        bottom: 30,
        left: 30
      })
      .dimension(dim)
      .group(group)
      .transitionDuration(myTransTimeVariable)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .elasticY(false)
      .xAxisLabel("Language")
      .yAxisLabel("Books")
      .yAxis()
      .ticks(10);
  }

  function showSeries(ndx) {
    var dim = ndx.dimension(dc.pluck("series"));
    var group = dim.group();

    dc.barChart("#seriesOrNot")
      .width(myWidthVariable)
      .height(500)
      .margins({
        top: 10,
        right: 10,
        bottom: 30,
        left: 30
      })
      .dimension(dim)
      .group(group)
      .transitionDuration(myTransTimeVariable)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .elasticY(false)
      .xAxisLabel("Series")
      .yAxisLabel("Books")
      .yAxis()
      .ticks(10);
  }

  function showNumberOfSeries(ndx) {
    var totalSeries = ndx.groupAll().reduce(
      function(p, v) {
        if (v.number === 1) {
          p.isSeries++;
        }
        return p;
      },
      function(p, v) {
        if (v.number === 1) {
          p.isSeries--;
        }
        return p;
      },
      function() {
        return {
          isSeries: 0
        };
      }
    );

    dc.numberDisplay("#numberOfSeries")
      .formatNumber(d3.format("1"))
      .valueAccessor(function(d) {
        return d.isSeries;
      })
      .group(totalSeries)
      .transitionDuration(0);
  }

  /*Table function completed with the help of Nakita of the Tutor team.
My original code on last save: 

function showTable(ndx) {

  dc.dataTable("#allBooks")
  .dimension(ndx)
  .group(function(d) {return d['title']})
  .order(d3.ascending)
  .size(213)
}


Nakita's code: 

function showTable(ndx) {
  var dim = ndx.dimension(dc.pluck('title'));
  dc.dataTable("#allBooks")
  .dimension(dim)
  .group(function(d) {
    return '';
  })
  .columns([
    "title",
    "author",
    "language",
    "series",
    "number",
    "Gender main character",
    "Adult",
    "genre",
    "in collection"
    ])
  .size(213)
  .order(d3.ascending);
}

*/
  function showTable(ndx) {
    var dim = ndx.dimension(dc.pluck("author"));
    dc.dataTable("#allBooks")
      .dimension(dim)
      .group(function(d) {
        return "";
      })
      .columns(["title", "author", "language", "genre"])
      .size(214)
      .sortBy(function(d) {
        return d.author;
      })
      .order(d3.ascending)
      .transitionDuration(myTransTimeVariable);
  }
});

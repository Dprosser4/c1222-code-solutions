
function getRangeReport(start, end) {
  var range = [];
  var rangeReport = {};
  for (var i = start; i <= end; i++) {
    range.push(i);
  }
  rangeReport.range = range;
  rangeReport.total = getTotal(range);
  rangeReport.average = (start + end) / 2;
  rangeReport.evens = getEvens(range);
  rangeReport.odds = getOdds(range);

  return rangeReport;
}

function getTotal(range) {
  var total = 0;
  for (var i = 0; i < range.length; i++) {
    total += range[i];
  }
  return total;
}
function getEvens(range) {
  var evens = [];
  for (var i = 0; i < range.length; i++) {
    if (range[i] % 2 === 0) {
      evens.push(range[i]);
    }
  }
  return evens;
}

function getOdds(range) {
  var odds = [];
  for (var i = 0; i < range.length; i++) {
    if (range[i] % 2 !== 0) {
      odds.push(range[i]);
    }
  }
  return odds;
}

console.log('Range:1-10', getRangeReport(1, 10));
console.log('Range:10-30', getRangeReport(10, 30));
console.log('Range:5-10', getRangeReport(5, 10));
console.log('Range:42-69', getRangeReport(42, 69));
console.log('Range:21-70', getRangeReport(21, 70));
console.log('Range:100-142', getRangeReport(100, 142));

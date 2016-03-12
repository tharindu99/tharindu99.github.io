function drawgraph (id,arr) {
 console.log(arr);

var a = ["data1", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//console.log(a);
    var chart = c3.generate({
        bindto: id,
         data: {
        columns: [arr]
    },
    subchart: {
  show: true
}

    });
    console.log(chart.data());
}


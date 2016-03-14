function drawgraph_line (id,arr) {

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




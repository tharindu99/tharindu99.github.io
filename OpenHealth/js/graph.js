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
    //console.log(chart.data());
}

function drawgraph_pie(id,arr1,arr2){
    var chart1 = c3.generate({
        bindto: id,
        data: {
            rows: [arr1,arr2],
            type : 'donut',
        },
        donut: {
            title: "Major Diagnostics"
        }
});
}




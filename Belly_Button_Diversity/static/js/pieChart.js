function populatePieChart(name){
    let samples = myJsonObj.samples.filter(function(d){
        return d.id == name;
    })
    
    let count=0;
    // https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
    let values = samples[0].sample_values.slice(0, 9);
    let labels = samples[0].otu_ids.slice(0, 9);
    console.log(labels)

    var data = [{
        values: values,
        labels: labels,
        hole: .4,
        type: 'pie'
      }];

    var layout = {
        height: 400,
        width: 500
      };

    Plotly.newPlot('bar', data, layout);
}//populatePieChart

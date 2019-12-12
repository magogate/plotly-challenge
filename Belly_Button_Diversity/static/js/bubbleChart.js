function populateBubbleChart(name){
    // https://plot.ly/javascript/bubble-charts/
    let samples = myJsonObj.samples.filter(function(d){
        return d.id == name;
    })

    let trace1 = {
        x: samples[0].otu_ids,
        y: samples[0].sample_values,
        text: samples[0].otu_labels,
        mode: 'markers',
        marker: {
          color: samples[0].otu_ids,
          size: samples[0].sample_values
        }
      };
    
    var data = [trace1];

    var layout = {
        title: 'Bubble Chart Hover Text',
        showlegend: false,
        height: 600,
        width: 1200
    };

    Plotly.newPlot('bubble', data, layout);
}

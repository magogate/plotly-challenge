/**
 * Created By: Mandar R. Gogate
 * Created On: 12/11/2019
 * This js file creates bubble chart
 * it accepts 2 arguments 
 * 1. selected element in combo box
 * 2. actual json object
 */

function populateBubbleChart(name, myJsonObj){
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
        // title: 'Bubble Chart Hover Text',
        showlegend: false,
        height: 600,
        width: 1200,
        xaxis: {
          title: {
            text: 'OTU ID',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
    };

    Plotly.newPlot('bubble', data, layout);
}

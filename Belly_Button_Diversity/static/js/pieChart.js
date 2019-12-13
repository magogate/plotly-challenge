/**
 * Created By: Mandar R. Gogate
 * Created On: 12/11/2019
 * This js file creates pie chart
 * it accepts 2 arguments 
 * 1. selected element in combo box
 * 2. actual json object
 */

function populatePieChart(name, myJsonObj){
    let samples = myJsonObj.samples.filter(function(d){
        return d.id == name;
    })
    
    let count=0;
    // https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
    let values = samples[0].sample_values.slice(0, 9);
    let labels = samples[0].otu_ids.slice(0, 9);
    

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

function populateGaugeChart(name){
    let metadataInfo = myJsonObj.metadata.filter(function(d){
        return d.id == name;
    })

            //Enter a level between 1 and 5
        var level = metadataInfo[0].wfreq;

        // Trig to calc meter point
        // var degrees = 180-(level-1)*45;
        // 165 - 1 !! 142 -2 !! 120-3 !! 105 - 4 !! 90 - 5 !! 75 - 6 !! 57 - 7 !! 40 - 8
        var degrees;

        switch(level){
            case 1:
                degrees = 165;
                break;
            case 2:
                degrees = 142;
                break;
            case 3:
                degrees = 120;
                break;
            case 4:
                degrees = 105;
                break;
            case 5:
                degrees = 90;
                break;
            case 6:
                degrees = 75;
                break;
            case 7:
                degrees = 57;
                break;
            case 7:
                degrees = 40;
                break;
            default:
                degrees = 360;
        }
        
        var radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
        

        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.035 L .0 0.035 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX,space,pathY,pathEnd);
        console.log("Degree is -->" + degrees);
        console.log("X val is  -->" + x);
        console.log("Y val is  -->" + y);
        console.log("Path val is -->" + path)

        var data = [{ type: 'category',
            x: [0], y:[0],
            marker: {size: 28, color:'850000'},
            showlegend: false,
            name: 'speed',
            text: level,
            hoverinfo: 'text+name'},
        { values: [1,1,1,1,1,1,1,1,1,9],
        rotation: 90,
        
        text: ['9','8','7','6','5','4','3','2','1'],
        textinfo: 'text',
        textposition:'inside',      
        marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                                'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                                'rgba(210, 206, 145, .5)', 'rgba(210, 106, 245, .5)', 
                                'rgba(210, 106, 105, .5)', 'rgba(110, 206, 245, .5)', 
                                'rgba(225, 225, 155, 10)', 'rgba(205, 155, 155, 0)'
                            ]},
        // labels: ['4.5-5', '3.5-4.49', '2.5-3.49', '1.5-2.49', '1-1.49'],
        hoverinfo: 'label',
        hole: .5,
        type: 'pie',
        showlegend: false
        }];

        var layout = {
        shapes:[{
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000'
            }
            }],
        title: 'Maturity Total Score 1-5',
        height: 500,
        width: 600,
        xaxis: {type:'category',zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        yaxis: {type:'category',zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]}
        };

        Plotly.newPlot('gauge', data, layout);
}
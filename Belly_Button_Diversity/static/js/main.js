/**
 *  load json file
 */
var myJsonObj;   
function loadJson(){
    let jsonFile = "./static/data/samples.json";
    d3.json(jsonFile).then(function(samples_json){        
        console.log(samples_json);
        myJsonObj = samples_json;
        populateSubjectNo(samples_json.names)
    })    
}//end of loadJson

/**
 * populate combo-box
 * @param {*} subjectNo 
 */
function populateSubjectNo(subjectNo){
    console.log(subjectNo)    
    let cmbSubNo = d3.select("#selDataset");
    // clear the combo box, before populating it
    cmbSubNo.selectAll("option").remove();
    // populate combo box
    subjectNo.forEach(element => {
        cmbSubNo.append("option").text(element);
    });
}

function populateDemographicInfo(name){
    
    let myPanel = d3.select("#sample-metadata");
    myPanel.selectAll("table").remove("table");
    //add table data
    // https://stackoverflow.com/questions/46782827/d3-adding-style-and-class-to-div-results-in-styles-discarded
    let myTbl = myPanel.append("table").style("font-weight","bold");
    
    let demographInfo = myJsonObj.metadata.filter(function(d){
        return d.id == name;
    })
    
    let Tage = myTbl.append("tr");
        Tage.append("td").text("Age: ")
        Tage.append("td").text(demographInfo[0].age);
    let Tbbtype = myTbl.append("tr");
        Tbbtype.append("td").text("Bbtype: ")
        Tbbtype.append("td").text(demographInfo[0].bbtype);
    let Tethi = myTbl.append("tr");
        Tethi.append("td").text("Ethnicity: ")
        Tethi.append("td").text(demographInfo[0].ethnicity);
    let TGender = myTbl.append("tr");
        TGender.append("td").text("Gender: ")
        TGender.append("td").text(demographInfo[0].gender);
    let Tloc = myTbl.append("tr");
        Tloc.append("td").text("Location: ")
        Tloc.append("td").text(demographInfo[0].location);
    let Twfreq = myTbl.append("tr");
        Twfreq.append("td").text("Wfreq: ")
        Twfreq.append("td").text(demographInfo[0].wfreq);
    let Tsample = myTbl.append("tr");
        Tsample.append("td").text("Sample: ")
        Tsample.append("td").text(demographInfo[0].id);
}//populateDemographicInfo

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


let cmbSubNo = d3.select("#selDataset");
cmbSubNo.on("change", function(d){
    let selectedName = d3.select("#selDataset").property("value")
    populateDemographicInfo(selectedName);
    populatePieChart(selectedName);
});

loadJson()
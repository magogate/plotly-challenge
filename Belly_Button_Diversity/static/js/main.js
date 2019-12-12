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
    let cmbSubNo = d3.select("#selDataset");
    // clear the combo box, before populating it
    cmbSubNo.selectAll("option").remove();
    // populate combo box
    subjectNo.forEach(element => {
        cmbSubNo.append("option").text(element);
    });
    renderInformation();
}

function renderInformation(){
    let selectedName = d3.select("#selDataset").property("value")
    populateDemographicInfo(selectedName);
    populatePieChart(selectedName);
    populateBubbleChart(selectedName);
    populateGaugeChart(selectedName);
}

let cmbSubNo = d3.select("#selDataset");
cmbSubNo.on("change", function(d){    
    renderInformation();
});

loadJson()
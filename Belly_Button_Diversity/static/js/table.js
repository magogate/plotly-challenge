/**
 * Created By: Mandar R. Gogate
 * Created On: 12/11/2019
 * This js file populates table element 
 * it accepts 2 arguments 
 * 1. selected element in combo box
 * 2. actual json object
 */

function populateDemographicInfo(name, myJsonObj){
    
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

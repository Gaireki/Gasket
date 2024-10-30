//when submit button is clicked
document.getElementById("submitBtn").onclick = function(){
    //get data from these elements
    let gasketWidth = document.getElementById("gasketWidth").value;
    gasketWidth = Number(gasketWidth)
    if(gasketWidth <= 0 || isNaN(gasketWidth)){
        document.getElementById("gasketWidth_err").textContent = `Please input value data here!`
    }

    let radialProjection = document.getElementById("radialProjection").value;
    radialProjection = Number(radialProjection)
    if(radialProjection <= 0 || isNaN(radialProjection)){
        document.getElementById("radialProj_err").textContent = `Please input value data here!`
    }

    let d_depth = document.getElementById("d_depth").value;
    d_depth = Number(d_depth)
    if(d_depth <= 0 || isNaN(d_depth)){
        document.getElementById("d_depth_err").textContent = `Please input value data here!`
    }

    console.log(gasketWidth);
    console.log(radialProjection);
    console.log(d_depth);

    //projection percentage//
    let projection = radialProjection/gasketWidth;
    //document.getElementById("myH2").textContent = projection//
    console.log(projection, typeof projection);

    if(hardGasket.checked){
        //if hard gasket selected.
        if (radialProjection > gasketWidth || d_depth <= 0 || isNaN(projection) || radialProjection <=0 || isNaN(radialProjection)){
            alert(`Please input correct data`);
        }else if(projection < 0.25 && d_depth >= 0.76){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.25 && d_depth >= 0.25){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.5 && d_depth >= 0){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.75 && d_depth >=0){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else {
            document.getElementById("myH1").textContent = `This finding is acceptable as per ASME PCC-1 Table D-3-1M`;
        }

    } else if(softGasket.checked){
        //if soft gasket is selected.
        if (radialProjection > gasketWidth || d_depth <= 0 || isNaN(projection) || radialProjection <=0 || isNaN(radialProjection)){
            alert(`Please input correct data`);
        }else if(projection < 0.25 && d_depth >= 1.27){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.25 && d_depth >= 0.76){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.5 && d_depth >= 0.13){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else if (projection >= 0.75 && d_depth >=0){
            document.getElementById("myH1").textContent = `This finding is rejectable as per ASME PCC-1 Table D-3-1M`;
        }else {
            document.getElementById("myH1").textContent = `This finding is acceptable as per ASME PCC-1 Table D-3-1M`;
        }

    }else {
        document.getElementById("myH1").textContent = `You did not select the gasket type!`;
    }

}

//to reset
document.getElementById("resetBtn").onclick = function(){
    document.getElementById("gasketWidth").value = "";
    document.getElementById("radialProjection").value = "";
    document.getElementById("d_depth").value = "";
    document.getElementById("myH1").textContent = "";
    document.getElementById("gasketWidth_err").textContent = ""
    document.getElementById("radialProj_err").textContent = ""
    document.getElementById("d_depth_err").textContent = ""

    if(hardGasket.checked){
        document.getElementById("hardGasket").checked = false;
    }else if (softGasket.checked){
        document.getElementById("softGasket").checked = false;
    }
}
// done by pidot!



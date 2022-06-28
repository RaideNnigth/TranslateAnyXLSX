const XLSX = require("xlsx");
const fs = require("fs");

let selectedFile;


document.getElementById('buttonFileSelect').addEventListener("change", (event)=>{
        selectedFile = event.target.files[0]; 
        if(selectedFile){
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read({data, type:"binary"});
                console.log(workbook);
                }
        }
        
});
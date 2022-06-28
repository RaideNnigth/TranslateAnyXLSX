let selectedFile;
import { read, utils } from 'xlsx';
import fs from 'fs';
const finalObject = {};
document.getElementById('buttonFileSelect').addEventListener("change", (event)=>{
        selectedFile = event.target.files[0]; 
        if (selectedFile) {
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = read(data, {type:"binary"});
                        workbook.SheetNames.forEach(sheetName => {
                                let rowObject = utils.sheet_to_json(workbook.Sheets[sheetName]);
                                finalObject[sheetName] = rowObject;
                              });
                }
        }
        fs.writeFileSync('./target.json', JSON.stringify(dataObject));
});
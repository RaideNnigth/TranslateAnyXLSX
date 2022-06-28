let selectedFile;
document.getElementById('buttonFileSelect').addEventListener("change", (event)=>{
        selectedFile = event.target.files[0]; 
        if (selectedFile) {
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                fileReader.onload = (event) => {
                        console.log(event.target.result);
                }
        }
});
document.getElementById('buttonFileUpdate').addEventListener("click", () => {
        
        
});
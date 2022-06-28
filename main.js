let selectedFile;
document.getElementById('buttonFileSelect').addEventListener('chance', (event)=>{
    selectedFile = event.target.File[0];
});
document.getElementById('buttonFileUpdade').addEventListener('click', ()=> {
    if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
            console.log(event.target.result)
        }
    }
});
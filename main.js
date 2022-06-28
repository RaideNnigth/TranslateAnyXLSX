let selectedFile;
document.getElementById('buttonFileSelect').addEventListener("change", (event)=>{
        //selectedFile = event.target.file[0]; 
        console.log("ok");
});
// document.getElementById('buttonFileUpdade').addEventListener('click', ()=> {
//     if (selectedFile) {
//         let fileReader = new FileReader();
//         fileReader.readAsBinaryString(selectedFile);
//         fileReader.onload = (event)=>{
//             console.log(event.target.result)
//         }
//     }
// });
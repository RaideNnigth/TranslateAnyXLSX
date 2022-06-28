function translator(inputText){
    var url = "https://api-free.deepl.com/v2/translate";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
    };

    var data = "auth_key=123456x&text="+inputText+"&target_lang=PT-BR";

    xhr.send(data);
    // xhr.onload = function() {
    //     if (xhr.status != 200) { // analyze HTTP status of the response
    //       alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    //     } else { // show the result
    //       alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    //     }
    //   };
}
translator("Hello my name is")
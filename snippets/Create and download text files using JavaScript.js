// Create and download text files using JavaScript
// https://www.amitmerchant.com/create-and-download-text-files-using-javascript/

function saveTextAsFile(textToWrite, fileNameToSaveAs, fileType) {
    let textFileAsBlob = new Blob([textToWrite], { type: fileType });
    let downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'Download File';

    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(
            textFileAsBlob
        );
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

// saveTextAsFile('Hello World!', 'hello.txt', 'text/plain');

function saveTextAsFile_(text, filename, type = "text/plain") {
    Object.assign(document.createElement('a'), {
         download: filename,
         href: URL.createObjectURL(new Blob([text], { type }))
    }).click();
}

// saveTextAsFile_('Hello World!', 'hello.txt', 'text/plain');
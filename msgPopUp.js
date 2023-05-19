chrome.extension.onRequest.addListener(
    function(prediction){
    if (prediction == 1){
        alert("Warning: Phishing detected!! Phishing sites pretend to be other websites to trick you.");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
}
);

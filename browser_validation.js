 browser = {};
if (/(Edge\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(chrome\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(firefox\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(MSIE\ [0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(MSIE\ [0-9]{1})/i)[0].split(" ")[0];
    alert("The Leeds Lab has only been tested on on Chrone, Firefox and Edge");
    browser.version = parseInt(navigator.userAgent.match(/(MSIE\ [0-9]+)/i)[0].split(" ")[1]);
} else if (/(Opera\/[0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[1]);
    alert("The Leeds Lab has only been tested on on Chrone, Firefox and Edge");
} else if (/(Trident\/[7]{1})/i.test(navigator.userAgent)) {
    browser.agent = "MSIE";
    browser.version = 11;
    alert("Failed Browser Detection: The Leeds Lab does not support Internet Explorer, please use Chrome, Firefox or Edge. Please speak to Jordan if you're having difficulty accessing the lab");
} else {
    browser.agent = false;
    browser.version = false;
    alert("Chrone, Firefox and Edge are the only supported Browsers!");
}

if (/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "Windows";

    switch (parseFloat(navigator.userAgent.match(/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/)[0].split(" ")[2])) {
        case 6.0:
            browser.osversion = "Vista";
            break;
        case 6.1:
            browser.osversion = "7";
            break;
        case 6.2:
            browser.osversion = "8";
            break;
        default:
            browser.osversion = false;
    }
} else if (/(OS\ X\ [0-9]{2}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "OS X";
    browser.osversion = navigator.userAgent.match(/(OS\ X\ [0-9]{2}\.[0-9]{1})/)[0].split(" ")[2];
    alert("Your OS is supported (MAC OSX)");
} else if (/(Linux)/.test(navigator.userAgent)) {
    browser.os = "Linux";
    browser.osversion = false;


}

if (browser.agent === "MSIE" && browser.version <= 12) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "IE9 is not supported on the Leeds Lab ! You are using an UNSUPPORTED version of Internet Explorer. Use Chrome, Edge or Firefox. Please speak to Jordan if you're having issues accesing the Lab";
    newDiv.setAttribute("style", "background-color:yellow;padding:18px;");
    document.body.insertBefore(newDiv, document.body.firstChild);
} else { //TODO: Remove for Prod only added to show some flexibility and testing 
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Your session has passed the Leeds Lab browser/OS compatibility policy (" + browser.agent + " version: " + browser.version+ ") . <u>Please only open your own folder and stick to the guidelines </u> (included in the information tab). Please report issues to site admin (Jordan). <b> All services online";
    newDiv.setAttribute("style", "background-color:cyan;padding:12px;");
    document.body.insertBefore(newDiv, document.body.firstChild);
}


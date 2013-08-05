function id(elementId) {
    return document.getElementById(elementId);
}

function tag(tagName, tagNo) {
    tagNo = tagNo | 0;
    var elements = document.getElementsByTagName(tagName);
    if ( tagNo <= elements.length ) {
        return elements[tagNo];
    } else {
        return null;   
    }
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
// adapted from SFPC Cocoon Website https://github.com/SFPC/cocoon
    // load publications from google sheet, then run a callback function on the data

function loadSheetData(sheetUrl, callback) {
    $.get(sheetUrl, function(data) {
        //data enters as TSV string, we convert it into an array of JSON objects, save it in the variable 'publications' then send to callback
        callback(TSVToJSONArray(data))
    });
}
// this function will add an anchor link that jumps to the publication
function addNavigationLink(publication) {
    return `<li><a href="#${publication.urlTitle}">${publication.publicationTitle}</em> by ${publication.teacher}${TAstring}</a></li>`
}
// this creates the div html for the publication, feel free to change any of the html or class names
// data is pulled from the course object using ${}
function addPublicationDiv(publication) {
    let byline = publication.author
    let url = location.pathname.includes("publications") ? `../publications#${publication.urlTitle}` : `publications#${publication.urlTitle}`
    let titleLink = `<a href="javascript:void(0)" onclick="openPage('${publication.urlTitle}')"><span id="title">${publication.publicationTitle}</span></a>`
    if (!publication.live) titleLink = `<span id="title">${publication.publicationTitle}</span>`
    return `
    <div class="publicationDiv" id="${publication.urlTitle}">
    <img src="../publications/asset/${publication.img}" alt="${publication.imgAltText}" width="150px"/>
    <p>${titleLink}</p>
    <p>by ${byline}</p>
    </div>
  `
}
//Takes in the google sheet as a TSV and coverts it into an array of JSON objects
function TSVToJSONArray(str, delimiter = "\t") {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function(row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function(object, header, index) {
            object[header.trim()] = values[index].trim();
            return object;
        }, {});
        return el;
    });


    // return the array
    return JSON.parse(JSON.stringify(arr));
}

function openPage(hash) {
    if (location.pathname.includes("publications")) {
        location.hash = hash
        findPublicationAndLoad(hash)
    } else {
        location.hash = ""
        location.href = `/publications#${hash}`
    }
}
function hyphensToList(hyphenString, destinationSelector){
    let list = hyphenString.split("- ")
    $(destinationSelector).empty()
    list.forEach(element => {
        if(element.length > 0) $(destinationSelector).append(`<li>${element}</li>`)
    });
}

let links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i += 1) {
    if (links[i].hostname != window.location.hostname) {
        links[i].target = '_blank';
    }
}

var sentences = [
    'I sell the shadow to support the substance...',
    'I am going to keep on stinging till I arouse the conscience of America.',
    'The name has come. Sojourner, that is it. Because I am going to travel up and down the country showing the people their sins and being a sign onto them.'
],
    part,
    i = 0,
    offset = 0,
    len = sentences.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 7,
    speed = 25;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= sentences[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = sentences[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.loading').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
        return "safari"
    }
}
document.body.className = detectBrowser()
/*projects.js> Hanvinder Singh Rai> Portfolio> JavaScript for the contact page*/
// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    //  xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function() {
        //  LOADING PROCESS
        if (request.readyState === 4 ) {
            var projects = {};

            // READING JSON FILE
            projects = JSON.parse(request.responseText);

            var paragraphArray = [];
            paragraphArray = projects.paragraphs;

            // LENGHT FOR PARAGRAPHARRAY  
            var paragraphArrayLength = paragraphArray.length;

            // LOOPING PARAGRAPHARRAY
            for (var number = 0; number < paragraphArrayLength; number++) {
                var paragraph = document.getElementById("paragraph" + (number + 1));
                paragraph.innerText = paragraphArray[number];
            }

        }
    });
    request.send();

})();
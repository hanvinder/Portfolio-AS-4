
// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    //  xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../work.json', true);
    request.addEventListener('readystatechange', function() {
        //  LOADING PROCESS
        if (request.readyState === 4 ) {
            var work = {};

            // READING JSON FILE
            work = JSON.parse(request.responseText);

            var paragraphArray = [];
            paragraphArray = work.paragraphs;

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
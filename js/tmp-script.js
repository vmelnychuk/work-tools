
        var constants = {
            atlasInterchange: "http://DOMAIN/document-service-webapp/atlas-document/(DOC_ID).DOC_TYPE?preprocessing=none&AtlasTicket=TICKET_ID",
            relocated: "http://DOMAIN/document-service-webapp/wkusdefault/atlas-annotated-document/(DOC_ID).DOC_TYPE?AtlasTicket=TICKET_ID"
        }
        var eventsHandler = {
            getUrlFieldFocus: function(ev) {
                document.getElementById('url').focus(); 
            },
            getUrls: function(ev) {
                var form = document.getElementById("tool");
                var url = form["url"].value;
                if (!url) {
                    alert('Fill the URL text area');
                    return false;
                }

                var domainFinder = /(http:\/\/)([\w\.\-]*)(\/)/;
                var domain = domainFinder.exec(url)[2];

                var documentIdFinder = /(\()([\w\.\-]*)(\))/;
/*
                cells[i].innerHTML = '';
                tempLink = document.createElement('a');
                tempLink.href = currentURL;
                tempLink.target = '_blank';
                tempLink.innerHTML = currentURL;
                cells[i].appendChild(tempLink);
*/
            }
        };
        //set event handler for clear
        (function() {
            var clear = document.getElementById("clear");
            clear.addEventListener("click", eventsHandler.getUrlFieldFocus, false);
        })();
        //set event handler for getLink
        (function() {
            var getLink = document.getElementById("get_link");
            getLink.addEventListener("click", eventsHandler.getUrls, false);
        })();
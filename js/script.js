$(document).ready(function() {
  var getUrls = function(ev) {
    var form = document.getElementById("tool");
    var url = form["url"].value;
    if (!url) {
      alert('Fill the URL text area');
      return false;
    }
    var domainFinder = /(http:\/\/)([\w\.\-]*)(\/)/;
    var domain = domainFinder.exec(url)[2];
    var documentIdFinder = /(\()([\w\.\-]*)(\))/;
}
  $("#get-docs-form").submit(function(ev) {
    ev.preventDefault();
    var url = $("textarea:first").val();
    if (url === "") {
      alert('Fill the URL text area');
      return false;
    } else {
      var partsFinder = /(http:\/\/)([\w\.\-]*)(\/[\w\-]*\/)(\w*)(\/.*\/)(\()(.*)(\))(.*)(AtlasTicket=)(.*)/;
      var parts = partsFinder.exec(url);
      var domain = parts[2];
      var cfId = parts[4];
      var documentId = parts[7];
      var atlasTicket = parts[11];
      $("#domain").val(domain);
      $("#doc-id").val(documentId);
      $("#cf-id").val(cfId);
      $("#atlas-ticket").val(atlasTicket);
    }
  });
  $("#parts-form").submit(function(ev) {
    ev.preventDefault();
    var documentLink = 'http://' + $("#domain").val() 
                       + '/document-service-webapp/atlas-document/(' + $("#doc-id").val()
                       + ').xml?preprocessing=none&AtlasTicket=' + $("#atlas-ticket").val();
    var relocatedDocumentLink = 'http://' + $("#domain").val()
                                + '/document-service-webapp/' + $("#cf-id").val()
                                + '/atlas-annotated-document/(' + $("#doc-id").val()
                                + ').xml?AtlasTicket=' + $("#atlas-ticket").val();
    $("#document-link").val(documentLink);
    $("#relocation-link").val(relocatedDocumentLink);
  });
  $("#fs-path-form").submit(function(ev) {
    ev.preventDefault();
    var fsPath = $("#fs-link").val();
    if (fsPath === "") {
      alert('Fill the fs path');
      return false;
    } else {
      var fsPathPartsFinder = /(\\[\\|\w|\-]*)(\\.*)(\\.*)(\.xml)/;
      var fsPathParts = fsPathPartsFinder.exec(fsPath);
      var publicDir = fsPathParts[2].slice(1);
      var docId = fsPathParts[3].slice(1);
      $("#public-dir").val(publicDir);
      $("#fs-doc-id").val(docId);
    }
  });
  $("#fs-parts-form").submit(function(ev) {
    ev.preventDefault();
    var publicDir = $("#public-dir").val();
    var docId = $("#fs-doc-id").val();
    var urlNormalBegin = "http://localhost:8888/test/documents/(";
    var urlRelocatedBegin = "http://localhost:8888/test/atlas-preprocessed-document/(";
    var dirAndDoc = publicDir + "/" + docId;
    var relocatedUrl = urlRelocatedBegin + dirAndDoc + ").xml";
    var xmlUrl = urlNormalBegin + dirAndDoc + ").xml";
    var htmlUrl = urlNormalBegin + dirAndDoc + ").html";
    var foUrl = urlNormalBegin + dirAndDoc + ").fo";
    var pdfUrl = urlNormalBegin + dirAndDoc + ").pdf";
    var rtfUrl = urlNormalBegin + dirAndDoc + ").rtf";
    var mailUrl = urlNormalBegin + dirAndDoc + ").html?action=mail";
    var printUrl = urlNormalBegin + dirAndDoc + ").html?action=print";
  });
});
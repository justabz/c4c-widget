
/**
 * Developer: Thabiso Mokaba.
 * Contact Email: thabiso.mokaba.bcx.co.za
 * Name: Outbound object.
 */


var parameters = {
    "ANI": "0823451234",
    "ExternalReferenceID": "CAID234234334",
    "DNIS": "08004321234"
};

function inboundCall() {

    console.log('Passed', 'inbound is working '+ parameters)

   function  _formXMLPayload (parameters) {
        var sPayload = "<?xml version='1.0' encoding='utf-8' ?> <payload> ";
        for (var key in parameters) {
            var tag = "<" + key + ">" + parameters[key] + "</" + key + ">";
            sPayload = sPayload + tag;
        }
        sPayload = sPayload + "</payload>";
        return sPayload;
    };

    var sendIncomingCalltoC4C = function (parameters) {
        var payload = _formXMLPayload(parameters);
        _doCall(payload);
    };

    sendIncomingCalltoC4C(parameters);

     function _doCall  (sPayload) {
        window.parent.postMessage(sPayload, "*");
        document.getElementById('OutCall').value = 'Incoming' + parameters.ANI;    
    };
}
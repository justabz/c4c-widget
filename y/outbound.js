
/**
 * Developer: Thabiso Mokaba.
 * Contact Email: thabiso.mokaba.bcx.co.za
 * Name: Outbound object.
 */

var outboundCall = {

    init : function(){
        this._addOnMessageEvent();
    },
    
    _addOnMessageEvent : function() {
    
        if (window.addEventListener) {
    
            window.addEventListener("message", this._onMessage, false);
    
        } else {
            window.attachEvent("onmessage",this._onMessage);
        }
    },

    _onMessage : function(event){
        var phoneNumber = event.data.PhoneNumber
        var user = event.data.LoggedInUserID
        console.log('Outbound Working, User '+ user + ' is calling' + phoneNumber);
        document.getElementById('OutCall').value = 'Calling' + phoneNumber;    
    },
}

outboundCall.init();
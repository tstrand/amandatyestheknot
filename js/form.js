$('#input-form').one('submit',function(){
    var qname = "entry.796812411";
    var qattend = "entry.38703999";
    var qmsg = "entry.1510539594";
    
    var inputq1 = encodeURIComponent($('#input-q1').val());
    var inputq2 = encodeURIComponent($('#input-q2').val());
    var inputq3 = encodeURIComponent($('#input-q2').val());

    var baseURL = 'https://docs.google.com/forms/d/1yWEoze848f-yMqLgmSNMcY5y-sDghPJ-CYjHuFVL2Hk/formResponse?';
    
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;
    $('#input-feedback').text('Thank You!');
});
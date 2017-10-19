$(document).ready(function(){
    $('#previewAndCustomize').on('click', function(){
        var url = window.location.href;

      //  CONVERT.init(url);
    });




    var ACCESS_PARAMETRS = {

        url: "http://api.pdflayer.com/api/convert",
        access_key: "ef438e852ab39a41bc016c02ba6cedf1"


    };

    var CONVERT = {
        init: function(link){
            CONVERT.convertMethod(link);
        },

        convertMethod: function(url){

            var data = {


                access_key:  ACCESS_PARAMETRS.access_key,
                document_url: url ,
                inline: "1",
                delay: 10000

            };

            CONVERT.requestTemp(data);

        },

        requestTemp: function(data){

            $.ajax(ACCESS_PARAMETRS.url, {

                dataType: "json",
                data: data,
                complete: CONVERT.renderTemp(data.document_url)
            });
        },

        renderTemp: function(ur){
            window.location.href = "http://api.pdflayer.com/api/convert?access_key=67cf67ded4601ce0408b506b4a9436eb&document_url=" +ur + "&inline=1&delay=10000";
         //   http://api.pdflayer.com/api/convert?access_key=ef438e852ab39a41bc016c02ba6cedf1&document_url=https://pdflayer.com/downloads/invoice.html&inline=1&delay=1000

        }


    };
});
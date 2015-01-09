Handlebars.registerHelper('PubMed',function(pmids){
 
    var out='';
    for(var i in pmids){
        var pmid=pmids[i];
        var pub=this.result[pmid];
        
        out += '<p><a href="http://www.ncbi.nlm.nih.gov/pubmed/?term=' + pmid + '[uid]">' + pub.authors[0].name;
        if(1===pub.authors.length){
            out += '.';
        }else{
            out += ', et. al.';
        }
        out += ' <cite>'+pub.title+'</cite> ' + pub.source + '. ' + pub.pubdate + '.</a></p>';
    }
    return out;

});


(function(env){
    "use strict";
    env.ddg_spice_pub_med=function(api_result){
        if(api_result.error){
            return Spice.failed('pub_med');
        }
        
        Spice.add({
            id:'pub_med',
            name:'PubMed',
            data:api_result,
            meta:{
                sourceName:'eutils.ncbi.nlm.nih.gov',
                //sourceURL:'http://someplace.com/'
            },
            templates:{
                group:'base',
                options:{
                    content:Spice.pub_med.content,
                    //moreAt:true
                }
            }
        });
    }
}(this));

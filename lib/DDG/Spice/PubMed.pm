package DDG::Spice::PubMed;
# ABSTRACT: Farting around

use warnings;
use strict;
use DDG::Spice;

# http://www.ncbi.nlm.nih.gov/books/NBK25501/

triggers startend=>qw/pubmed pmid pmids/;
spice to => 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=$1&retmode=json';
spice wrap_jsonp_callback => 1;

handle remainder => sub{
    return if !$_;
    # We only want items that are all digits
    my @pmids=map{
        m/^\d+$/?$_:();
    }split(m/\s+/);
    return if(0==scalar(@pmids));
    return join(' ',@pmids);
};

1;

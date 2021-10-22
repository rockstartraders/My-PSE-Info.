


// instance for FAB 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true,     
            
    });
  });


  var fab_btn = document.getElementById('fab_btn');


  // this is for the MODA
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });


  // for Modal BTN 


  var mdl_btn = document.getElementById('mdl_btn');
  var modal_text = document.getElementById('modal_text');
  var modal_log = document.getElementById('modal_log');


// for tradingview chart 

var trading_view = document.getElementById('trading_view');
var card_for_indices = document.getElementById('card_for_indices');


// for version check 

var version = document.getElementById('version');

// GLOBAL SCOPE 
var loading = document.getElementById('loading');  // remove display then will revert back
var loading_message = document.getElementById('loading_message');  // loading message
var sub_heading_date = document.getElementById('sub_heading_date');  // remove display then will revert back

// div to handle body for all.js function
var card_for_all_pse = document.getElementById('card_for_all_pse');

// error catcher
var error_catcher = document.getElementById('error_catcher');



// for search 

var search = document.getElementById('search');
var search_icon = document.getElementById('search_icon');
var nav_wrapper = document.getElementById('nav_wrapper');
var source = document.getElementById('source');


// clear variables
var close_clear = document.getElementById('close_clear');
var close_clear_icon = document.getElementById('close_clear_icon');

var Find_text = document.getElementById('Find_text');

var get_code = document.getElementById('get_code');

// for search section / function 

var fallback_finder = document.getElementById('fallback');  // for fall back before catch statement kick in 
var search_date_as_of = document.getElementById('search_date_as_of');
var ticker_symbol = document.getElementById('ticker_symbol');
var ticker_name = document.getElementById('ticker_name');

var search_amount = document.getElementById('search_amount');
var search_change = document.getElementById('search_change');
var search_volume = document.getElementById('search_volume');

var parse_company_info = document.getElementById('parse_company_info');
var comp_address_1 = document.getElementById('comp_address_1');
var comp_address_2 = document.getElementById('comp_address_2');
var comp_address_3 = document.getElementById('comp_address_3');
var comp_address_4 = document.getElementById('comp_address_4');
var comp_tel = document.getElementById('comp_tel');


// this is the div to display search result

var card_container = document.getElementById('card_container');
var code_not_found = document.getElementById('code_not_found');





var pse_ticker = ["2GO", "8990B", "8990P", "AB", "ABA", "ABG", "ABS", "ABSP", "AC", "ACE", "ACEN", "ACEX", "ACPB1", "ACR", "AEV", "AGI", "ALCO", "ALI", "ALLHC", "ANI", "ANS", "AP", "APC", "APL", "APO", "APVI", "APX", "ARA", "AREIT", "AT", "ATI", "ATN", "AXLM", "BC", "BCB", "BCOR", "BDO", "BEL", "BHI", "BLOOM", "BPI", "BRN", "BSC", "C", "CAT", "CDC", "CEB", "CEBCP", "CEI", "CHIB", "CHP", "CIC", "CLI", "CNPF", "CNVRG", "COAL", "COL", "COSCO", "CPG", "CPGP", "CPM", "CROWN", "DD", "DDMPR", "DDPR", "DELM", "DFNN", "DITO", "DMC", "DMPA2", "DMW", "DNL", "DWC", "EAGLE", "ECP", "EEI", "ELI", "EMP", "EURO", "EVER", "EW", "FB", "FDC", "FERRO", "FGEN", "FILRT", "FLI", "FMETF", "FNI", "FOOD", "FPH", "FRUIT", "GEO", "GERI", "GLO", "GMA7", "GMAP", "GREEN", "GSMI", "GTCAP", "GTPPA", "GTPPB", "HI", "HLCM", "HOME", "HOUSE", "HVN", "I", "ICT", "IDC", "IMI", "IMP", "ION", "IPM", "IPO", "IRC", "JFC", "JGS", "KEP", "KPH", "KPPI", "LAND", "LBC", "LC", "LCB", "LFM", "LMG", "LODE", "LPZ", "LR", "LRW", "LTG", "MA", "MAB", "MAC", "MAH", "MAHB", "MARC", "MAXS", "MB", "MBC", "MBT", "MEG", "MER", "MG", "MJC", "MM", "MONDE", "MPI", "MRC", "MRSGI", "MVC", "MWC", "MWIDE", "MWP", "MWP2B", "NI", "NIKL", "NOW", "NRCP", "OPM", "OPMB", "ORE", "OV", "PA", "PAX", "PBB", "PCOR", "PERC", "PGOLD", "PHA", "PHES", "PHN", "PHR", "PIZZA", "PLC", "PMPC", "PNB", "PNX", "PNX3B", "PNX4", "PPC", "PRF2B", "PRF3A", "PRF3B", "PRIM", "PRMX", "PSB", "PX", "PXP", "RCB", "RCI", "RFM", "RLC", "RLT", "ROCK", "ROX", "RRHI", "SBS", "SCC", "SECB", "SEVN", "SFI", "SFIP", "SGI", "SHLPH", "SHNG", "SLI", "SM", "SMC", "SMC2C", "SMC2E", "SMC2F", "SMC2H", "SMC2I", "SMC2J", "SMC2K", "SMPH", "SPC", "SPM", "SSI", "SSP", "STI", "STR", "SUN", "T", "TBGI", "TECH", "TECHW", "TEL", "TFHI", "TUGS", "UBP", "UPM", "URC", "VITA", "VLL", "VUL", "VMC", "VVT", "WEB", "WIN", "WLCON", "WPI", "ZHI"];
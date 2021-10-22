
// end of autocomplete js

window.onload = function(){

    search.value = '';  // clear text     
    search.style.display = "none";
    Find_text.style.display ="block";
    close_clear_icon.style.display = "none";  // remove the x button 
    search_icon.style.display = "block"; 

} // end of onload event 


// // to clear whatever text 
document.getElementById('close_clear_icon').addEventListener('click', function (){

   
    search.value = '';  // clear text     
    search.style.display = "none";
    Find_text.style.display ="block";
    close_clear_icon.style.display = "none";  // remove the x button 
    search_icon.style.display = "block"; 

      

})// this is for x or clear button


// this is the search fiedl after click 
search_icon.addEventListener('click', function (){
       search.style.display = "block";
       close_clear_icon.style.display = "block";  // this will shows the x button when click the field
       search_icon.style.display = "block"; 
     


      
   
 

})// end of click 



search.addEventListener('input', function (evt) {
    var field_box = this.value;

    if(field_box  !== ""){
        Find_text.style.display ="none";
        close_clear_icon.style.display = "block";  // this will shows the x button when click the firld
     

    }else{
        Find_text.style.display ="block";
        close_clear_icon.style.display = "none";  // this will remove the x button when click the field       
        search_icon.style.display = "block";  // search Icon to display
        
        
    } }); // of of this event | this will show and hide title if search box is empty




// enter key event 

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs    
        
        var pse_val = search.value; 
        var pse_val_compare = pse_ticker.includes((pse_val).toUpperCase().trim()); // will compare value vs. list of code from array and should be case sensitive
     
     

        if (pse_val_compare === true) {            // fetch info of search 


             // this will clear divs for another search 

            code_not_found.innerHTML = ""; 
            error_catcher.innerHTML = ""; 
            search_date_as_of.innerHTML = "";  // date and convert via MOMENT JS
            ticker_symbol.innerHTML = "";
            ticker_name.innerHTML = "";
            search_amount.innerHTML = "";
            search_change.innerHTML = "";
            search_volume.innerHTML = "";
            parse_company_info.innerHTML = "";
            comp_address_1.innerHTML = "";
            comp_address_2.innerHTML = "";
            comp_address_3.innerHTML = "";
            comp_address_4.innerHTML = "";
            comp_tel.innerHTML = "";
            source.innerHTML = "";

            pse_search_finder();


        } else {
            navigator.vibrate(1000);
            loading.style.display = "none";   // remove loader 
            loading_message.style.display = "none";   // remove loader text 
            card_container.style.display = "none";
            close_clear_icon.click();  // this is to clear the dro[dows from datalist 
            code_not_found.innerHTML = "NO DATA FOUND";
            // var toastHTML = `<span id="toast_message">NO DATA FOUND</span>`;
            // M.toast({html: toastHTML});
        }  // end of if else

    
    }
} // end of enter click handler 











  // function to fetch and search using PSE code


async function pse_search_finder(){

try {


    card_container.style.display = "none";
    loading.style.display = "block";   // to display loading while fetching
    loading_message.innerHTML = "Searching";  // text instead of loading
    loading_message.style.display = "block"; // to display loading text 


    var pse_val = search.value.toUpperCase().trim();  // upper case and remove white space at the end
    close_clear_icon.click();  // will clear suggestion if any 

    // this is for web scraping

    //https://www.marketwatch.com/investing/stock/dd/company-profile?countrycode=ph&mod=mw_quote_tab
    // https://frames.pse.com.ph/security/wlcon
    //https://api.allorigins.win/raw?url=
    // https://www.barrons.com/market-data/stocks/tel/company-people?countryCode=ph   == new 
    // https://www.barrons.com/quote/stock/ph/xphs/${pse_val}/company-people?mod=quotes  == default
    var company_scrape = await fetch(`https://www.marketwatch.com/investing/stock/${pse_val}/company-profile?countrycode=ph&mod=mw_quote_tab`);
    var company_info = await company_scrape.text();
    const parser = new DOMParser();
    const parsedocument = parser.parseFromString(company_info, "text/html");


    var pse_search = await fetch(`https://phisix-api4.appspot.com/stocks/${pse_val}.json`);  // find api and get data 
    var pse_search_result = await pse_search.json();   // result to JSON 

    

 
    var company_info_description =  parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--primary > div.element.element--description.description__long > p").textContent;
    var comp_address_first = parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--aside > div.group.left > div > div > div.address > div:nth-child(1)").textContent;
    var comp_address_second =parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--aside > div.group.left > div > div > div.address > div:nth-child(2)").textContent;
    var comp_address_three = parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--aside > div.group.left > div > div > div.address > div:nth-child(3)").textContent;
    var comp_address_four = parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--aside > div.group.left > div > div > div.address > div:nth-child(4)").textContent;
    var comp_address_tel = parsedocument.querySelector("#maincontent > div.region.region--primary > div.column.column--aside > div.group.left > div > div > div.phone > span").textContent;

    // for display variables derived from API 

    var date_as_of = await pse_search_result.as_of;
    var symbol = await pse_search_result.stock[0].symbol;
    var name = await pse_search_result.stock[0].name;
    var price = await pse_search_result.stock[0].price.amount;
    var volume = await pse_search_result.stock[0].volume;
    var percent_change = await pse_search_result.stock[0].percent_change;


    

    if (percent_change > 0 ) {

        // card_container.innerHTML = `
           
    search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
    ticker_symbol.innerHTML = symbol;
    ticker_name.innerHTML = name;
    search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
    search_change.innerHTML = `<span id="gainers">+${percent_change}</span>`;
    search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
        notation: "compact",
        compactDisplay: "short"
      }).format(volume);;
    parse_company_info.innerHTML = company_info_description;
    comp_address_1.innerHTML = comp_address_first;
    comp_address_2.innerHTML = comp_address_second;
    comp_address_3.innerHTML = comp_address_three;
    comp_address_4.innerHTML = comp_address_four; 
    comp_tel.innerHTML = comp_address_tel;
        
       
       
       
        // `// end of String Literal for IF 
        
    } // end of IF statement


    else if (percent_change < 0) {

    search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
    ticker_symbol.innerHTML = symbol;
    ticker_name.innerHTML = name;
    search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
    search_change.innerHTML = `<span id="losers">${percent_change}</span>`;
    search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
        notation: "compact",
        compactDisplay: "short"
      }).format(volume);;
    parse_company_info.innerHTML = company_info_description;
    comp_address_1.innerHTML = comp_address_first;
    comp_address_2.innerHTML = comp_address_second;
    comp_address_3.innerHTML = comp_address_three;
    comp_address_4.innerHTML = comp_address_four;
    comp_tel.innerHTML = comp_address_tel;
        
    } // end of else if statement 
    else {
    search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
    ticker_symbol.innerHTML = symbol;
    ticker_name.innerHTML = name;
    search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
    search_change.innerHTML = percent_change;
    search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
        notation: "compact",
        compactDisplay: "short"
      }).format(volume);;
    parse_company_info.innerHTML = company_info_description;
    comp_address_1.innerHTML = comp_address_first;
    comp_address_2.innerHTML = comp_address_second;
    comp_address_3.innerHTML = comp_address_three;
    comp_address_4.innerHTML = comp_address_four;
    comp_tel.innerHTML = comp_address_tel;
    } // end of else statement 





    

    loading.style.display = "none";   // remove loader 
    loading_message.style.display = "none";   // remove loader text  
    card_container.style.display = "block";    
    source.innerHTML = `Source: ` + `
    <a href="#!" class="modal-close" id="mdl_agree" onclick="window.open('https://www.marketwatch.com', '_system'); return false;"> www.marketwatch.com</a>`;
    
    
       
    
} catch (error) {   
  fallback_finder.innerHTML = pse_val;
  pse_search_fallback(); 
  } // end of catch 


} // end of pse_search_finder

 







// this is the function for callback if error started via first function which is pse_search_finder();


async function pse_search_fallback(){ 

 

  try {


    card_container.style.display = "none";
    loading.style.display = "block";   // to display loading while fetching
    loading_message.innerHTML = "Searching";  // text instead of loading
    loading_message.style.display = "block"; // to display loading text 


    var fallback_pseval = fallback_finder.textContent;
    var pse_val = fallback_pseval.toUpperCase().trim();  // upper case and remove white space at the end



       // this is for web scraping
  
      //https://www.marketwatch.com/investing/stock/dd/company-profile?countrycode=ph&mod=mw_quote_tab
      // https://frames.pse.com.ph/security/wlcon
      //https://api.allorigins.win/raw?url=
      // https://www.barrons.com/market-data/stocks/tel/company-people?countryCode=ph   == new 
      // https://www.barrons.com/quote/stock/ph/xphs/${pse_val}/company-people?mod=quotes  == default
      var company_scrape = await fetch(`https://frames.pse.com.ph/security/${pse_val}`);
      var company_info = await company_scrape.text();
      const parser = new DOMParser();
      const parsedocument = parser.parseFromString(company_info, "text/html");
  
  
      var pse_search = await fetch(`https://phisix-api4.appspot.com/stocks/${pse_val}.json`);  // find api and get data 
      var pse_search_result = await pse_search.json();   // result to JSON 
  
      
    
   
      var company_info_description =  parsedocument.querySelector("#security_profile > div > div.col-12.px-0.d-flex.justify-content-between.flex-md-row.flex-column > div.col.px-0.profile-border.mr-md-2 > div.col-12.px-3.historical-body > div:nth-child(1) > p:nth-child(1)").textContent;
      var comp_address_first = parsedocument.querySelector("#security_profile > div > div.col-12.px-0.d-flex.justify-content-between.flex-md-row.flex-column > div.col.px-0.ml-md-2 > div.col-12.px-0.profile-border.mt-3 > div.col-12.px-3.historical-body > table > tbody > tr:nth-child(1) > td").textContent;
      var comp_address_tel = parsedocument.querySelector("#security_profile > div > div.col-12.px-0.d-flex.justify-content-between.flex-md-row.flex-column > div.col.px-0.ml-md-2 > div.col-12.px-0.profile-border.mt-3 > div.col-12.px-3.historical-body > table > tbody > tr:nth-child(2) > td").textContent;
  
      // for display variables derived from API 
  
      var date_as_of = await pse_search_result.as_of;
      var symbol = await pse_search_result.stock[0].symbol;
      var name = await pse_search_result.stock[0].name;
      var price = await pse_search_result.stock[0].price.amount;
      var volume = await pse_search_result.stock[0].volume;
      var percent_change = await pse_search_result.stock[0].percent_change;
  
  
      
  
      if (percent_change > 0 ) {
  
          // card_container.innerHTML = `
             
      search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
      ticker_symbol.innerHTML = symbol;
      ticker_name.innerHTML = name;
      search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
      search_change.innerHTML = `<span id="gainers">+${percent_change}</span>`;
      search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
          notation: "compact",
          compactDisplay: "short"
        }).format(volume);;
      parse_company_info.innerHTML = company_info_description;
      comp_address_1.innerHTML = comp_address_first;      
      comp_tel.innerHTML = comp_address_tel;
     
          
         
         
         
          // `// end of String Literal for IF 
          
      } // end of IF statement
  
  
      else if (percent_change < 0) {
  
      search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
      ticker_symbol.innerHTML = symbol;
      ticker_name.innerHTML = name;
      search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
      search_change.innerHTML = `<span id="losers">${percent_change}</span>`;
      search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
          notation: "compact",
          compactDisplay: "short"
        }).format(volume);;
      parse_company_info.innerHTML = company_info_description;
      comp_address_1.innerHTML = comp_address_first;      
      comp_tel.innerHTML = comp_address_tel;
     
          
      } // end of else if statement 
      else {
      search_date_as_of.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS
      ticker_symbol.innerHTML = symbol;
      ticker_name.innerHTML = name;
      search_amount.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(price) + " /SHR"; 
      search_change.innerHTML = percent_change;
      search_volume.innerHTML = new Intl.NumberFormat('en-GB', {
          notation: "compact",
          compactDisplay: "short"
        }).format(volume);;
      parse_company_info.innerHTML = company_info_description;
      comp_address_1.innerHTML = comp_address_first;    
      comp_tel.innerHTML = comp_address_tel;
     
      } // end of else statement 
  
  
  
      
  
      loading.style.display = "none";   // remove loader 
      loading_message.style.display = "none";   // remove loader text  
      card_container.style.display = "block";

      // this is for the source
      source.innerHTML = `Source: ` + `
      <a href="#!" class="modal-close" id="mdl_agree" onclick="window.open('https://www.pse.com.ph/', '_system'); return false;"> www.pse.com.ph</a>`;
    
     
  
      



    
  } catch (error) {
   
    navigator.vibrate(1000);
    loading.style.display = "none";   // remove loader 
    loading_message.style.display = "none";   // remove loader text 
    card_container.style.display = "none";
    var toastHTML = `<span id="toast_message">Unexpected Error</span>`;
    M.toast({html: toastHTML});
    error_catcher.innerHTML += `
    
    <div class="row">
    <div class="col s12 m4 l2" id="img_holder">      
      <div class="card blue-grey darken-1 z-depth-0" id="error_img">      
        <div class="card-content">
          <img class="responsive-img" src="../img/catch_image.png">           
          <p id="error_msg">An Error Occurred</p>         
          <p id="error_msg">Please Try Again Later</p>
          <br>               
          <p id="error_code">Unable To Find Company Information</p> <!--losers because the color code is red-->
          <!-- COntent Here-->                 
        </div>           
      </div>   
    </div>
  </div>       
    
    `; // Error handler 
  } // end of catch 
  
} // end of pse_search_fallback()




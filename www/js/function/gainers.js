
  // funnction onload 

  window.onload = async function(){

    try {

      loading.style.display = "block";   // to display loading while fetching
      loading_message.style.display = "block"; // to display loading text 


      // start here test

      var all = await fetch('https://phisix-api4.appspot.com/stocks.json');
      var all_pse = await all.json();

     
     
      
      // var without_PSEi = delete all_pse.stock[239] && delete all_pse.stock[240] && delete all_pse.stock[241] && delete all_pse.stock[242] && delete all_pse.stock[243] && delete all_pse.stock[244] && delete all_pse.stock[245] && delete all_pse.stock[246];   // remove the last index because it will be on a separate block

      var all_stock = await all_pse.stock;


      var count = Object.keys(all_stock).length;  // to get the total lenght then subtract 

      delete all_pse.stock[count -1]  // subtract from lenght then delete from JSON
      delete all_pse.stock[count -2]
      delete all_pse.stock[count -3]
      delete all_pse.stock[count -4]
      delete all_pse.stock[count -5]
      delete all_pse.stock[count -6]
      delete all_pse.stock[count -7]
      delete all_pse.stock[count -8]



      all_stock.sort(function(a, b){
        return b.percent_change - a.percent_change;
        });  // working  sor of JSONAPI 
        
      var as_of = await all_pse.as_of;  // date 
      var all_ticker = Object.values(all_stock);  // this one display the values without the other psei components 


      sub_heading_date.innerHTML = "As of " + moment(as_of).calendar();   // time and date of PSE posting
 
         // // function to fetch ALL DATA in PSE API
      all_ticker.forEach(async function (all_in_pse) {    
        
        

        var all_symbol_in_pse = await all_in_pse.symbol;   // PSE symbol ALL 
        var all_name_in_pse = await all_in_pse.name;   // PSE names ALL 
        var all_price_in_pse = await all_in_pse.price.amount;   // PSE current amount
        var all_percentage_change = await all_in_pse.percent_change;   // PSE change in percentage


 
        if (all_percentage_change > 0) {       
    
         
         
          card_for_all_pse.innerHTML +=          `
          
                <div class="row">
                <div class="col s12 m12 l12">      
                  <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                    <div class="card-content white-text">

                      <p id="ticker_symbol">${all_symbol_in_pse}</p>
                      <p id="ticker_name">${all_name_in_pse}</p>
                      <p id="ticker_price">₱ ${all_price_in_pse} /Share</p>
                      <p id="ticker_percent"> <span id="gainers">+${all_percentage_change}%</span></p>       

                      <!-- COntent Here-->                 
                    </div>           
                  </div>
                </div>
              </div>
          
          `; // end gainers
          
        } // end of IF statement 
        




        // DISPLAY FUNCTIONS


        loading.style.display = "none";   // remove loader 
        loading_message.style.display = "none";   // remove loader text 
        card_for_all_pse.style.display = "block";   // to display after loader is gone
        

      }) // end of for each API for PSE.


      
    }catch (error) {
     
       
      navigator.vibrate(1000);
      loading.style.display = "none";   // remove loader 
      loading_message.style.display = "none";   // remove loader text 
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
            <p id="error_code">${error}</p> <!--losers because the color code is red-->
            <!-- COntent Here-->                 
          </div>           
        </div>   
      </div>
    </div>       
      
      `; // Error handler 
    } // end of catch 
  } // end of onlad event 



 
  setInterval(function(){ 
    var toastHTML = `<span id="toast_message_update">Updating</span>`;
      M.toast({html: toastHTML, completeCallback: function(){window.location.reload()}});       
  }, 180000);





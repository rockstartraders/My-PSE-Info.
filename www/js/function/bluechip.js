// funnction onload

window.onload = async function () {

  try {

    loading.style.display = "block"; // to display loading while fetching
    loading_message.style.display = "block"; // to display loading text

   
    // variables for bluechips 

      var ac_ = await fetch("https://phisix-api4.appspot.com/stocks/AC.json");
      var ac = await ac_.json();  // AYALA Corp 

      var aev_ = await fetch("https://phisix-api4.appspot.com/stocks/AEV.json");
      var aev = await aev_.json();  // Aboitiz 

      var agi_ = await fetch("https://phisix-api4.appspot.com/stocks/AGI.json");
      var agi= await agi_.json();  // Alliance Global

      var ali_ = await fetch("https://phisix-api4.appspot.com/stocks/ALI.json");
      var ali= await ali_.json();  // Ayala Land
      
      var ap_ = await fetch("https://phisix-api4.appspot.com/stocks/AP.json");
      var ap= await ap_.json();  // Aboitiz Power

      var bdo_ = await fetch("https://phisix-api4.appspot.com/stocks/BDO.json");
      var bdo = await bdo_.json();  // BDO Bank 

      var bloom_ = await fetch("https://phisix-api4.appspot.com/stocks/BLOOM.json");
      var bloom = await bloom_.json();  // Bloomberry

      var bpi_ = await fetch("https://phisix-api4.appspot.com/stocks/BPI.json");
      var bpi = await bpi_.json();  // BPI bank

      var dmc_ = await fetch("https://phisix-api4.appspot.com/stocks/DMC.json");
      var dmc = await dmc_.json();  // DMCI Holdings

      var fgen_ = await fetch("https://phisix-api4.appspot.com/stocks/FGEN.json");
      var fgen = await fgen_.json();  // First GEN

      var glo_ = await fetch("https://phisix-api4.appspot.com/stocks/GLO.json");
      var glo = await glo_.json();  // GLOBE TEL 

      var gtcap_ = await fetch("https://phisix-api4.appspot.com/stocks/GTCAP.json");
      var gtcap = await gtcap_.json();  // GT CAPITAL

      var ict_ = await fetch("https://phisix-api4.appspot.com/stocks/ICT.json");
      var ict = await ict_.json();  // ICT 

      var jfc_ = await fetch("https://phisix-api4.appspot.com/stocks/JFC.json");
      var jfc = await jfc_.json();  // JOLLIBEE FOODS 

      var jgs_ = await fetch("https://phisix-api4.appspot.com/stocks/JGS.json");
      var jgs = await jgs_.json();  // JG SUMMIT 

      var ltg_ = await fetch("https://phisix-api4.appspot.com/stocks/LTG.json");
      var ltg = await ltg_.json();  // LT GROUP 

      var mbt_ = await fetch("https://phisix-api4.appspot.com/stocks/MBT.json");
      var mbt = await mbt_.json();  // METRO BANK 

      var meg_ = await fetch("https://phisix-api4.appspot.com/stocks/MEG.json");
      var meg = await meg_.json();  // MEG 

      var mer_ = await fetch("https://phisix-api4.appspot.com/stocks/MER.json");
      var mer = await mer_.json();  // MERALCO 

      var mpi_ = await fetch("https://phisix-api4.appspot.com/stocks/MPI.json");
      var mpi = await mpi_.json();  // METRO PACIFIC 

      var pgold_ = await fetch("https://phisix-api4.appspot.com/stocks/PGOLD.json");
      var pgold = await pgold_.json();  // PUREGOLD 

      var rlc_ = await fetch("https://phisix-api4.appspot.com/stocks/RLC.json");
      var rlc = await rlc_.json();  // Robinsons Land

      var rrhi_ = await fetch("https://phisix-api4.appspot.com/stocks/RRHI.json");
      var rrhi = await rrhi_.json();  // ROBINSONS RTL

      var scc_ = await fetch("https://phisix-api4.appspot.com/stocks/SCC.json");
      var scc = await scc_.json();  // Semirara Mining

      var secb_ = await fetch("https://phisix-api4.appspot.com/stocks/SECB.json");
      var secb = await secb_.json();  // Security Bank 

      var sm_ = await fetch("https://phisix-api4.appspot.com/stocks/SM.json");
      var sm = await sm_.json();  // SM Investment 

      var smc_ = await fetch("https://phisix-api4.appspot.com/stocks/SMC.json");
      var smc = await smc_.json();  // San Miguel 

      var smph_ = await fetch("https://phisix-api4.appspot.com/stocks/SMPH.json");
      var smph = await smph_.json();  // SM PRIME HOLDING 

      var tel_ = await fetch("https://phisix-api4.appspot.com/stocks/TEL.json");
      var tel = await tel_.json();  // PLDT 

      var urc_ = await fetch("https://phisix-api4.appspot.com/stocks/URC.json");
      var urc= await urc_.json();  // UNIVERSAL ROBINA 






      var bluechips = {
              ac,
              aev,
              agi,
              ali,
              ap,
              bdo,
              bloom,
              bpi,
              dmc,
              fgen,
              glo,
              gtcap,
              ict,
              jfc,
              jgs,
              ltg,
              mbt,
              meg,
              mer,
              mpi,
              pgold,
              rlc,
              rrhi,
              scc,
              secb,
              sm,
              smc,
              smph,
              tel,
              urc,
        };  // end of Blue chips Variables 

             


        var as_of = await ac.as_of;  // date 
        sub_heading_date.innerHTML = "As of " + moment(as_of).calendar();   // time and date of PSE posting


        var all_bluechips = Object.values(bluechips);  // this one display the values without the other psei components    
        all_bluechips.forEach(async function (all_in_pse) {    

          var all_symbol_in_pse = await all_in_pse.stock[0].symbol;   // PSE symbol ALL
          var all_name_in_pse = await all_in_pse.stock[0].name;   // PSE names ALL 
          var all_price_in_pse = await all_in_pse.stock[0].price.amount;   // PSE current amount
          var all_percentage_change = await all_in_pse.stock[0].percent_change;   // PSE change in percentage




         if (all_percentage_change > 0) {        
         
            card_for_all_pse.innerHTML +=
            `
            
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
            
          } else if (all_percentage_change == 0) {
            card_for_all_pse.innerHTML +=
            `
            
                  <div class="row">
                  <div class="col s12 m12 l12">      
                    <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                      <div class="card-content white-text">
  
                        <p id="ticker_symbol">${all_symbol_in_pse}</p>
                        <p id="ticker_name">${all_name_in_pse}</p>
                        <p id="ticker_price">₱ ${all_price_in_pse} /Share</p>
                        <p id="ticker_percent"> <span id="zero">${all_percentage_change}%</span></p>       
  
                        <!-- COntent Here-->                 
                      </div>           
                    </div>
                  </div>
                </div>
            
            `; // end zero
          } else{
            card_for_all_pse.innerHTML +=
            `
            
                  <div class="row">
                  <div class="col s12 m12 l12">      
                    <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                      <div class="card-content white-text">
  
                        <p id="ticker_symbol">${all_symbol_in_pse}</p>
                        <p id="ticker_name">${all_name_in_pse}</p>
                        <p id="ticker_price">₱ ${all_price_in_pse} /Share</p>
                        <p id="ticker_percent"> <span id="losers">${all_percentage_change}%</span></p>       
  
                        <!-- COntent Here-->                 
                      </div>           
                    </div>
                  </div>
                </div>
            
            `; // end losers
          }
  
  
  
          // DISPLAY FUNCTIONS
  
  
          loading.style.display = "none";   // remove loader 
          loading_message.style.display = "none";   // remove loader text 
          card_for_all_pse.style.display = "block";   // to display after loader is gone     

        }); // end of for each 
        




    
  } catch (error) {
    navigator.vibrate(1000);
    loading.style.display = "none"; // remove loader
    loading_message.style.display = "none"; // remove loader text
    var toastHTML = `<span id="toast_message">Unexpected Error</span>`;
    M.toast({ html: toastHTML });
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
 
}; // end of onload event







setInterval(function () {
  var toastHTML = `<span id="toast_message_update">Updating</span>`;
  M.toast({
    html: toastHTML,
    completeCallback: function () {
      window.location.reload();
    },
  });
}, 180000);



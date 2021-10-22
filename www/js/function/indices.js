// to update url muna pansamantala https://www.npoint.io/docs/051fcf366d85325eea43

window.onload = async function () {
 
  loading.style.display = "block";  
  loading_message.style.display = "block"; // to display loading text 

  try {

    var version_json = await fetch("https://api.npoint.io/051fcf366d85325eea43");   // JSON for Version and Update purposes
    var version_check = await version_json.json();  // All Shares 

  
    var version_log= await version_check.PSE_Info[0].Log;  // log from JSON 
    var version_version= await version_check.PSE_Info[0].Version;  // Version from JSON 

    
    if (version_version == version.textContent) {
        indices();
    } else {
      fab_btn.style.display ="none";  // remove FAB button to avoid navigation
      mdl_btn.style.display ="block";
      
      mdl_btn.click();
      modal_text.innerHTML = "Version " + version_version + " now available.";
      modal_log.innerHTML = `<br><span> Version Log: </span> <br>` + version_log;

    }





    // indices(); 
    
  } catch (error) {
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
          <img class="responsive-img" src="./img/catch_image.png">           
          <p id="error_msg">An Error Occurred</p>         
          <p id="error_msg">Please Try Again Later</p>
          <br>               
          <p id="error_code">Connectivity Problem</p> <!--losers because the color code is red-->
          <!-- COntent Here-->                 
        </div>           
      </div>   
    </div>
  </div>       
    
    `; // Error handler 
  }

    
    

} // end of onload event






async function indices(){

    loading.style.display = "block";  
    loading_message.style.display = "block"; // to display loading text 

    try {

        var all_ = await fetch("https://phisix-api4.appspot.com/stocks/ALL.json");
        var all = await all_.json();  // All Shares 

        var fin_ = await fetch("https://phisix-api4.appspot.com/stocks/FIN.json");
        var fin = await fin_.json();  // All Financials

        var ind_ = await fetch("https://phisix-api4.appspot.com/stocks/IND.json");
        var ind = await ind_.json();  // All Industrial

        var hdg_ = await fetch("https://phisix-api4.appspot.com/stocks/HDG.json");
        var hdg = await hdg_.json();  // All Holding Firms

        var pro_ = await fetch("https://phisix-api4.appspot.com/stocks/PRO.json");
        var pro = await pro_.json();  // All Property

        var svc_ = await fetch("https://phisix-api4.appspot.com/stocks/SVC.json");
        var svc = await svc_.json();  // All Services

        var mining_oil_ = await fetch("https://phisix-api4.appspot.com/stocks/M-O.json");
        var mining_oil = await mining_oil_.json();  // All Mining and Oil


        var indices = {all,fin,ind,hdg,pro,svc,mining_oil}; // end of Indices

        var date_as_of = await all.as_of;  // date

        var obj_indices = Object.values(indices);  // this will convert it to object 


        obj_indices.forEach(async function (index_PSE) { 

       
        var all_index_change = await index_PSE.stock[0].price.amount;   // INDICES change ALL  / aka PRICE in JSON
        var all_index_name = await index_PSE.stock[0].name;   // INDICES names ALL 

        var all_index_value = await index_PSE.stock[0].volume;   // INDICES volume ALL  / aka Value in JSON
        var converted_value = new Intl.NumberFormat().format(all_index_value);  // add decimal 
   
        var all_index_percent = await index_PSE.stock[0].percent_change;   // INDICES percent change 
       

        sub_heading_date.innerHTML = "Data as of " + moment(date_as_of).calendar();  // date and convert via MOMENT JS

        if (all_index_change > 0) {

            card_for_indices.innerHTML += `
            <div class="row">
            <div class="col s12 m12 l12">      
              <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                <div class="card-content white-text">
        
                 
                  <p id="Index_name">${all_index_name }</p>
        
                  <table>
                    <thead>
                      <tr>
                          <th id="Index_name_value">Value</th>
                          <th id="Index_name_change">Change</th>
                          <th id="Index_name_percent">%Change</th>
                      </tr>
                    </thead>
            
                    <tbody>
                      <tr>
                        <td id="Index_value_result">${converted_value}</td>
                        <td id="Index_value_change"><span id="gainers">${all_index_change}<span></td>
                        <td id="Index_value_percent"><span id="gainers">${all_index_percent}<span></td>
                      </tr>             
                    </tbody>
                  </table>         
        
                      
                </div>           
              </div>
            </div>
              `; // end of IF confidion





            
        } else if (all_index_change == 0) {

            card_for_indices.innerHTML += `
            <div class="row">
            <div class="col s12 m12 l12">      
              <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                <div class="card-content white-text">
        
                 
                  <p id="Index_name">${all_index_name }</p>
        
                  <table>
                    <thead>
                      <tr>
                          <th id="Index_name_value">Value</th>
                          <th id="Index_name_change">Change</th>
                          <th id="Index_name_percent">%Change</th>
                      </tr>
                    </thead>
            
                    <tbody>
                      <tr>
                        <td id="Index_value_result">${converted_value}</td>
                        <td id="Index_value_change"><span id="zero">${all_index_change}<span></td>
                        <td id="Index_value_percent"><span id="zero">${all_index_percent}<span></td>
                      </tr>             
                    </tbody>
                  </table>         
        
                      
                </div>           
              </div>
            </div>
              `; // end of else IF confidion
            
        } // end of else if statement clause
        else{

            card_for_indices.innerHTML += `
            <div class="row">
            <div class="col s12 m12 l12">      
              <div class="card blue-grey darken-1 z-depth-0" id="card_holder">      
                <div class="card-content white-text">
        
                 
                  <p id="Index_name">${all_index_name }</p>
        
                  <table>
                    <thead>
                      <tr>
                          <th id="Index_name_value">Value</th>
                          <th id="Index_name_change">Change</th>
                          <th id="Index_name_percent">%Change</th>
                      </tr>
                    </thead>
            
                    <tbody>
                      <tr>
                        <td id="Index_value_result">${converted_value}</td>
                        <td id="Index_value_change"><span id="losers">${all_index_change}<span></td>
                        <td id="Index_value_percent"><span id="losers">${all_index_percent}<span></td>
                      </tr>             
                    </tbody>
                  </table>         
        
                      
                </div>           
              </div>
            </div>
              `; // end of else confidion

        } // end of else clause

    });// end of for each


    // for display function 

    trading_view.style.display = "block";
    loading.style.display = "none";
    loading_message.style.display = "none"; // to display loading text 



        
    } catch (error) {
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
              <img class="responsive-img" src="./img/catch_image.png">           
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
    }  // end of Catch statement 



}// end of indices function 



// update function / auto update

setInterval(function(){ 
   var toastHTML = `<span id="toast_message_update">Updating</span>`;
    M.toast({html: toastHTML, completeCallback: function(){window.location.reload()}});       
}, 120000);   // this is 2 miutes




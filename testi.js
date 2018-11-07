


describe("Go to the Homepage ", function(){

  


    browser.ignoreSynchronization=true; // This allows to protractor to run on regular website, not specific to angular 
    
   it("Go to the Home page ", function(){
     browser.get("https://www.amazon.com/"); // Go to a specific URL

     browser.findElement(By.id("twotabsearchtextbox")).sendKeys("Nikon"); // send Nikon to searchbar
        

       browser.findElement(by.className("nav-input")).click(); // clicks search button

       browser.findElement(by.className("a-spacing-top-mini")).click(); // opens sort by dropdown menu    
       
       browser.sleep(5000)  // wait of 5 second

    });


  
 
 });
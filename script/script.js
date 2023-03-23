// source code from https://github.com/coding-boot-camp/crispy-octo-meme authors https://github.com/Georgeyoo, https://github.com/mfyke, https://github.com/cmathena2u

$(function() {
    // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
    // the code isn't run until the browser has finished rendering all the elements
    // in the html.
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    let timeBlocks = $(".time-block")
        //check the timeblock hour and if it is before or past the current hour 
        //then add "past" class to the timeblock div 
        Date.prototype.yyyymmdd = function() {
          var yyyy = this.getFullYear().toString();
          var mm = (this.getMonth()+1).toString(); 
          var dd  = this.getDate().toString();
          return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); 
        };
        
        var date = new Date();
        console.log( date.yyyymmdd() )
        
        function getDate () {
            let currentDate = moment().format('dddd,MMM Do')
        }
        
        
        timeBlocks.each(function(){
          let timeBlock = $(this);
        
          let timeBlockHour = timeBlock.attr("id").split("-")[1];
          let currentHour = dayjs().hour()
          let $section = $('<section id="hour">')
          let textInject;
    
          
        //compare timeBlockHour to current hour then, if before current hour add past, if current hour add 
        //present if future hour add future
        })  
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    4// TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    // TODO: Add code to display the current date in the header of the page
    let fullDate = new Date();console.log(fullDate);
    let twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)	twoDigitMonth="0" +twoDigitMonth;
    let twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1)	twoDigitDate="0" +twoDigitDate;
    let currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();console.log(currentDate);
    });


// Global variables

var dayText = $('#currentDay')
var timeText = $('#currentTime')                 


var currentDay = moment().format('LL');
var currentTime = moment().format('LT');
console.log(currentTime.split(':')[0])


dayText.text(currentDay)
timeText.text(currentTime)

dayText.css('font-size','30px')
timeText.css('font-size','30px')


var times = [9,10,11,12,1,2,3,4,5]
var calendar = ['', '', '', '', '', '', '', '', '']

let storage = JSON.parse(localStorage.getItem("calendar"))

if (!storage){
    calendar = ['', '', '', '', '', '', '', '', '']
}
else{
    calendar = storage                    // Grabs calendar from local storage and updates the value
}




for(i=0; i<times.length; i++){
    
    var containerRow = $('<div>')
    containerRow.addClass('row')
   
    var time = $('<div>')
    time.addClass('col-1 time')
    time.text(times[i])
    time.attr('data-time', [i])

    var text = $('<textarea>')
    text.addClass('col-10 text')
    text.attr('data-text', [i])
    text.val(calendar[i])              // This line is what adds the user's calendar event to the text area section! 

    var submitBtn = $('<button>')
    submitBtn.addClass('saveBtn col-1')
    submitBtn.attr('data-time', times[i])
    submitBtn.attr('data-text', [i])

    var display = $('#display');
    display.append(containerRow)
    containerRow.append(time)
    containerRow.append(text)
    containerRow.append(submitBtn)

}



$('button').on('click', function(event){
    event.preventDefault()
    var allTextAreas = $('textarea')
    console.log(event.target)
    const dataText = $(this).attr('data-text');                             // Creates variable for each specific button according to its index ('data-text' is the key, 'i' is the value)

    for (let i = 0; i < allTextAreas.length; i++){
        let tempData = allTextAreas[i].getAttribute('data-text')             // Creates variable for each specific textarea according to its index ('data-text' is the key, 'i' is the value)
        if (tempData === dataText){                                          // If theres a value in the textarea field for its corresponding button,
            calendar[i] = allTextAreas[i].value                              // Add it to the calendar array in its corresponding index!
        }
    }
 
    localStorage.setItem('calendar', JSON.stringify(calendar))

})


// Color coded for time past present future

var military = moment().format();
var militaryTimeHour = military[11]+military[12];

var allTextAreas = $('textarea')

function colorChange(){

    for (i=0; i<times.length; i++){
        let militaryTimeHour = 13

        if (i + 9 < militaryTimeHour){
            allTextAreas[i].classList.add('past')
            console.log[i]
        }
        if (i + 9 > militaryTimeHour){
            allTextAreas[i].classList.add('future')
        }
        if (i + 9 == militaryTimeHour){
            allTextAreas[i].classList.add('present')
        }
    }
}

colorChange()

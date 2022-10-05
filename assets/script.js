let displayTime = function () {
    let currentTime = moment().format("[TODAY IS], dddd MMMM do YYYY:h:mm:ss a")
    $("#today").text(currentTime)
}
setInterval(displayTime, 1000);

$( function() {
    $( "#datepicker" ).datepicker();
  } );

var projectName = $("#project-name")
let dropDownSelect = $("#dropdown")
let wageDesired = $("#desired-wage")
let datePicker = $("#datepicker")


// $("#project-submit").on("click", function(event){
//     event.preventDefault();
   
//     var userProjectString = {
//         project: projectName,
//         dropMenu: dropDownSelect,
//         wage: wageDesired,
//         date: datePicker,
//     }

//     localStorage.setItem("projectString", JSON.stringify(userProjectString));
// })

var printSkills = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(skillsListEl);
  };



$("#project-submit").on("click", function(event){
    event.preventDefault(); 
    projectName = projectName.value();
    dropDownSelect = dropDownSelect.value();
    wageDesired = wageDesired.value();
    datePicker = datePicker.value();
    if (projectName != null){
    alert(projectName);}
});


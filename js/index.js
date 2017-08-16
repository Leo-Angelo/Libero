/**
 * Created by JPMC-B4-PC-03 on 12/08/2017.
 */
/*for submit button script*/

$("#form-submit").submit(function(event){
    event.preventDefault();
    $(this).fadeOut(1000, function () {
        $("#body-left").append("<div class='how'>Thank You for Answering the Survey!</div>");
    })
});
/*for search button script*/
$(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
});
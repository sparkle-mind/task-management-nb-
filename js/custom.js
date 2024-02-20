$(document).ready(function(){

// ======= search ========
    $(".nav-search").click(function(){
        $('.searchbar-open').toggleClass("active");
   
    })
    $(".close-search").click(function(){
        $('.searchbar-open').removeClass("active");
    })
// ====== aside menu =======
$(".hamburger-menu").click(function(){
    $("body").addClass("active-aside");
    $('.overlay').toggleClass("active");
})
$(".close-menu,.overlay").click(function(){
    $("body").removeClass("active-aside");
    $('.overlay').toggleClass("active");
})
// ========== DROPDOWN (SELECT-OPTION) start ============
$('.custom-select').each(function() {
  
    var select = $(this),
        name = select.attr('name');
    
    select.hide();
    
    select.wrap('<div class="nice-select-wrap"></div>');
    
    var parent = select.parent('.nice-select-wrap');
    
    parent.append('<ul id=' + name + ' style="display:none"></ul>');
    
    select.find('option').each(function() {
  
      var option = $(this),
          value = option.attr('value'),
          label = option.text();
      
      if (option.is(":first-child")) {
        
        $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));
        
      } else {
        
        parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');
        
      }
      
    });
    
    parent.find('a').on('click', function(e) {
      
      parent.toggleClass('down').find('ul').slideToggle(300);
      
      e.preventDefault();
    
    });
    
    parent.find('ul a').on('click', function(e) {
      
      var niceOption = $(this),
              value = niceOption.attr('id'),
          text = niceOption.text();
      
      select.val(value);
      
      parent.find('.drop').text(text);
      
      e.preventDefault();
    
    });
    
  });
  // ========== DROPDOWN (SELECT-OPTION) end ============

  //======== SIDEBAR DROPDOWN ==========
  $(".nav-drop-dow").click(function(){
    $(".nav-drop-dowm-wrp").toggle("open");
    $(this).toggleClass("open");
  })

  // ======== PASSWORD SHOW HIDE =============
$(".toggle-password").click(function() {
  $(this).toggleClass("show");
  var pwWrapper = $(this).closest(".pw-wrp");
  var input = pwWrapper.find("input");

  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});



});

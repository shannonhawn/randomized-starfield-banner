var $body = $('.banner');
var $addStars;
var $width = $body.outerWidth();
var $height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css({
    top: Math.random() * $height,
    left: Math.random() * $width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($addStars);
};

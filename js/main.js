(function () {
   'use strict';
   var header = document.getElementById('header');
   var $myBtn = $('#header');
   
   $myBtn.click(function(){
   var classList = '';

   if($myBtn.hasClass('active')){
     // Si myBtn contiene la clase active la elimino
     $(this).removeClass('active');

     // Recuperamos el atributo clase y los partimos
     classList = $('#header').attr('class').split(' ');
     console.log('classList === ', classList);
   }else{
     // En caso contrario la añado
     $(this).addClass('active');
}());

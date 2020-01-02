/* //event pada saat link di klik
//$ = jquery ('') tolong carikan saya sebuah element
$('.page-scroll').on('click', function(e){
// ambil isi href
var tujuan = $(this).attr('href');
//tangkap element yg bersangkutan
var elemenTujuan = $(tujuan);

//pindahkan scroll
$('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'easeInOutExpo');

e.preventDefault();
}); */
// document.querySelector('#burger-button').addEventListener('click', function (e) {
//     if (e !== null && e !== undefined) {
//         e.preventDefault();
//     }
//     let burger = document.getElementById('burger');
//     burger.className = burger.className === 'burger' ? 'burger on' : 'burger';
//     let menuDropdown = document.getElementById('menu-dropdown');
//     console.log('display: ' + menuDropdown.style.display);
//     if (menuDropdown.style.display === 'block') {
//         menuDropdown.style.display = 'none'; // Cache le menu déroulant si déjà visible
//     } else {
//         menuDropdown.style.display = 'block'; // Affiche le menu déroulant s'il est caché
//     }
// });


document.querySelector( '.burger' ).addEventListener( 'click', function ( e ) {
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});
  
document.querySelector('#burger-button').addEventListener('click', function () {
    var menuDropdown = document.getElementById('menu-dropdown');
    if (menuDropdown.style.display === 'block') {
        menuDropdown.style.display = 'none'; // Cache le menu déroulant si déjà visible
    } else {
        menuDropdown.style.display = 'block'; // Affiche le menu déroulant s'il est caché
    }
});


// // document.querySelector( '.burger' ).addEventListener( 'click', function ( e ) {
// //     if (e !== null && e !==undefined) {
// //         e.preventDefault();
// //     }
// //     this.className = this.className === 'burger' ? 'burger on' : 'burger';
// // });
  
// // document.querySelector('#burger-button').addEventListener('click', function (e) {
// //     if (e !== null && e !== undefined) {
// //         e.preventDefault();
// //     }
// //     var menuDropdown = document.getElementById('menu-dropdown');
// //     if (menuDropdown.style.display === 'block') {
// //         menuDropdown.style.display = 'none'; // Cache le menu déroulant si déjà visible
// //     } else {
// //         menuDropdown.style.display = 'block'; // Affiche le menu déroulant s'il est caché
// //     }
// // });

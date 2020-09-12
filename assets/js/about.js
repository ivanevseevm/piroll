$(document).ready(() => {
    const aboutMeElements = $('.about_me__picture, about_me__text');

    aboutMeElements.css( 'height', aboutMeElements.width() - 60 );

    $(window).resize(() => {
        aboutMeElements.css( 'height', aboutMeElements.width() - 60 );
    });
});

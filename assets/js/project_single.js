$(document).ready(() => {
    const projectElements = $('.project__picture, project__text');

    projectElements.css( 'height', projectElements.width() - 20 );

    $(window).resize(() => {
        projectElements.css( 'height', projectElements.width() - 20 );
    });
});

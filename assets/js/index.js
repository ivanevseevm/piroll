$(document).ready(() => {
    const worksElement = $('.works__element');

    worksElement.css('height', worksElement.width() - 40);

    $(window).resize(() => {
        worksElement.css('height', worksElement.width() - 40);
    });
});

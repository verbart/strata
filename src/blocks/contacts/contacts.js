import $ from 'jquery';


$('.contacts__form').submit(function (e) {
    e.preventDefault();

    const formElements = $(this.elements);
    const name = (this.elements['name']).val();
    const email = (this.elements['email']).val();
    const message = (this.elements['message']).val();
    const page = ''+(this.elements['page']).val();
    const _gotcha = (this.elements['_gotcha']).val();

    if (_gotcha) return;

    $.ajax({
        url: 'https://formspree.io/wtf.noword@gmail.com',
        method: 'POST',
        data: {
            _subject: 'From strata',
            _format: 'plain',
            _gotcha,
            page,
            email,
            name,
            message
        }
    })
    .done(function() {
        formElements.val('');
    });
});

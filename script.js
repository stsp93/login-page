console.log($('input').on('focus', function() {
    $(this).prev().addClass('not-empty')
}));
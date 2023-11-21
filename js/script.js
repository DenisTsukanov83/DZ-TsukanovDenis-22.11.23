
$(document).ready(function () {

    //Переключение меню
    function showContents(e) {
        if (e.target.textContent != 'Home' && !e.target.classList.contains('aside-menu-item-1')) {
            $('.about .contents').hide();
            $('.aside-menu-item').removeClass('active');
            $('.about .about-menu ul li a').removeClass('active');

            if ($(e.target).parent().is('li')) {
                e.target.classList.add('active');
                $.each($('.aside-menu-item'), (i, el) => {
                    $(el).css({
                        'background-image': `${$(el).css('background-image').replace(/white/gi, 'black')}`
                    })
                });

                switch (true) {
                    case $(e.target).text() == 'About me' : $('.aside-menu-item-2').css('background-image', $('.aside-menu-item-2').css('background-image').replace(/black/gi, 'white')),
                    $('.aside-menu-item-2').addClass('active');
                    break;
                    case $(e.target).text() == 'Resume' : $('.aside-menu-item-3').css('background-image', $('.aside-menu-item-3').css('background-image').replace(/black/gi, 'white')),
                    $('.aside-menu-item-3').addClass('active');
                    break;
                    case $(e.target).text() == 'Portfolio' : $('.aside-menu-item-4').css('background-image', $('.aside-menu-item-4').css('background-image').replace(/black/gi, 'white')),
                    $('.aside-menu-item-4').addClass('active');
                    break;
                    case $(e.target).text() == 'Testimonials' : $('.aside-menu-item-5').css('background-image', $('.aside-menu-item-5').css('background-image').replace(/black/gi, 'white')),
                    $('.aside-menu-item-5').addClass('active');
                    break;
                    case $(e.target).text() == 'Contact' : $('.aside-menu-item-6').css('background-image', $('.aside-menu-item-6').css('background-image').replace(/black/gi, 'white')),
                    $('.aside-menu-item-6').addClass('active');
                    break;
                }
            } else {
                $(e.target).addClass('active');
                $.each($('.aside-menu-item'), (i, el) => {
                    $(el).css({
                        'background-image': `${$(el).css('background-image').replace(/white/gi, 'black')}`
                    })
                });
                $(e.target).css('background-image', $(e.target).css('background-image').replace(/black/gi, 'white'));

                switch (true) {
                    case $(e.target).hasClass('aside-menu-item-2') : $('.li-2').addClass('active')
                    break;
                    case $(e.target).hasClass('aside-menu-item-3') : $('.li-3').addClass('active')
                    break;
                    case $(e.target).hasClass('aside-menu-item-4') : $('.li-4').addClass('active')
                    break;
                    case $(e.target).hasClass('aside-menu-item-5') : $('.li-5').addClass('active')
                    break;
                    case $(e.target).hasClass('aside-menu-item-6') : $('.li-6').addClass('active')
                    break;
                }
            }

            switch (true) {
                case $(e.target).text() == 'About me' || e.target.classList.contains('aside-menu-item-2'): $('.about-content').show();
                    break;
                case $(e.target).text() == 'Resume' || e.target.classList.contains('aside-menu-item-3'): $('.resume-content').show();
                    break;
                case $(e.target).text() == 'Portfolio' || e.target.classList.contains('aside-menu-item-4'): $('.portfolio-content').show();
                    break;
                case $(e.target).text() == 'Testimonials' || e.target.classList.contains('aside-menu-item-5'): $('.testimon-content').show();
                    break;
                case $(e.target).text() == 'Contact' || e.target.classList.contains('aside-menu-item-6'): $('.contact-content').show();
                    break;
            }

            if (window.innerWidth < 601) {
                showMenu();
            }
        }
        
    }

    $('.about .about-nav ul li a').click((e) => {
        showContents(e);
    });

    $('.aside-menu-item').click((e) => {
        showContents(e);
    });

    // Hover
    $('.aside-menu-item').mouseover((e) => {
        if (!$(e.target).hasClass('active')) {
            $(e.target).css('background-image', $(e.target).css('background-image').replace(/black/gi, 'white'));

        }
    });
    $('.aside-menu-item').mouseleave((e) => {
        if (!$(e.target).hasClass('active')) {
            $(e.target).css('background-image', $(e.target).css('background-image').replace(/white/gi, 'black'));
        }

    });

    // Переключение Portfolio
    $('.portfolio-nav ul li a').click((e) => {
        e.preventDefault();
        $('.portfolio-nav ul li a').removeClass('active').addClass('not-active');
        $(e.target).removeClass('not-active');
        $(e.target).addClass('active');
        $('.portfolio-grid').hide();
        $('.portfolio-grid').removeClass('grid');

        switch (true) {
            case $(e.target).text() == 'All': $('.portfolio-grid-all').addClass('grid');
                break;
            case $(e.target).text() == 'Graphic design': $('.portfolio-grid-graphic').addClass('grid');
                break;
            case $(e.target).text() == 'Web design': $('.portfolio-grid-web').addClass('grid');
                break;
            case $(e.target).text() == 'Photography': $('.portfolio-grid-photography').addClass('grid');
                break;
        }
    });

    // Открытие меню

    let isActiveMenu = false;

    function showMenu() {
        if (isActiveMenu) {
            $('.about-nav').animate({
                'left': '-55rem'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'block'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
        } else {
            $('.about-nav').animate({
                'left': '0'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(45deg) translateY(0.98rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'none'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(-45deg) translateY(-0.98rem)'
            });
        }

        isActiveMenu = !isActiveMenu;
    }

    $('.hamburger').click(() => {
        showMenu();
    });
});
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.svg"></button>',
//         responsive: [
//             {      
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//         }); 
// });

    var slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        responsive: {
            320: {
                nav: true,
              },
              992: {
                nav: false
              }
          }
    });
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev'); 
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next'); 
    });

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })            
        })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    // Modals

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultationm, #thanks, #order').fadeOut('slow');
    })

    $('.button_item').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');            
        })
    })

    function validateForm(form) {
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: {                    
                    required: true,
                },
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: {
                    required: "Необходимо ввести имя",
                    minlength: "Длинна имяни не менее 2 символов"
                },
                phone: {                    
                    required: "Необходимо заполнить поле",
                },
                email: {
                    required: "Необходимо ввести e-mail",
                    email: "E-mail должен быть в формате name@domain.com"
                }
              }
        })
    };
    validateForm('#order form');
    validateForm('#consultation form');
    validateForm('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});  
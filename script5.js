jQuery(document).ready(function() {
    var $form = $('#form386649083.t-form.js-form-proccess.t-form_inputs-total_3')
    /* $form - jquery объект ссылающийс€ на форму */
        let orderId = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        let myClick = function(){
            vd.create({
                partnerCode: orderId,
                partnerProductCode: '0-0-6;0-0-10;0-0-12;0-0-24',
                orderNum: '00012345',
                delivery: 1,
                items: tcart.products.map(function(item) { return {name: item.name, price: item.price, quantity: item.quantity}})
            });
        }
        let myTouch = function(){
             btn.trigger('click')
        }
        var btn = $('<button type="button" class="VD_BUTTON">Оформить в рассрочку</button>').on('click', myClick);
        btn.on('touchstart',myTouch)

        $('.t706__cartwin-content').append(btn);
})

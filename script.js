jQuery(document).ready(function() {
        var $form = $('#form386649083.t-form.js-form-proccess.t-form_inputs-total_3')
        /* $form - jquery объект ссылающийс€ на форму */
            let orderId = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
            var btn = $('<button type="button" class="VD_BUTTON">Оформить в рассрочку</button>').on('click', function(){
                vd.create({
                    partnerCode: 'S0088825',
                    partnerProductCode: '0-0-3;0-0-6;0-0-9;0-0-12',
                    orderNum: '00012345',
                    delivery: 1,
                    items: tcart.products.map(function(item) { return {name: item.name, price: item.price, quantity: item.quantity}})
                });
            });
            $('.t706__cartwin-content').append(btn);
})

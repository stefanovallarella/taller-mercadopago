const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
})


module.exports = {
    home: (req, res) => {
        return res.render("index");
    },
    detail: (req, res) => {
        return res.render("detail", { ...req.query });
    },
    comprar: (req,res) => {

        let item = {
            id: 1,
            picture_url: 'https://taller-mpago-dh.herokuapp.com/images/products/jordan.jpg',
            title: 'Nombre del producto',
            description: 'Descripcion del producto',
            unit_price: 1500,
            quantity: 3
        }

        let preference = {
            payer: {
                name: 'Ryan',
                surname: 'Dahl',
                email: 'test_user_63274575@testuser.com',
                phone: {
                    area_code: '11',
                    number: 55556666
                },
                address:{
                    zip_code:'1234',
                    street_name: 'Monroe',
                    street_number: 860,
                }
            },
            payment_methods:{
                    excluded_payment_methods:[
                        {id: 'visa'}
                    ],
                    excluded_payment_types: [
                        { id: 'atm'}
                    ],
                    installments: 12,
                },
            items: [
                item
            ],
            external_reference: 'stefanovallarella@gmail.com'
        }

        mercadopago.preferences.create(preference)
        .then(response => {

            global.init_point = response.body.init_point;

            res.render('confirm');
        })
        .catch( error => {
            console.log(error);
            res.send('error');
        })

        
    }
}
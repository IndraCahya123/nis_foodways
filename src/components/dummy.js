import BurgerKing from '../images/burgerking.png';
import Starbucks from '../images/starbuck.png';
import KFC from '../images/kfc.png';
import JCO from '../images/jco.png';
import Geprek from '../images/geprekbensu.png';
import Nasgor from '../images/nasigoreng.png';
import Pecel from '../images/pecelayam.png';
import Kopi from '../images/kopikenangan.png';

export const Restaurant = [
    {
        id: 1,
        name: "Burger King",
        logo: BurgerKing,
        products: [
            {
                id: 1,
                name: "Classic Crispy Chicken",
                imgUrl: "https://order.bkdelivery.co.id/media/thumb/product_photo/2021/2/17/bdhilkbxftuvitsvqwq45g_product_list.png",
                price: "48.000"
            },
            {
                id: 2,
                name: "Quattro Cheese Crispy Chicken",
                imgUrl: "https://order.bkdelivery.co.id/media/thumb/product_photo/2021/2/17/mk6c3btxcgmjp5wbvcyhwr_product_details.png",
                price: "51.000"
            },
            {
                id: 3,
                name: "Cheese Rasher Chicken",
                imgUrl: "https://order.bkdelivery.co.id/media/thumb/product_photo/2019/12/26/wrcqf7milgxkvlsvmx6qss_product_details.jpg",
                price: "45.000"
            },
            {
                id: 4,
                name: "Mozzarella Chiken",
                imgUrl: "https://order.bkdelivery.co.id/media/thumb/product_photo/2020/5/20/zfa4atwvyencjozf8v3tts_product_details.jpg",
                price: "44.000"
            },
        ]
    },
    {
        id: 2,
        name: "Starbucks",
        logo: Starbucks,
        products: [
            {
                id: 1,
                name: "Honey Almondmilk Cold Brew",
                imgUrl: "https://globalassets.starbucks.com/assets/21f012c25a714d81b211a19094fb90cc.jpg?impolicy=1by1_wide_1242",
                price: "48.000"
            },
            {
                id: 2,
                name: "Irish Cream Cold Brew",
                imgUrl: "https://globalassets.starbucks.com/assets/3abfc4b26c144afd9dd4eec001f0f252.jpg?impolicy=1by1_wide_1242",
                price: "51.000"
            },
            {
                id: 3,
                name: "Iced Coffee Americano",
                imgUrl: "https://globalassets.starbucks.com/assets/84ede138768e42ebb2e0366c2f09960a.jpg?impolicy=1by1_wide_1242",
                price: "45.000"
            },
            {
                id: 4,
                name: "Iced Expresso",
                imgUrl: "https://globalassets.starbucks.com/assets/6a320073ec4b47e7bb9e6eb9e5e74e96.jpg?impolicy=1by1_wide_1242",
                price: "44.000"
            },
        ]
    },
    {
        id: 3,
        name: "KFC",
        logo: KFC,
        products: [
            {
                id: 1,
                name: "Honey Almondmilk Cold Brew",
                imgUrl: "https://globalassets.starbucks.com/assets/21f012c25a714d81b211a19094fb90cc.jpg?impolicy=1by1_wide_1242",
                price: "48.000"
            },
            {
                id: 2,
                name: "Irish Cream Cold Brew",
                imgUrl: "https://globalassets.starbucks.com/assets/3abfc4b26c144afd9dd4eec001f0f252.jpg?impolicy=1by1_wide_1242",
                price: "51.000"
            },
            {
                id: 3,
                name: "Iced Coffee Americano",
                imgUrl: "https://globalassets.starbucks.com/assets/84ede138768e42ebb2e0366c2f09960a.jpg?impolicy=1by1_wide_1242",
                price: "45.000"
            },
            {
                id: 4,
                name: "Iced Coffee with Milk",
                imgUrl: "https://order.bkdelivery.co.id/media/thumb/product_photo/2020/5/20/zfa4atwvyencjozf8v3tts_product_details.jpg",
                price: "44.000"
            },
        ]
    },
    {
        id: 4,
        name: "JCO",
        logo: JCO,
        products: [{}]
    },
];

export const NearestRestaurants = [
    {
        id: 1,
        name: "Geprek Bensu",
        img: Geprek,
        distance: "0,2 KM",
        products: [{}]
    },
    {
        id: 2,
        name: "Nasi Goreng Mas Rony",
        img: Nasgor,
        distance: "0,6 KM",
        products: [{}]
    },
    {
        id: 3,
        name: "Pecel Ayam Prambanan",
        img: Pecel,
        distance: "0,6 KM",
        products: [{}]
    },
    {
        id: 4,
        name: "Kopi Kenangan",
        img: Kopi,
        distance: "1,6 KM",
        products: [{}]
    },
];
import _ from 'lodash';

const data = [
    {
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455',
        itemName: 'iPhone_8',
        options: [
            {
                link: {
                    url: 'https://www.ebay.ie/itm/Apple-iPhone-8-256GB-Factory-Unlocked-Gold-Superb-Condition/254416243359?hash=item3b3c63ca9f:g:F8IAAOSwOStddWJi',
                    Text: 'ebay'
                },
                price: 300
            },
            {
                link: {
                    url: 'https://www.amazon.co.uk/Apple-iPhone-8-64GB-Gold/dp/B075RFBXH9',
                    Text: 'amazon'
                },
                price: 460
            },
            {
                link: {
                    url: 'https://www.apple.com/ie/shop/buy-iphone/iphone-8',
                    Text: 'apple'
                },
                price: 550
            }
        ]
    },
    {
        imageUrl: 'https://image.coolblue.nl/422x390/products/1128392',
        itemName: 'xbox_one',
        options: [
            {
                link: {
                    url: 'https://www.gamestop.ie/Xbox%20One/Games/73628/xbox-one-x-1tb-hyperspace-special-edition-console',
                    Text: 'gamestop'
                },
                price: 550
            },
            {
                link: {
                    url: 'https://www.ebay.ie/itm/Microsoft-Xbox-One-500GB-Black-Console/202814273006?hash=item2f38ac35ee:g:5qoAAOSwAeBdh~Bp',
                    Text: 'ebay'
                },
                price: 100
            },
            {
                link: {
                    url: 'https://www.amazon.com/Xbox-One-1TB-Console-Battlefield-Bundle/dp/B07GQGKZXK/ref=sr_1_1?keywords=xbox+one&qid=1573419570&s=videogames&sr=1-1',
                    Text: 'amazon'
                },
                price: 230
            }
        ]
    },
    {
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850905_sd.jpg',
        itemName: 'PlayStation_4',
        options: [
            {
                link: {
                    url: 'https://www.ebay.ie/itm/Sony-PlayStation-4-500GB-White-Console-With-2-Controllers/123962721919?hash=item1cdcc1067f:g:2fQAAOSwHP1dv09z',
                    Text: 'ebay'
                },
                price: 230
            },
            {
                link: {
                    url: 'https://www.gamestop.ie/PlayStation%204/Games/73595/playstation-4-500gb-console-and-fifa-20',
                    Text: 'gamestop'
                },
                price: 340
            },
            {
                link: {
                    url: 'https://www.amazon.com/dp/B071CV8CG2/ref=s9_acsd_otopr_hd_bw_b710gst_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-1&pf_rd_r=VC5BTB7V4WJC1MVYGSDZ&pf_rd_t=101&pf_rd_p=13383fcd-a984-4438-a2f3-4286dd71368c&pf_rd_i=6427871011',
                    Text: 'amazon'
                },
                price: 280
            }
        ]
    },
    {
        imageUrl: 'https://cdn.pocket-lint.com/r/s/320x/assets/images/140007-games-review-nintendo-switch-review-image1-lp6zy9awm0.jpg?v1',
        itemName: 'nintendo_switch',
        options: [
            {
                link: {
                    url: 'https://www.currys.ie/ieen/tv-and-home-entertainment/gaming/gaming-consoles/nintendo-switch-neon-red-blue-10163022-pdt.html',
                    Text: 'pcWorld'
                },
                price: 330
            },
            {
                link: {
                    url: 'https://www.argos.co.uk/product/2077921',
                    Text: 'argos'
                },
                price: 300
            },
            {
                link: {
                    url: 'https://www.gamestop.ie/Switch/Games/51568',
                    Text: 'GameStop'
                },
                price: 330
            }
        ]
    }
];

const StubAPI = {

    getAll:() => {
        return data;
    },

    delete:(k)=> {
        let elements = _.remove(data, item => item.itemName === k);
        return elements;
    },

    find:(id) => {
        let index = _.findIndex(
            data,
            item => `${item.itemName}` === id
        );
        if (index !== -1) {
            return data[index];
        }
        return null;
    },
    add(imageUrl, itemName, options) {

        if (!(this.find(itemName))) {
            let newItem = data.push({
                imageUrl,
                itemName,
                options
            });
            return newItem;
        }
        else {
            return null;
        }
    }
}


export default StubAPI;
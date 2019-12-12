import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";
import React from 'react';
import { storiesOf } from "@storybook/react";
import Option from '../src/components/option/';
import Test from '../src/components/test/';
import Options from '../src/components/options/';
import Item from '../src/components/item/';
import ItemList from '../src/components/itemlist/';
import Header from '../src/components/header/';
import AddPage from '../src/components/addPage/';



storiesOf("addPage", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
    .add("page", () => {
        return <AddPage />
    })
storiesOf("main", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
    .add("page", () => {
        const test = [
            {
                id: 1,
                imageUrl: 'https://vignette.wikia.nocookie.net/super-death-battle-fanon/images/8/80/Link_Defending_%28Soulcalibur_II%29.png/revision/latest?cb=20151121223059',
                itemName: 'thing1',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link1'
                        },
                        price: 11
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link2'
                        },
                        price: 22
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link3'
                        },
                        price: 33
                    }
                ]
            },
            {
                id: 2,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61qR2BwdEAL._SL1000_.jpg',
                itemName: 'thing2',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link4'
                        },
                        price: 44
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link5'
                        },
                        price: 55
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link6'
                        },
                        price: 66
                    }
                ]
            },
            {
                id: 3,
                imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/link/main.png',
                itemName: 'thing3',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link7'
                        },
                        price: 77
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link8'
                        },
                        price: 88
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link9'
                        },
                        price: 99
                    }
                ]
            },
            {
                id: 4,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61d3J0GzfBL._SY550_.jpg',
                itemName: 'thing4',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link10'
                        },
                        price: 1010
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link11'
                        },
                        price: 1111
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link12'
                        },
                        price: 1212
                    }
                ]
            }
        ];
        return (
            <div>
                <Header onUserInput={action("search")} />
                <ItemList itemList={test} deleteHandler={action("Delete")}/>
            </div>
        );
    })

storiesOf("main/page", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
    .add("header", () => {
        return <Header onUserInput={action("search")}/>
    })
    .add("itemlist", () => {
        const test = [
            {
                id: 1,
                imageUrl: 'https://vignette.wikia.nocookie.net/super-death-battle-fanon/images/8/80/Link_Defending_%28Soulcalibur_II%29.png/revision/latest?cb=20151121223059',
                itemName: 'thing1',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link1'
                        },
                        price: 11
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link2'
                        },
                        price: 22
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link3'
                        },
                        price: 33
                    }
                ]
            },
            {
                id: 2,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61qR2BwdEAL._SL1000_.jpg',
                itemName: 'thing2',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link4'
                        },
                        price: 44
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link5'
                        },
                        price: 55
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link6'
                        },
                        price: 66
                    }
                ]
            },
            {
                id: 3,
                imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/link/main.png',
                itemName: 'thing3',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link7'
                        },
                        price: 77
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link8'
                        },
                        price: 88
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link9'
                        },
                        price: 99
                    }
                ]
            },
            {
                id: 4,
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61d3J0GzfBL._SY550_.jpg',
                itemName: 'thing4',
                options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link10'
                        },
                        price: 1010
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link11'
                        },
                        price: 1111
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link12'
                        },
                        price: 1212
                    }
                ]
            }
        ];
        return <ItemList itemList={test} deleteHandler={action("Delete")}/>
    })

storiesOf("main/page/itemlist", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>))
    .add("item", () => {
        const test = {
            imageUrl: 'https://vignette.wikia.nocookie.net/super-death-battle-fanon/images/8/80/Link_Defending_%28Soulcalibur_II%29.png/revision/latest?cb=20151121223059',
            itemName: 'thing1',
            options: [
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link'
                        },
                        price: 33
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link'
                        },
                        price: 22
                    },
                    {
                        link: {
                            url: 'https://en.wikipedia.org/wiki/Help:Link',
                            Text: 'link'
                        },
                        price: 11
                    }
            ]
        };
        return <Item itemInfo={test} deleteHandler={action("Delete")}/>
    })

storiesOf("main/page/itemlist/item", module)
    .add("options", () => {
        const test = [
            {
                link: {
                    url: 'https://en.wikipedia.org/wiki/Help:Link',
                    Text: 'link'
                },
                price: 33
            },
            {
                link: {
                    url: 'https://en.wikipedia.org/wiki/Help:Link',
                    Text: 'link'
                },
                price: 22
            },
            {
                link: {
                    url: 'https://en.wikipedia.org/wiki/Help:Link',
                    Text: 'link'
                },
                price: 11
            }
            
        ];
        return <Options lines={test} />
    })

storiesOf("main/page/itemlist/item/options", module)
    .add("option", () => {
        const test = {
            link: {
                url: 'https://en.wikipedia.org/wiki/Help:Link',
                Text: 'link'
            },
            price: 11
        };
        return <Option data={test} />
    })
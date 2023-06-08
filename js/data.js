let productsDatabase=[
    {
        id:1,
        title:"headphone1",
        desc:"Lorem ipsum dolor sit amet.",
        size:"large",
        imgUrl:"img/download (1).jpg",
        quantity:1,
        isMyProduct: "no",
    }
    ,
    {
        id:2,
        title:"headphone2",
        desc:"Lorem ipsum dolor sit amet.",
        size:"small",
        imgUrl:"img/download (2).jpg",
        quantity:1,
        isMyProduct: "no",

    },
    {
        id:3,
        title:"headphone3",
        desc:"Lorem ipsum dolor sit amet.",
        size:"small",
        imgUrl:"img/download (3).jpg",
        quantity:1,
        isMyProduct: "no",

    },
    {
        id:4,
        title:"headphone4",
        desc:"Lorem ipsum dolor sit amet.",
        size:"medium",
        imgUrl:"img/download (4).jpg",
        quantity:1,
        isMyProduct: "no",

    }
];

localStorage.setItem("productsDatabase",JSON.stringify(productsDatabase) );
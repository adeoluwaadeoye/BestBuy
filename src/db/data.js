const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/61t4mpabO+L._AC_UL480_FMwebp_QL65_.jpg",
    title: "High Gaming Chair",
    rating: 4,
    reviews: 24,
    newPrice: "240000",
    company: "Xiang",
    color: "black",
    category: "chair",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71WoN3Vt-gL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Vpro Headset",
    rating: 5,
    reviews: 64,
    newPrice: "120000",
    company: "Sony",
    color: "black",
    category: "headset",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71DHV9GZSOL._AC_UY327_FMwebp_QL65_.jpg",
    title: "HP victus",
    rating: 3,
    reviews: 44,
    newPrice: "960000",
    company: "HP",
    color: "black",
    category: "laptop",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51jKdIMGCsL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Xbox Series X",
    rating: 5,
    reviews: 54,
    newPrice: "440000",
    company: "Xbox",
    color: "black",
    category: "games",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Gaming Mouse",
    rating: 3,
    reviews: 54,
    newPrice: "30000",
    company: "Xiang",
    color: "games",
    category: "black",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/61hxzGfRpKL._AC_UL480_FMwebp_QL65_.jpg",
    title: "XBOX Controller",
    rating: 5,
    reviews: 34,
    newPrice: "100000",
    company: "Xbox",
    color: "pink",
    category: "games",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61R8OgObRsL._AC_UL480_FMwebp_QL65_.jpg",
    title: "T77 Microphone",
    rating: 3,
    reviews: 44,
    newPrice: "130000",
    company: "Xiang",
    color: "black",
    category: "others",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/81dAe2wXIqL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Ultragear Monitor",
    rating: 4,
    reviews: 54,
    newPrice: "180000",
    company: "LG",
    color: "black",
    category: "others",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/41ECK5cY-2L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Playstation",
    rating: 5,
    reviews: 64,
    newPrice: "640000",
    company: "Sony",
    color: "games",
    category: "white",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Bengoo Stereo",
    rating: 4,
    reviews: 54,
    newPrice: "87000",
    company: "Acer",
    color: "blue",
    category: "headset",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/61vRT8YrsHL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Autofill Chair",
    rating: 3,
    reviews: 44,
    newPrice: "120000",
    company: "Xiang",
    color: "gray",
    category: "chair",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Acer Aspire 3",
    rating: 5,
    reviews: 34,
    newPrice: "920000",
    company: "Acer",
    color: "nil",
    category: "laptop",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/619NnSrYabL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Playstation Elite",
    rating: 5,
    reviews: 24,
    newPrice: "80000",
    company: "Sony",
    color: "white",
    category: "headset",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/61N9cUK98eL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Xbox T320",
    rating: 4,
    reviews: 24,
    newPrice: "500000",
    company: "Sony",
    color: "white",
    category: "games",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/61C5t1ltM5L._AC_UY327_FMwebp_QL65_.jpg",
    title: "C4R Headphone",
    rating: 5,
    reviews: 64,
    newPrice: "140000",
    company: "JBL",
    color: "gray",
    category: "headset",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/618I64n2QdL._AC_UL480_FMwebp_QL65_.jpg",
    title: "GT Chair",
    rating: 5,
    reviews: 24,
    newPrice: "230000",
    company: "Xiang",
    color: "blue",
    category: "chair",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/61dVV8sjTLL._AC_UL480_FMwebp_QL65_.jpg",
    title: "CM72 Headset ",
    rating: 3,
    reviews: 54,
    newPrice: "140000",
    company: "JBL",
    color: "white",
    category: "headset",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/71w951foCoL._AC_UY327_FMwebp_QL65_.jpg",
    title: "LG Smart TV",
    rating: 5,
    reviews: 45,
    newPrice: "430000",
    company: "LG",
    color: "black",
    category: "others",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/81p9DPknjLL._AC_UL480_FMwebp_QL65_.jpg",
    title: "C360 Speaker",
    rating: 5,
    reviews: 46,
    newPrice: "70000",
    company: "JBL",
    color: "black",
    category: "others",
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/71prAUi3+NL._AC_UL480_FMwebp_QL65_.jpg",
    title: "XV Surge Protecor",
    rating: 4.5,
    reviews: 34,
    newPrice: "20000",
    company: "Xiang",
    color: "black",
    category: "others",
  },
  {
    id: 21,
    img: "https://m.media-amazon.com/images/I/61Jjxzg7Q1L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Z fold 6",
    rating: 5,
    reviews: 64,
    newPrice: "440000",
    company: "Samsung",
    color: "black",
    category: "others",
  },

  {
    id: 22,
    img: "https://m.media-amazon.com/images/I/61joErBxERL._AC_UY327_FMwebp_QL65_.jpg",
    title: "JBL Tune Flex",
    rating: 4,
    reviews: 54,
    newPrice: "150000",
    company: "JBL",
    color: "others",
    category: "black",
  },
  {
    id: 23,
    img: "https://m.media-amazon.com/images/I/61UBzkPgdkL._AC_UL960_FMwebp_QL65_.jpg",
    title: "Chair Massage",
    rating: 3,
    reviews: 44,
    newPrice: "250000",
    company: "Xiang",
    color: "red",
    category: "chairs",
  },
  {
    id: 24,
    img: "https://m.media-amazon.com/images/I/71ygD+0w49L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Gaming Laptop",
    rating: 4,
    reviews: 14,
    newPrice: "900000",
    company: "Xiang",
    color: "nil",
    category: "laptop",
  },
  {
    id: 25,
    img: "https://m.media-amazon.com/images/I/614Jk1dIoGL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Asus E410 Intel",
    rating: 4,
    reviews: 24,
    newPrice: "950000",
    company: "HP",
    color: "black",
    category: "laptop",
  },
  {
    id: 26,
    img: "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UY327_FMwebp_QL65_.jpg",
    title: "HB4 Speaker",
    rating: 3,
    reviews: 14,
    newPrice: "200000",
    company: "JBL",
    color: "black",
    category: "others",
  },
  {
    id: 27,
    img: "https://m.media-amazon.com/images/I/61z-rTknwVS._AC_UY327_FMwebp_QL65_.jpg",
    title: "RORSUS R10",
    rating: 5,
    reviews: 24,
    newPrice: "65000",
    company: "Sony",
    color: "red",
    category: "headset",
  },
  {
    id: 28,
    img: "https://m.media-amazon.com/images/I/6163yyOLZxL._AC_UL480_FMwebp_QL65_.jpg",
    title: "AAR49 Chair",
    rating: 3,
    reviews:54,
    newPrice: "180000",
    company: "Xiang",
    color: "red",
    category: "chair",
  },
  {
    id: 29,
    img: "https://m.media-amazon.com/images/I/61vmeDoj5CL._AC_UY327_FMwebp_QL65_.jpg",
    title: "B27 Controller",
    rating: 5,
    reviews: 24,
    newPrice: "70000",
    company: "Xbox",
    color: "green",
    category: "games",
  },
  {
    id: 30,
    img: "https://m.media-amazon.com/images/I/71SImSt2hxL._AC_UL480_FMwebp_QL65_.jpg",
    title: "JLab Neon W232",
    rating: 4,
    reviews: 4,
    newPrice: "150000",
    company: "Sony",
    color: "green",
    category: "headphone",
  },
  {
    id: 31,
    img: "https://m.media-amazon.com/images/I/712T0Ac+BxL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Acer Laptop P220",
    rating: 5,
    reviews: 44,
    newPrice: "115000",
    company: "Acer",
    color: "green",
    category: "laptop",
  },
  {
    id: 32,
    img: "https://m.media-amazon.com/images/I/71d1Vm8EJlL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Brujula Airpod",
    rating: 4,
    reviews: 14,
    newPrice: "80000",
    company: "Xiang",
    color: "green",
    category: "others",
  },
  {
    id: 33,
    img: "https://m.media-amazon.com/images/I/71BytMAJ3aL._AC_UY327_FMwebp_QL65_.jpg",
    title: "CK Controller",
    rating: 3,
    reviews: 43,
    newPrice: "70000",
    company: "Sony",
    color: "black",
    category: "games",
  },
  {
    id: 34,
    img: "https://m.media-amazon.com/images/I/71F-Wcriq4L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Acer Nitro P220",
    rating: 4,
    reviews: 34,
    newPrice: "715000",
    company: "Acer",
    color: "black",
    category: "laptop",
  },
  {
    id: 35,
    img: "https://m.media-amazon.com/images/I/61+yNTSQt6L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Zuest Xbox",
    rating: 5,
    reviews: 45,
    newPrice: "915000",
    company: "Xbox",
    color: "white",
    category: "games",
  },
];
export default data
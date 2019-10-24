const Product = require('./index.js');

Product.create({
  id: 1,
  brand: "KUHL",
  name: "Kuhl Kollusion Fleece Lined Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 199.00,
  rating: {
    rating_avg: 4.7,
    rating_ct: 56
  },
  size: ["S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/thumbnails/Cayenne.png",
    color_name: "Cayenne",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/cayenne/cayenne_6.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/thumbnails/Raven.png",
    color_name: "Raven",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/raven/black_6.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/thumbnails/Turkish+Coffee.jpeg",
    color_name: "Turkish Coffee",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_10.jpeg"
    ]
  }
});

Product.create({
  id: 2,
  brand: "Arc'teryx",
  name: "Arc'teryx Aerios FL Mid GTX Hiking Boots - Men's",
  category: "shoes",
  gender: "M",
  price: 185.00,
  rating: {
    rating_avg: 4.3,
    rating_ct: 29
  },
  size: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "12"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/black/black_7.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/thumbnails/taan_forest.jpeg",
    color_name: "Taan Forest",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Unisex/taan_forest/forest_7.jpeg"
    ]
  }
});

Product.create({
  id: 3,
  brand: "Arc'teryx",
  name: "Arc'teryx Atom LT Insulated Hoodie - Men's",
  category: "jacket",
  gender: "M",
  price: 259.00,
  rating: {
    rating_avg: 4.7,
    rating_ct: 343
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/thumbnails/black.jpeg",
    color_name: "Orion Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/orion_black/black_11.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/thumbnails/grey.jpeg",
    color_name: "Pilot Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/grey/grey_10.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/thumbnails/orange.jpeg",
    color_name: "Power Orange",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's/turkish_coffee/coffee_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/power_orange/orange_+10.jpeg"
    ]
  },
  color_4: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/thumbnails/slate.jpeg",
    color_name: "Slate",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Atom+LT+Insulated+Hoodie+-+Men's/slate/slate_6.jpeg"
    ]
  }
});

Product.create({
  id: 4,
  brand: "Arc'teryx",
  name: "Arc'teryx Beta AR Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 575.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 179
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/black/black_10.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/thumbnails/neptune.jpeg",
    color_name: "Neptune",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/neptune/neptune_1.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/thumbnails/sambal.png",
    color_name: "Sambal",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Beta+AR+Jacket+-+Men's/sambal/sambal_8.jpeg"
    ]
  }
});

Product.create({
  id: 5,
  brand: "Arc'teryx",
  name: "Arc'teryx Conveyor Belt - Unisex",
  category: "belt",
  gender: "Unisex",
  price: 39.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 135
  },
  size: ["S", "M", "L"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/black/black_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/black/black_2.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/thumbnails/midnight_sun.png",
    color_name: "Midnight Sun",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/midnight_sun/midnight_sun_1.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/thumbnails/nightshadow.png",
    color_name: "Nightshadow",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Conveyor+Belt+-+Unisex/nightshadow/nightshadow_1.jpeg"
    ]
  }
});

Product.create({
  id: 6,
  brand: "Arc'teryx",
  name: "Arc'teryx Gaea Jacket - Women's",
  category: "jacket",
  gender: "W",
  price: 199.00,
  rating: {
    rating_avg: 5.0,
    rating_ct: 4
  },
  size: ["XS", "S", "M", "L"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/thumbnails/dimma.png",
    color_name: "Dimma",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/dimma/black_8.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/thumbnails/odyssea.png",
    color_name: "Odyssea",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Arc'teryx+Gaea+Jacket+-+Women's/odyssea/odyssea_1.jpeg"
    ]
  }
});

Product.create({
  id: 7,
  brand: "Co-op Cycles",
  name: "Co-op Cycles DRT 3.1 Bike",
  category: "bike",
  gender: "Unisex",
  price: 2199.00,
  rating: {
    rating_avg: 3.6,
    rating_ct: 7
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Co-op+Cycles+DRT+3.1+Bike/black/black_11.jpeg"
    ]
  }
});

Product.create({
  id: 8,
  brand: "KUHL",
  name: "KUHL Flight Fleece Jacket - Women's",
  category: "jacket",
  gender: "W",
  price: 169.00,
  rating: {
    rating_avg: 4.2,
    rating_ct: 56
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/thumbnails/fog_harbor.png",
    color_name: "Fog Harbor",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/fog_harbor/fog_harbor_7.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Flight+Fleece+Jacket+-+Women's/black/black_10.jpeg"
    ]
  }
});

Product.create({
  id: 9,
  brand: "KUHL",
  name: "KUHL Radikl Pants - Men's",
  category: "pants",
  gender: "M",
  price: 89.00,
  rating: {
    rating_avg: 4.6,
    rating_ct: 46
  },
  size: [
    "30 In Waist X 28 In Inseam",
    "30 In Waist X 30 In Inseam",
    "30 In Waist X 32 In Inseam",
    "30 In Waist X 34 In Inseam",
    "32 In Waist X 28 In Inseam",
    "32 In Waist X 30 In Inseam",
    "32 In Waist X 32 In Inseam",
    "32 In Waist X 34 In Inseam",
    "34 In Waist X 28 In Inseam",
    "34 In Waist X 30 In Inseam",
    "34 In Waist X 32 In Inseam",
    "34 In Waist X 34 In Inseam",
    "36 In Waist X 34 In Inseam",
    "38 In Waist X 30 In Inseam",
    "40 In Waist X 34 In Inseam",
  ],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/thumbnails/burnt_olive.jpeg",
    color_name: "Burnt Olive",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/burnt_olive/olive_6.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/thumbnails/carbon.jpeg",
    color_name: "Carbon",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/carbon/carbon_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/carbon/carbon_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/carbon/carbon_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/carbon/carbon_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/carbon/carbon_5.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/thumbnails/dark_khaki.jpeg",
    color_name: "Dark Khaki",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/KUHL+Radikl+Pants+-+Men's/dark_khaki/khaki_7.jpeg"
    ]
  }
});

Product.create({
  id: 10,
  brand: "Kari Traa",
  name: "Kari Traa Rothe Mid-Layer Fleece - Women's",
  category: "jacket",
  gender: "W",
  price: 90.00,
  rating: {
    rating_avg: 4.6,
    rating_ct: 14
  },
  size: ["S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/thumbnails/burgundy.png",
    color_name: "Burgundy",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/burgundy/burgundy_8.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/black/black_5.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/thumbnails/lavender.png",
    color_name: "Lavender",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/lavender/lavender_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/lavender/lavender_2.jpeg"
    ]
  },
  color_4: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/thumbnails/white.png",
    color_name: "White",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kari+Traa+Rothe+Mid-Layer+Fleece+-+Women's/white/white_7.jpeg"
    ]
  }
});

Product.create({
  id: 11,
  brand: "KUHL",
  name: "KUHL Burr Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 129.00,
  rating: {
    rating_avg: 4.3,
    rating_ct: 60
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/thumbnails/espresso.png",
    color_name: "Espresso",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/espresso/espresso_1.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/thumbnails/forged_iron.jpeg",
    color_name: "Forged Iron",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/forged_iron/forged_iron_7.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/thumbnails/gunmetal.png",
    color_name: "Gunmetal",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Burr+Jacket+-+Men's/gunmetal/gunmetal_10.jpeg"
    ]
  }
});

Product.create({
  id: 12,
  brand: "KUHL",
  name: "KUHL Interceptr Fleece Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 115.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 35
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/thumbnails/shale.jpeg",
    color_name: "Shale",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/shale/shale_7.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/black/black_6.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/thumbnails/mutiny_blue.jpeg",
    color_name: "Mutiny Blue",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/mutiny_blue/mutiny_blue_6.jpeg"
    ]
  },
  color_4: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/thumbnails/red_rock.jpeg",
    color_name: "Red Rock",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Kuhl+Interceptr+Fleece+Jacket+-+Men's/red_rock/red_rock_6.jpeg"
    ]
  }
});

Product.create({
  id: 13,
  brand: "Patagonia",
  name: "Patagonia Los Gatos Quarter-Zip Fleece Pullover - Women's",
  category: "jacket",
  gender: "W",
  price: 99.00,
  rating: {
    rating_avg: 3.5,
    rating_ct: 56
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/thumbnails/century_pink.jpeg",
    color_name: "Century Pink",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/century_pink/pink_6.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/thumbnails/drifter_grey.png",
    color_name: "Drifter Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's/drifter_grey/drifter_grey+1.jpeg"
    ]
  }
});

Product.create({
  id: 14,
  brand: "Patagonia",
  name: "Patagonia Pile-Lined Trucker Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 179.00,
  rating: {
    rating_avg: 0.0,
    rating_ct: 0
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/thumbnails/forge_grey.png",
    color_name: "Forge Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/forge_grey/grey_1.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/thumbnails/mojave_khaki.png",
    color_name: "Mojave Khaki",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/mojave_khaki/khaki_1.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/thumbnails/new_navy.png",
    color_name: "New Navy",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's/new_navy/navy.jpeg"
    ]
  }
});

Product.create({
  id: 15,
  brand: "Patagonia",
  name: "Patagonia R2 Fleece Vest - Women's",
  category: "jacket",
  gender: "W",
  price: 129.00,
  rating: {
    rating_avg: 5.0,
    rating_ct: 1
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/thumbnails/birch_white.png",
    color_name: "Birch White",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/birch_white/white_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/birch_white/white_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/birch_white/white_3.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/black/black_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/black/black_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/black/black_3.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/thumbnails/feather_grey.png",
    color_name: "Feather Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+R2+Fleece+Vest+-+Women's/feather_grey/grey_9.jpeg"
    ]
  }
});

Product.create({
  id: 16,
  brand: "Patagonia",
  name: "Patagonia Torrentshell Jacket - Women's",
  category: "jacket",
  gender: "W",
  price: 129.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 64
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/thumbnails/smokey_violet.png",
    color_name: "Smokey Violet",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_11.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_12.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/smokey_violet/violet_13.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/thumbnails/birch_white.jpeg",
    color_name: "Birch White",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Torrentshell+Jacket+-+Women's/birch_white/white_7.jpeg"
    ]
  }
});

Product.create({
  id: 17,
  brand: "Patagonia",
  name: "Patagonia Ultralight Black Hole Mini Hip Pack - Unisex",
  category: "bag",
  gender: "Unisex",
  price: 29.00,
  rating: {
    rating_avg: 5.0,
    rating_ct: 5
  },
  size: ["OS"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/thumbnails/cobalt_blue.jpeg",
    color_name: "Cobalt Blue",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/cobalt_blue/blue_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/cobalt_blue/blue_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/cobalt_blue/blue_3.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/thumbnails/olive.jpeg",
    color_name: "Olive",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/olive/olive_1.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/thumbnails/plum.jpeg",
    color_name: "Plum",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/plum/plum_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/plum/plum_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/Patagonia+Ultralight+Black+Hole+Mini+Hip+Pack+-+Unisex/plum/plum_3.jpeg"
    ]
  }
});

Product.create({
  id: 18,
  brand: "REI Co-op",
  name: "REI Co-op Active Pursuits Shell Jacket - Women's",
  category: "jacket",
  gender: "W",
  price: 89.95,
  rating: {
    rating_avg: 3.7,
    rating_ct: 3
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/black/black_5.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/thumbnails/desert_sage.jpeg",
    color_name: "Desert Sage",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_7.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_8.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/desert_sage/sage_11.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/thumbnails/olive_green.jpeg",
    color_name: "Olive Green",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/olive_green/olive_6.jpeg"
    ]
  },
  color_4: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/thumbnails/thunder_blue.jpeg",
    color_name: "Thunder Blue",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Active+Pursuits+Shell+Jacket+-+Women's/Thunder+Blue/blue_10.jpeg"
    ]
  }
});

Product.create({
  id: 19,
  brand: "REI Co-op",
  name: "REI Co-op Groundbreaker Fleece Jacket - Women's",
  category: "jacket",
  gender: "W",
  price: 49.95,
  rating: {
    rating_avg: 5.0,
    rating_ct: 4
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/thumbnails/asphalt_heather.jpeg",
    color_name: "Asphalt Heather",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/asphalt_heather/heather_8.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/black/black_9.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/thumbnails/deep_red.jpeg",
    color_name: "Deep Red",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Groundbreaker+Fleece+Jacket+-+Women's/deep_red/red_8.jpeg"
    ]
  }
});

Product.create({
  id: 20,
  brand: "REI Co-op",
  name: "REI Co-op Screeline Hybrid Pants - Women's",
  category: "pants",
  gender: "W",
  price: 79.95,
  rating: {
    rating_avg: 4.1,
    rating_ct: 153
  },
  size: ["0", "2", "4", "6", "8"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/black/black_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/black/black_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/black/black_4.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/thumbnails/odyssey_grey.jpeg",
    color_name: "Odyssey Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/odyssey_grey/odyssey_10.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/thumbnails/sage_grey.png",
    color_name: "Sage Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Screeline+Hybrid+Pants+-+Women's/sage_grey/sage_8.jpeg"
    ]
  }
});

Product.create({
  id: 21,
  brand: "REI Co-op",
  name: "REI Co-op Stormhenge 850 Down Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 249.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 105
  },
  size: ["S", "M", "L", "XL", "XXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/thumbnails/blazing_red.jpeg",
    color_name: "Blazing Red",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_11.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/blazing_red/red_12.jpeg",
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/black/black_1.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/thumbnails/dark_army_cot.jpeg",
    color_name: "Dark Army Cot",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_8.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_9.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_10.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's/dark_army_cot/army_11.jpeg"
    ]
  }
});

Product.create({
  id: 22,
  brand: "The North Face",
  name: "The North Face Arrowood Triclimate 3-in-1 Jacket - Men's",
  category: "jacket",
  gender: "M",
  price: 219.00,
  rating: {
    rating_avg: 5.0,
    rating_ct: 2
  },
  size: ["S", "M", "L", "XL", "XXL", "XXXL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/thumbnails/black.png",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/black/black_5.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/thumbnails/grey.png",
    color_name: "Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Arrowood+Triclimate+3-in-1+Jacket+-+Men's/grey/grey_6.jpeg"
    ]
  }
});

Product.create({
  id: 23,
  brand: "The North Face",
  name: "The North Face Heritage Crew Sweatshirt - Women's",
  category: "jacket",
  gender: "W",
  price: 45.00,
  rating: {
    rating_avg: 0.0,
    rating_ct: 0
  },
  size: ["XS", "S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/thumbnails/white.png",
    color_name: "White",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/white/white_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/white/white_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/white/white_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/white/white_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/white/white_5.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/thumbnails/rose.jpeg",
    color_name: "Rose",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/rose/rose_6.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/thumbnails/clover.png",
    color_name: "Clover",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/clover/clover_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/clover/clover_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/clover/clover_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/clover/clover_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Heritage+Crew+Sweatshirt+-+Women's/clover/clover_5.jpeg"
    ]
  }
});

Product.create({
  id: 24,
  brand: "The North Face",
  name: "The North Face Recon Pack - Women's",
  category: "bag",
  gender: "W",
  price: 99.00,
  rating: {
    rating_avg: 4.5,
    rating_ct: 66
  },
  size: ["One Size"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/thumbnails/asphalt_grey.jpeg",
    color_name: "Asphalt Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/asphalt_grey/Asphalt+Grey+1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/asphalt_grey/Asphalt+Grey+2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/asphalt_grey/Asphalt+Grey+3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/asphalt_grey/Asphalt+Grey+4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/asphalt_grey/Asphalt+Grey+5.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/thumbnails/black.jpeg",
    color_name: "Black",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_1.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_2.jpeg", 
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/black/black_7.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/thumbnails/tin_grey.jpeg",
    color_name: "Tin Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/tin_grey/tin_grey_7.jpeg"
    ]
  },
  color_4: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/thumbnails/trellis_green.jpeg",
    color_name: "Trellis Green",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Recon+Pack+-+Unisex/trellis_green/trellis_green_6.jpeg"
    ]
  }
});

Product.create({
  id: 25,
  brand: "The North Face",
  name: "The North Face Train N Logo Full-Zip Fleece Hoodie - Men's",
  category: "jacket",
  gender: "M",
  price: 90.00,
  rating: {
    rating_avg: 4.6,
    rating_ct: 19
  },
  size: ["S", "M", "L", "XL"],
  color_1: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/thumbnails/black_green.jpeg",
    color_name: "Black Green",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_green/black_green_6.jpeg"
    ]
  },
  color_2: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/thumbnails/black_grey.jpeg",
    color_name: "Black Grey",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_1.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_2.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_3.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_4.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_5.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_6.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_7.jpeg",
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_grey/black_grey_8.jpeg"
    ]
  },
  color_3: {
    thumbnail: "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/thumbnails/black_tonal_camo.png",
    color_name: "Black Tonal Camo",
    color_img: [
      "https://rei-checkout-image-carousel1.s3-us-west-1.amazonaws.com/FEC_Images/The+North+Face+Train+N+Logo+Full-Zip+Fleece+Hoodie+-+Men's/black_tonal_camo/black_camo_1.jpeg"
    ]
  }
});
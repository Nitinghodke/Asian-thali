import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  // products:[
  //   {
  //     "imageCredit": {
  //       "artist": "Martin Wessely",
  //       "link": "http://www.resplashed.com/photographer/martin_wessely/"
  //     },
  //     "tags": [
  //       "Trees"
  //     ],
  //     "imageUrl": "http://www.resplashed.com/img/400_002e1ecb8bd2.jpg",
  //     "filename": "400_002e1ecb8bd2.jpg",
  //     "imageHash": "2b1d5b5ef4b37b4f5d0dccade1b69987",
  //     "price": 10.99,
  //     "name": "Handcrafted Trees Mug",
  //     "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
  //     "slug": "Handcrafted-Trees-Mug",
  //     "added": 1485723766805,
  //     "manufacturer": "OHara-Group",
  //     "itemType": "mug",
  //     "productImg": "mug-400_002e1ecb8bd2.jpg"
  //   },
  //   {
  //     "imageCredit": {
  //       "artist": "Patrick Fore",
  //       "link": "http://www.resplashed.com/photographer/patrick_fore/"
  //     },
  //     "tags": [
  //       "Beach",
  //       "Ocean",
  //       "Water"
  //     ],
  //     "imageUrl": "http://www.resplashed.com/img/400_00b425ea69e0.jpg",
  //     "filename": "400_00b425ea69e0.jpg",
  //     "imageHash": "9197d084a8309c5cc1c1860063bc4dda",
  //     "price": 19.99,
  //     "name": "Rustic Beach Mug",
  //     "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
  //     "slug": "Rustic-Beach-Mug",
  //     "added": 1481573896833,
  //     "manufacturer": "Sipes-Inc",
  //     "itemType": "mug",
  //     "productImg": "mug-400_00b425ea69e0.jpg"
  //   },
  // ],
  products:[
    {
      name: "chapati",
      price: 10,
      id: 1,
      quntity: 0,
      Image:
        "https://st2.depositphotos.com/1166351/6921/i/600/depositphotos_69213749-stock-photo-piadina-italian-tortilla-heap-with.jpg",
    },
    {
      name: "pickle",
      price: 20,
      id: 2,
      quntity: 0,
      Image:
        "https://static.toiimg.com/thumb/52851817.cms?imgsize=465371&width=800&height=800",
    },
    {
      name: "Curd",
      price: 30,
      id: 3,
      quntity: 0,
      Image:
        "https://img.onmanorama.com/content/dam/mm/en/food/diet-and-nutrition/images/2020/7/1/curd.jpg.transform/schema-4x3/image.jpg",
    },
    {
      name: "Sweet",
      price: 40,
      id: 6,
      quntity: 0,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeAwnx6DSfwIAglGik3UuPPXh8hf1ekoWyw&usqp=CAU",
    },
    {
      name: "Daal",
      price: 50,
      id: 4,
      quntity: 0,
      Image:
        "https://www.ndtv.com/cooks/images/masoor%20ki%20dal-620.jpg?downsize=200:155",
    },
    {
      name: "Paneer Dish",
      price: 70,
      id: 5,
      quntity: 0,
      Image:
        "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES.jpeg",
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer
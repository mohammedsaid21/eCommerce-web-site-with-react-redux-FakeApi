import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const insertProduct = createAsyncThunk(
  "product/insertProducts",
  async (product, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const res = await fetch("https://localhostworklaptest.sharedwithexpose.com/work/lap/test/public/api/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(product)
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message
      // return rejectedWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (product, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const res = await fetch("https://localhostworklaptest.sharedwithexpose.com/work/lap/test/public/api/products");
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

// let quantity = 0
// export const increseTheAmount = createAsyncThunk(
//   "product/increseTheAmount",
//   async (product, thunkAPI) => {
//     const { rejectedWithValue } = thunkAPI;
//     try {
//       const res = await fetch("http://localhost:3005/products");
//       const data = await res.json();

//       const addItem = data.filter((item) => (
//         item.id === product.id
//       ))
//       addItem[0].quantity = quantity
//       console.log('addItem ', addItem[0].quantity )
//       return data;
//     } catch (error) {
//       return rejectedWithValue(error.message);
//     }
//   }
// );

// Level 1 -> Create The Actions [pending, fulfilled, rejected]
// level 2 ->  dispatch The Actions [pending, fulfilled, rejected]
// level 3 -> The Extra Reducers

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    products: [],
    // 
    productsInCart: [],
    totalQuantity: 0,
    totalPrice: 0,
    yaRab: 0,
    isSign: null,
    search: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const newItem = action.payload;
      const existing = state.productsInCart.find(
        (item) => item.id === newItem.id
      );
      state.totalPrice += parseInt(newItem.price);
      if (existing) {
        state.totalQuantity++;
      } else {
        state.totalQuantity++;
        state.productsInCart.push(action.payload);
      }
    },
    increseQuantity: (state, action) => {
      state.totalQuantity += action.payload;
    },
    decreseQuantity: (state, action) => {
      state.totalQuantity -= action.payload;
      if (state.totalQuantity <= 1) {
        // state.totalQuantity = 0;
        // state.totalPrice = 0;
      } else {
        // console.log('aaaaaaa')
      }
    },
    totalPriceForElement: (state, action) => {
      state.totalPrice += action.payload;
    },
    totalPriceForElementDecrement: (state, action) => {
      state.totalPrice -= action.payload;
      if (state.totalQuantity <= 0) {
        state.totalPrice = 0;
      }
    },
    // 
    signIn: (state, action) => {
      state.isSign = action.payload;
    },
    removeItem: (state, action) => {
      // تمت العملية بعد عناء طويل (ساعة ونص وانا كتبت كل الطرق الي بتحدف من المصفوفة بس بالاخر كلهن صح طلعوا الغلط انه كنت اعمل فلتر للمصفوفة الي جاية برا مش الي من جوا الريدكس)
      const tatgetElement = action.payload.title;
      const forSearch = action.payload.productsInCart;
      const price = action.payload.price;
      state.totalPrice -= price;
      for (let index = 0; index < forSearch.length; index++) {
        const element = forSearch[index];
        if (tatgetElement === element.title) {
          const indexOfObject = forSearch.findIndex((object) => {
            return object.title === tatgetElement;
          });
          state.productsInCart.splice(indexOfObject, 1);
        }
      }
      if (state.productsInCart.length === 0) {
        state.totalQuantity = 0;
      }
    },
    // Search
    searchItem: (state, action) => {
      while (state.search.length) {
        state.search.pop()
      }
      const items = state.products
      for (let index = 0; index < items.length; index++) {
        const element = items[index]
        if(element.title.toLocaleLowerCase().includes(action.payload)) {
          state.search.push(element)
        } 
      }
    },
    sucsessOperation: (state, action) => {
      while (state.productsInCart.length > 0) {
        state.productsInCart.pop()
      }
    },

  },
  extraReducers: {
    // Get Products
    [getProducts.pending]: (state, action) => {
      // console.log(action);
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action);
    },
    // Insert The Proudct
    [insertProduct.pending]: (state, action) => {
      // console.log('action insert', action);
    },
    [insertProduct.fulfilled]: (state, action) => {
      state.product.push(action.payload);
      // console.log('Yes I did It ', action)
    },
    [insertProduct.rejected]: (state, action) => {
      // console.log('action insert',action);
    },
  },
});

export const {
  addProductToCart,
  increseQuantity,
  decreseQuantity,
  totalPriceForElement,
  totalPriceForElementDecrement,
  signIn,
  removeItem,
  searchItem,
  sucsessOperation
} = productSlice.actions;
export default productSlice.reducer;

// const indexOfObject = searchInCart.findIndex(o =>
//   o.id === targetItem
// )
// state.itemsInCart.splice(indexOfObject, 1);

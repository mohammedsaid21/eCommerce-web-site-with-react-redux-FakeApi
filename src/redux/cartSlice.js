import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    itemList: [],
    showCart: false,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state , action) => {
      const newItem = action.payload
      const existing = state.itemList.find((item) => item.id === newItem.id)

      state.totalQuantity += 1
      if (existing) {
        existing.totalPrice += parseInt(newItem.price);
        action.payload.quantity += 1
      } else {
        state.itemList.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: parseInt(newItem.price),
          productImg: newItem.image,
        })
        action.payload.quantity = 1
      }
    },
    // Get From Cart

    increseTotal: (state, action) => {
      state.totalQuantity++;
      state.value++;
    },

    decreseTotal: (state, action) => {
      state.totalQuantity--;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increseTotal, decreseTotal} = cartSlice.actions

export default cartSlice.reducer



// انا محمد من غزة مطور واجهة الأمامية ويب عندي خبرة كبيرة بتمكنني من انه اعمل مواقع بجودة قوية وأداء عالي ومتجاوبة مع جميع الاحجام والي 
// بتقدر تشوفها من البورتوفوليو الخاص بيا او على القيت هب

// PostgreSQL و نظام إدارة قواعد البيانات علائقي يعتمد التعامل معه على لغة إس كيو إل، يعمل على منصات متعددة من مثل أنظمة التشغي
// غو ‏ هي لغة برمجة مفتوحة المصدر من تطوير شركة جوجل. التصميم الأول للغة 
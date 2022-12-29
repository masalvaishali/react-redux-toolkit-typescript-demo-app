import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}
interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}
const initialState: CustomerState = {
  value: [],
};

export const customermerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customermerSlice.actions;
export default customermerSlice.reducer;

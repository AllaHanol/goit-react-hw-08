import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  apiAddNewContact,
  apiDeleteContact,
  apiGetAllContacts,
} from "../contacts/operations";
import { selectFilterValue } from "../filters/slice";
import { apiLogout } from "../auth/operations";

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
  .addCase(apiGetAllContacts.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiGetAllContacts.fulfilled, (state, action) => {
    state.isLoading = false;
    state.contacts = action.payload;
  })
  .addCase(apiGetAllContacts.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  
  .addCase(apiAddNewContact.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiAddNewContact.fulfilled, (state, action) => {
    state.isLoading = false;
    state.contacts.push(action.payload);
  })
  .addCase(apiAddNewContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  
  .addCase(apiDeleteContact.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiDeleteContact.fulfilled, (state, action) => {
    state.isLoading = false;
    state.contacts = state.contacts.filter(
      (contact) => contact.id !== action.payload.id
    );
  })
  .addCase(apiDeleteContact.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(apiLogout.fulfilled, (state)=>{
    state.contacts =[];
    state.error = null;
    state.isLoading = false;
  }),
 
});

export const contactsReducer = contactsSlice.reducer;
export const selectContactsItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

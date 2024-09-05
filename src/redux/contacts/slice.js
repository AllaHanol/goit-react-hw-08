import {
    createSlice,
    createSelector,
  } from "@reduxjs/toolkit";
  import {
    fetchContacts,
    deleteContact,
    addContact,
  } from "./contactsOps.js";
  
  
  const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
  };
  
  export const selectContacts = (state) =>
    state.contacts.items;
  
  export const selectFilter = (state) =>
    state.filters.name;
  
  export const selectFilteredContacts =
    createSelector(
      [selectContacts, selectFilter],
      (contacts, filterValue) =>
        contacts.filter((contact) =>
          contact.name
            .toLowerCase()
            .includes(
              filterValue.toLowerCase(),
            ),
        ),
    );
  const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
  
    reducers: {

    },
    extraReducers: (builder) =>
      builder
        .addCase(
          fetchContacts.pending,
          (state) => {
            state.loading = true;
            state.error = null;
          },
        )
        .addCase(
          fetchContacts.fulfilled,
          (state, action) => {
            state.loading = false;
            state.items = action.payload; // Оновлено, щоб зберегти контакти в items
          },
        )
        .addCase(
          fetchContacts.rejected,
          (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
        )
  
        .addCase(
          deleteContact.pending,
          (state) => {
            state.loading = true;
            state.error = null;
          },
        )
        .addCase(
          deleteContact.fulfilled,
          (state, action) => {
            state.loading = false;
            state.items =
              state.items.filter(
                (item) =>
                  item.id !==
                  action.payload.id,
              );
          },
        )
        .addCase(
          deleteContact.rejected,
          (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
        )
  
        .addCase(
          addContact.pending,
          (state) => {
            state.loading = true;
            state.error = null;
          },
        )
        .addCase(
          addContact.fulfilled,
          (state, action) => {
            state.loading = false;
            state.items.push(
              action.payload,
            );
          },
        )
        .addCase(
          addContact.rejected,
          (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
        ),
  });
  
  
  export const contactsReducer =
    contactsSlice.reducer;
  export const contactsArr = (state) =>
    state.contacts.items;
  
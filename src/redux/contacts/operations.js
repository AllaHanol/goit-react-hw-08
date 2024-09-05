import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts =
  createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
      try {
        const { data } =
          await axios.get(
            "https://connections-api.goit.global/",
        );

        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const deleteContact =
  createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
      try {
        const { data } =
          await axios.delete(
            `https://connections-api.goit.global/${id}`,
          );
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const addContact =
  createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
      try {
        const { data } =
          await axios.post(
            "https://connections-api.goit.global/",
            contact,
          );

        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );

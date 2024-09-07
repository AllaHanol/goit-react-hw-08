import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { profilesReducer } from "./profiles/profilesReducer";
// import { postsReducer } from "./posts/posts.slice";
import { authReducer } from "./auth/slice";
import { filtersReducer } from "./filters/slice";
import { contactsReducer} from "./contacts/slice";


const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // profiles: profilesReducer,
    // posts: postsReducer,
    filter: filtersReducer,
    auth: persistReducer(authConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

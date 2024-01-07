import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  contact: {
    name: '',
    number: '',
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContactAction: (state, { payload }) => {
      return {
        ...state,
        contact: { ...state.contact, ...payload },
      };
    },

    addContactAction: {
      prepare: (data) => {
        const newData = {
          ...data,
          id: nanoid(),
        };

        return {
          payload: newData,
        };
      },

      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },

    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },

    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {
  saveContactAction,
  addContactAction,
  removeContactAction,
  setFilterAction,
} = contactsSlice.actions;

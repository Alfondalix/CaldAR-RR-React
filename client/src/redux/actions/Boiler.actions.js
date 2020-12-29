import { ADD_BOILER, DELETE_BOILER, EDIT_BOILER } from '../types/Boiler.types';

export const addBoiler = (content) => ({
  type: ADD_BOILER,
  payload: {
    id: Math.floor(Math.random() * 101),
    ...content,
  },
});

export const deleteBoiler = (number) => ({
  type: DELETE_BOILER,
  payload: number,
});

export const editBoiler = (content) => ({
  type: EDIT_BOILER,
  payload: content,
});
import create from "zustand";
import type { SuccessDTO } from "../api/customAPI";

interface ResultStore {
  result: SuccessDTO[];
  addResult: (value: SuccessDTO) => void;
  removeResult: (value: SuccessDTO) => void;
}

const useResultStore = create<ResultStore>((set) => ({
  result: [],
  addResult: (value: SuccessDTO) =>
    set((state) => ({
      result: [value, ...state.result],
    })),
  removeResult: (value: SuccessDTO) =>
    set((state) => ({
      result: state.result.filter((ele) => ele !== value),
    })),
}));

export default useResultStore;

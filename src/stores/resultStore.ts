import create from "zustand";
import type { SuccessDTO } from "../api/customAPI";

interface ResultStore {
  result: SuccessDTO[];
  addResult: (value: SuccessDTO) => void;
}

const useResultStore = create<ResultStore>((set) => ({
  result: [],
  addResult: (value: SuccessDTO) =>
    set((state) => ({
      result: [...state.result, value],
    })),
}));

export default useResultStore;
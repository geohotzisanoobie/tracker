// Config
import { root } from "./config";

export const api = {
  summary: {
    fetch() {
      return fetch(`${root}/summary`, {
        method: "GET",
      });
    },
  },
};

import type { Demo } from "@/types";
type Round = Demo.Round;

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}admin/rounds`;


function mapRound(apiData: any): Round {
  return {
    id: apiData.id,
    quarter: apiData.quarter,
    start: apiData.start,
    end: apiData.end,
    status: apiData.status,
  };
}

export const RoundService = {
  getRounds() {
    return fetch(URL, { headers: { "Cache-Control": "no-cache" } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => data.map(mapRound) as Round[]);
  },

  getRoundById(id: number) {
    return fetch(`${URL}/${id}`, {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(mapRound);
  },

  createRound(round: Round) {
    return fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(round),
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json().then(mapRound);
    });
  },

  updateRound(id: number, round: Partial<Omit<Round, "id">>) {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(round),
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json().then(mapRound);
    });
  },

  deleteRound(id: number) {
    return fetch(`${URL}/${id}`, { method: "DELETE" }).then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return true;
    });
  },
};

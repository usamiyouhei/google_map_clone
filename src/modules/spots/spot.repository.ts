import api from "../../lib/api";
import { Spot } from "./spot.entity";

export const spotRepository = {
  async getSpots(): Promise<Spot[]> {
    const result = await api.get("/spots");
    return result.data.map((spot: Spot) => new Spot(spot));
  },
};

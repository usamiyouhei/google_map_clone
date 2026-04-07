import api from "../../lib/api";

export const favoriteRepository = {
  async addFavorite(spotId: string): Promise<void> {
    await api.post(`/favorites/${spotId}`);
  },
  async removeFavorite(spotId: string): Promise<void> {
    await api.delete(`/favorite/${spotId}`);
  },
};

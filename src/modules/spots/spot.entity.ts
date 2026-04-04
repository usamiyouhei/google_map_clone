export class Spot {
  id!: string;
  name!: string;
  category!: string;
  latitude!: number;
  longitude!: number;
  address?: string;
  isFavorite!: boolean;

  constructor(data: Spot) {
    Object.assign(this, data);
  }
}

export class Movie {
  constructor(
    public title: string = '',
    public reviews: Array<Review> = []
  ) { }
}

export class Review {
  constructor(
    public author: string = '',
    public stars: number = null,
    public review: string = '',
  ) { }
}

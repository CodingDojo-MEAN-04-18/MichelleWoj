export class Note {
  constructor(
    public id: number = Math.floor(Math.random() * 999) + 1,
    public text: string = '',
  ) { }
}

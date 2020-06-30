export class Doctor{
  constructor(
    public name: string,
    public intro: string,
    public imgUrl: string,
    public specialties: Array<string>,
    ) {
  }
}

export class FaceSnap {
  /* // façon verbeuse de faire:
  title: string;
  description: string;
  createdAt: Date;
  snaps: number;
  imageSrc: string;

  constructor(title: string, description: string, createdAt: Date, snaps: number, imageSrc: string, snapped: boolean) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.snaps = snaps;
    this.imageSrc = imageSrc;
  }
  */
  // Ce code, permis par TypeScript, est equivalent au code ci-dessus entre commentaires:
  /*
  constructor(public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public imageSrc: string,
    public location?: string // this one added later on, optional parameter / property
  ) { }
  */
  // Ou alors, sans constructeur... (ce sera instancié sans le mot clé "new" mais comme un objet)
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageSrc!: string;
  location?: string;
}

export interface IEmblems {
  id: number;
  slug: string;
  name: string;
  image: string;
}

export interface IInitialState {
  emblems: IEmblems[];
  loading: boolean;
}

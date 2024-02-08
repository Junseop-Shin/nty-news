export interface NewsDTO {
  byline: { original: string };
  headline: { main: string };
  source: string;
  pub_date: Date;
}

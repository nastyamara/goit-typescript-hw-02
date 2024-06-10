export interface Image {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

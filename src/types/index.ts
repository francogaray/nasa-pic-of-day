export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  mediaType?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStackParams = {
  Home: undefined;
  Detail: PostImage;
};

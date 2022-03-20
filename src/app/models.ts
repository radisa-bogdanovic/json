export interface User {
  id: number;
  name: string;
  username: String;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    cathPhrase: string;
    bs: string;
  };
}
export interface todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface picture {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

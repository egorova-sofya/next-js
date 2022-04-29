export type addressType = {
  street: string;
  suite: string;
  city: string;
};

export type contactType = {
  name: string;
  email: string;
  address: addressType;
};

export type Post = {
  title: string;
  body: string;
};

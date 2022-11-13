export type UserType = {
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  token?: string,
  username?: string,
  bio?: string,
  image?: string,
  following?: boolean,
  email?: string,
  password?: string,
}

export type ProfileType = {
    username: string
    bio: string
    image: string,
    following: boolean
}

export interface Profile {
  profile: ProfileType
}
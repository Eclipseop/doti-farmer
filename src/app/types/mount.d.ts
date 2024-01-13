export interface MountDataResponse {
  _links: Links;
  mounts: Mount[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Mount {
  mount: Mount2;
  is_useable: boolean;
  is_favorite?: boolean;
}

export interface Mount2 {
  key: Key;
  name: string;
  id: number;
}

export interface Key {
  href: string;
}

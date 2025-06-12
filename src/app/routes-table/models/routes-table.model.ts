export interface Route {
  uuid: number;
  address: string;
  mask: string;
  gateway: string;
  interface: Iinterface;
}

export enum Iinterface {
  'ETHERNET-CONNECTION' = 'Подключение Ethernet',
  'HOME-NETWORK' = 'Домашняя сеть',
  'GUEST-NETWORK' = 'Гостевая сеть',
}

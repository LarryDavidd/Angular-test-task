import { Iinterface, Route } from '../models/routes-table.model';

const route: Route[] = [
  {
    uuid: 1,
    address: '192.168.1.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.1',
    interface: Iinterface['ETHERNET-CONNECTION'],
  },
  {
    uuid: 2,
    address: '10.0.0.0',
    mask: '255.0.0.0',
    gateway: '10.0.0.1',
    interface: Iinterface['HOME-NETWORK'],
  },
  {
    uuid: 3,
    address: '172.16.0.0',
    mask: '255.255.0.0',
    gateway: '172.16.0.1',
    interface: Iinterface['ETHERNET-CONNECTION'],
  },
  {
    uuid: 4,
    address: '192.168.0.0',
    mask: '255.255.255.0',
    gateway: '192.168.0.1',
    interface: Iinterface['GUEST-NETWORK'],
  },
  {
    uuid: 5,
    address: '8.8.8.8',
    mask: '255.255.255.255',
    gateway: '192.168.1.1',
    interface: Iinterface['HOME-NETWORK'],
  },
  {
    uuid: 6,
    address: '0.0.0.0',
    mask: '0.0.0.0',
    gateway: '192.168.1.254',
    interface: Iinterface['ETHERNET-CONNECTION'],
  },
  {
    uuid: 7,
    address: '169.254.0.0',
    mask: '255.255.0.0',
    gateway: '0.0.0.0',
    interface: Iinterface['HOME-NETWORK'],
  },
  {
    uuid: 8,
    address: '192.168.2.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.2',
    interface: Iinterface['ETHERNET-CONNECTION'],
  },
  {
    uuid: 9,
    address: '10.10.10.0',
    mask: '255.255.255.0',
    gateway: '10.10.10.1',
    interface: Iinterface['GUEST-NETWORK'],
  },
];

export { route };

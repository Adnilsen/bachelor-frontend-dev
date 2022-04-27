export interface Collateral {
  id: number;
  brokerId: number;
  brokerAccount: number
  purchaseAmount: number;
  socialSecurityNr: number;
  purchaseDate: Date;
  realEstate: RealEstate;
}

export interface RealEstate {
  id: number;
  address: string;
  type: string;
  energyClass: string;
  unitNumber?: number;
  cooperativeName?: string;
  sharedDebt?: number;
  postalCode?: string;
  cadastralNumber?: number;
  titleNumber?: number;
  sectionNumber?: number;
  leaseNumber?: number;
}

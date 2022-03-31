export interface Collateral {
  id: number;
  brokerId: number;
  socialSecurityNr: number;
  purchaseDate: Date;
  realEstate: RealEstate;
}

export interface RealEstate {
  id: number;
  address: string;
  type: string;
  purchaseAmount: number;
  unitNumber?: number;
  cooperativeName?: string;
  sharedDebt?: number;
  postalCode?: string;
  cadastralNumber?: number;
  titleNumber?: number;
  sectionNumber?: number;
  leaseNumber?: number;
}

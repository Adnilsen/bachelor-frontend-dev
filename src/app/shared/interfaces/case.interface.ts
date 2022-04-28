import { Product } from './product.interface';
import { Customer } from './customer.interface';

export interface Case {
  caseId: number;
  status: string;
  purchaseAmount: number;
  loanAmount: number;
  income: number;
  equity: number;
  debt: number;
  date: Date;
  product: Product;
  customer: Customer;
  downpaymentPeriod?: number;
}

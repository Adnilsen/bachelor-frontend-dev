import { Product } from './product.interface';
import { Customer } from './customer.interface';

export interface Case {
  caseId: number;
  status: string;
  amount: number;
  finished: boolean;
  date: Date;
  product: Product;
  customer: Customer;
  gatheredDebt: number;
  totalEquity: number;
}

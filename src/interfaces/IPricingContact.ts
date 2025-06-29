import { IPricingContactMethod } from "./IPricingContactMethod";

export interface IPricingContact {
  title: string;
  description: string;
  methods: IPricingContactMethod[];
}

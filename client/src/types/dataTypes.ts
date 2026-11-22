import type { LucideIcon } from "lucide-react";

export type FAQCategory =
  | "account"
  | "transactions"
  | "budgets"
  | "reports"
  | "security"
  | "general";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  icon: LucideIcon;
}

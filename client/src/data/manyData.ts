import {
  ArrowLeftRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CircleAlert,
  CircleHelp,
  Download,
  EyeOff,
  FileText,
  Headset,
  KeyRound,
  Landmark,
  Layers,
  ListChecks,
  Mail,
  Pencil,
  Plus,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Tags,
  Target,
  Trash2,
  UserMinus,
  UserPlus,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";
import type { FAQItem } from "../types/dataTypes";

export const heroHighlightsData = [
  {
    id: 1,
    text: "Free to use",
  },
  {
    id: 2,
    text: "Easy to set up",
  },
  {
    id: 3,
    text: "Track your goals",
  },
];

export const featuresData = [
  {
    id: 1,
    icon: ArrowLeftRight,
    title: "Income & Expenses",
    description:
      "Record and organize your income and expenses. Keep track of every transaction.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Smart Budgets",
    description:
      "Set monthly spending limits and monitor your progress across categories.",
  },
  {
    id: 3,
    icon: ChartNoAxesColumnIncreasing,
    title: "Financial Insights",
    description:
      "Visualize your financial activity with interactive charts and statistics.",
  },
  {
    id: 4,
    icon: CalendarDays,
    title: "Recurring Transactions",
    description:
      "Keep track of recurring income and expenses, such as subscriptions and bills.",
  },
  {
    id: 5,
    icon: Target,
    title: "Savings Goals",
    description:
      "Set savings targets and monitor how you're progressing towards them.",
  },
  {
    id: 6,
    icon: FileText,
    title: "Reports & Analytics",
    description:
      "Review monthly reports, understand spending patterns and export your financial data.",
  },
];

export const eachstepsData = [
  {
    id: 1,
    number: "01",
    title: "Create your account",
    description: "Sign up and create your personal FinTrack account.",
  },
  {
    id: 2,
    number: "02",
    title: "Track your transactions",
    description:
      "Add income and expenses, organize categories and establish budgets.",
  },
  {
    id: 3,
    number: "03",
    title: "Understand your finances",
    description:
      "Review charts, monitor your budgets and make better financial decisions.",
  },
];

export const dashboardPreviewData = [
  {
    id: 1,
    text: "See your financial summary at a glance",
  },
  {
    id: 2,
    text: "Analyze your spending with charts",
  },
  {
    id: 3,
    text: "Monitor your progress towards your goals",
  },
];

export const benefitsData = [
  {
    id: 1,
    icon: Zap,
    title: "Better financial awareness",
    description:
      "Understand your spending habits and make more informed decisions.",
  },
  {
    id: 2,
    icon: Layers,
    title: "Organized finances",
    description:
      "Keep all your income, expenses and financial data in one place.",
  },
  {
    id: 3,
    icon: Target,
    title: "Smarter budgeting",
    description: "Set limits, stay on track and avoid overspending.",
  },
  {
    id: 4,
    icon: ChartNoAxesColumnIncreasing,
    title: "Clear financial reports",
    description:
      "Analyze your progress over time with detailed reports and charts.",
  },
];

export const faqDataHome = [
  {
    id: "faq-1",
    question: "What is FinTrack?",
    answer:
      "FinTrack is a personal finance management application that helps you organize your income and expenses, create budgets, track savings goals, and understand your spending habits through clear financial reports and interactive charts.",
  },
  {
    id: "faq-2",
    question: "Do I need an account to use FinTrack?",
    answer:
      "You can explore the public FinTrack website without an account. However, registration and authentication are required to manage your personal transactions, budgets, savings goals, and financial reports.",
  },
  {
    id: "faq-3",
    question: "Can I track recurring expenses?",
    answer:
      "Yes! FinTrack supports recurring transactions, allowing you to keep track of regular expenses such as subscriptions, rent, utility bills, and other periodic payments.",
  },
  {
    id: "faq-4",
    question: "Can I create monthly budgets?",
    answer:
      "Absolutely! You can create monthly budgets for different spending categories, set spending limits, and monitor your progress to keep your expenses under control.",
  },
  {
    id: "faq-5",
    question: "Can I export financial reports?",
    answer:
      "Yes! You can review your financial activity through monthly reports and export your financial data in CSV format for further analysis or personal record-keeping.",
  },
];

/////////////

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is FinTrack?",
    answer:
      "FinTrack is a personal finance management application that helps you organize your income and expenses, create budgets, track savings goals, and understand your spending habits through clear financial reports and interactive charts.",
    category: "general",
    icon: CircleHelp,
  },
  {
    id: "faq-2",
    question: "Do I need an account to use FinTrack?",
    answer:
      "You can explore the public FinTrack website without an account. However, registration and authentication are required to manage your personal transactions, budgets, savings goals, and financial reports.",
    category: "account",
    icon: UserRound,
  },
  {
    id: "faq-3",
    question: "Can I track recurring expenses?",
    answer:
      "Yes! FinTrack supports recurring transactions, allowing you to keep track of regular expenses such as subscriptions, rent, utility bills, and other periodic payments.",
    category: "transactions",
    icon: Repeat,
  },
  {
    id: "faq-4",
    question: "Can I create monthly budgets?",
    answer:
      "Absolutely! You can create monthly budgets for different spending categories, set spending limits, and monitor your progress to keep your expenses under control.",
    category: "budgets",
    icon: Wallet,
  },
  {
    id: "faq-5",
    question: "Can I export financial reports?",
    answer:
      "Yes! You can review your financial activity through monthly reports and export your financial data in CSV format for further analysis or personal record-keeping.",
    category: "reports",
    icon: Download,
  },
  {
    id: "faq-6",
    question: "How do I create a FinTrack account?",
    answer:
      "Creating an account is simple. Navigate to the Sign Up page, enter your full name, email address, and password, confirm your password, and submit the registration form. Once registered, you can sign in and start managing your finances.",
    category: "account",
    icon: UserPlus,
  },
  {
    id: "faq-7",
    question: "What should I do if I forget my password?",
    answer:
      "Navigate to the Sign In page and select the Forgot Password option. Enter the email address associated with your account and follow the password reset instructions.",
    category: "account",
    icon: KeyRound,
  },
  {
    id: "faq-8",
    question: "Can I change the email address associated with my account?",
    answer:
      "Yes. You can update your email address through your account settings. You may be asked to verify the new email address before the change takes effect.",
    category: "account",
    icon: Mail,
  },
  {
    id: "faq-9",
    question: "Can I delete my FinTrack account?",
    answer:
      "Yes. You can request account deletion through your account settings. Before confirming, make sure you have exported any financial information you want to keep.",
    category: "account",
    icon: UserMinus,
  },
  {
    id: "faq-10",
    question: "How can I add a new transaction?",
    answer:
      "Open the Transactions section and select Add Transaction. Enter the transaction description, amount, type, category, and date. After saving, the transaction will appear in your transaction history and contribute to your financial overview.",
    category: "transactions",
    icon: Plus,
  },
  {
    id: "faq-11",
    question: "Can I edit an existing transaction?",
    answer:
      "Yes. Navigate to your Transactions page, find the transaction you want to update, and select the Edit option. You can modify its description, amount, category, date, or other available details.",
    category: "transactions",
    icon: Pencil,
  },
  {
    id: "faq-12",
    question: "How can I delete a transaction?",
    answer:
      "Find the transaction in your transaction history, open its available actions, and select Delete. You should review the transaction before confirming its removal.",
    category: "transactions",
    icon: Trash2,
  },
  {
    id: "faq-13",
    question: "Can I organize transactions into categories?",
    answer:
      "Yes! FinTrack allows you to organize transactions into categories such as Food, Transport, Shopping, Entertainment, Salary, and more. You can also manage your own categories to better match your spending habits.",
    category: "transactions",
    icon: Tags,
  },
  {
    id: "faq-14",
    question: "What happens when I reach my budget limit?",
    answer:
      "FinTrack helps you monitor your spending as you approach your budget limit. You can review the amount spent, see how much remains, and adjust your spending plans when necessary. Reaching a budget limit does not automatically block purchases.",
    category: "budgets",
    icon: CircleAlert,
  },
  {
    id: "faq-15",
    question: "Can I edit or delete an existing budget?",
    answer:
      "Yes. Open the Budgets section, select the budget you want to manage, and choose the appropriate action. You can update spending limits or remove budgets that you no longer need.",
    category: "budgets",
    icon: Pencil,
  },
  {
    id: "faq-16",
    question: "Can I create personal savings goals?",
    answer:
      "Yes! You can create savings goals by specifying a goal name and target amount. For example, you might save for a new laptop, a vacation, or an emergency fund.",
    category: "budgets",
    icon: Target,
  },
  {
    id: "faq-17",
    question: "How can I monitor my savings goal progress?",
    answer:
      "Your savings goals include progress information showing how much you have saved compared with your target amount. This helps you understand how close you are to reaching each goal.",
    category: "budgets",
    icon: BarChart3,
  },
  {
    id: "faq-18",
    question: "What information can I see in financial reports?",
    answer:
      "Financial reports provide an overview of your income, expenses, spending categories, and financial activity over time. Interactive charts help you identify spending patterns and better understand where your money goes.",
    category: "reports",
    icon: FileText,
  },
  {
    id: "faq-19",
    question: "Can I filter financial reports by date?",
    answer:
      "Yes. You can select a reporting period to review your financial activity for a particular month or date range. This makes it easier to compare different periods and analyze changes in your spending habits.",
    category: "reports",
    icon: CalendarDays,
  },
  {
    id: "faq-20",
    question: "Can other users see my financial information?",
    answer:
      "Your financial records are associated with your individual account and should only be accessible to you after authentication. Always protect your login credentials and avoid sharing access to your account.",
    category: "security",
    icon: EyeOff,
  },
  {
    id: "faq-21",
    question: "How can I keep my FinTrack account secure?",
    answer:
      "Use a strong and unique password, never share your login credentials, and always sign out when using a shared or public device. Keeping your account information private helps protect your financial records.",
    category: "security",
    icon: ShieldCheck,
  },
  {
    id: "faq-22",
    question: "What should I do if I notice unfamiliar activity?",
    answer:
      "If you notice transactions or account activity you do not recognize, change your password as soon as possible and contact the FinTrack support team for assistance.",
    category: "security",
    icon: ShieldAlert,
  },
  {
    id: "faq-23",
    question: "Does FinTrack require my bank login details?",
    answer:
      "No. FinTrack is designed for manually recording your income and expenses. You can enter your financial transactions without providing your online banking username or password.",
    category: "security",
    icon: Landmark,
  },
  {
    id: "faq-24",
    question: "Can I use FinTrack on my mobile device?",
    answer:
      "Yes! FinTrack is designed as a responsive web application that you can access through a browser on desktops, tablets, and mobile devices. The interface adapts to different screen sizes for a convenient experience.",
    category: "general",
    icon: Smartphone,
  },
  {
    id: "faq-25",
    question: "Is FinTrack free to use?",
    answer:
      "FinTrack is designed to provide its core personal finance management features without requiring a paid subscription. You can use its main tools to organize transactions, manage budgets, and monitor your financial progress.",
    category: "general",
    icon: BadgeCheck,
  },
];

// Categories used by the FAQ navigation
export const faqCategories = [
  {
    id: "all",
    label: "All Questions",
    icon: ListChecks,
  },
  {
    id: "account",
    label: "Account",
    icon: UserRound,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: Repeat,
  },
  {
    id: "budgets",
    label: "Budgets",
    icon: Wallet,
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
  },
  {
    id: "security",
    label: "Security",
    icon: ShieldCheck,
  },
  {
    id: "general",
    label: "General",
    icon: CircleHelp,
  },
] as const;

// Automatically calculate category counts
export const faqCategoryCounts = faqCategories.map((category) => ({
  ...category,
  count:
    category.id === "all"
      ? faqData.length
      : faqData.filter((item) => item.category === category.id).length,
}));

export const supportHighlightsData = [
  {
    id: 1,
    icon: Zap,
    title: "Quick Answers",
    description: "Find the information you need fast.",
  },
  {
    id: 2,
    icon: Layers,
    title: "Feature Guides",
    description: "Step-by-step explanations for key features.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Account & Security",
    description: "Learn how we keep your data safe and private.",
  },
  {
    id: 4,
    icon: Headset,
    title: "Still Have Questions?",
    description: "Contact our support team anytime.",
  },
];

import { GiWallet } from "react-icons/gi"
import { FaChartPie, FaPiggyBank, FaTags, FaChartArea } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
export const features = [
    {
        id: 0,
        icon: GiWallet,
        title: "Smart Expense Tracking",
        content: "Effortlessly log and categorize every transaction in real time. FinMate’s intuitive system makes it simple to see exactly where your money goes."
    },
    {
        id: 1,
        icon: FaChartPie,
        title: "Intelligent Budgeting Tools",
        content: "Create dynamic budgets that adjust to your spending habits. Receive alerts and suggestions to keep your finances on track without overspending."
    },
    {
        id: 3,
        icon: FaPiggyBank,
        title: "Savings Goal Planner",
        content: "Set, visualize, and track your savings milestones. FinMate motivates you by celebrating progress toward your financial targets."
    },
    {
        id: 4,
        icon: IoIosNotifications,
        title: "Personalized Notifications & Alerts",
        content: "Stay informed with timely alerts and reminders. Whether it’s a bill due or a budget threshold, FinMate ensures you’re always in the know."
    },
    {
        id: 5,
        icon: FaTags,
        title: "Customizable Categories & Tags",
        content: "Organize your expenses your way by creating custom categories and tags. Tailor your tracking experience to fit your personal financial style."
    },
    {
        id: 6,
        icon: FaChartArea,
        title: "Comprehensive Financial Reports",
        content: "Access detailed and visually appealing reports that break down your income, expenses, and savings trends. Make informed decisions with clear financial insights."
    }
]

export const steps = [
    {
        id: 1,
        title: "Sign Up & Personalize",
        description: "Create your account and customize your profile. Set your financial preferences to receive a personalized experience from day one.",
        image: "reg_profile.png",
        lists: [
            {
                id: 1,
                title: "Create Your Account",
                content: "Register using your email or social login."
            },
            {
                id: 2,
                title: "Set Your Preferences",
                content: "Choose your preferred currency, language, and notification settings."
            },
            {
                id: 3,
                title: "Customize Your Dashboard",
                content: "Tailor the look and feel of your profile for a personalized experience."
            }
        ],
    },
    {
        id: 2,
        title: "Link & Organize Your Finances",
        description: "Manually input or import your income and expenses. FinMate helps you categorize your transactions, giving you clear visibility into your spending habits.",
        image: "card.png",
        lists: [
            {
                id: 1,
                title: "Input Transactions",
                content: "Manually add your income and expenses for full control."
            },
            {
                id: 2,
                title: "Categorize Automatically",
                content: "Use pre-defined categories to organize transactions effortlessly."
            },
            {
                id: 3,
                title: "Tag Recurring Expenses",
                content: "Mark regular payments for easy tracking over time."
            },
            {
                id: 4,
                title: "Review Financial Data",
                content: "Consolidate all your entries into an organized, easy-to-navigate interface."
            }
        ]
    },
    {
        id: 3,
        title: "Set Your Budget & Savings Goals",
        description: "Define dynamic budgets and establish savings milestones tailored to your lifestyle. This step ensures you’re set up for success from the start.",
        image: "piggy_bank.png",
        lists: [
            {
                id: 1,
                title: "Create Budget Categories",
                content: "Define budgets for essentials like groceries, bills, and entertainment."
            },
            {
                id: 2,
                title: "Establish Savings Targets",
                content: "Set realistic savings goals that align with your financial priorities."
            },
            {
                id: 3,
                title: "Schedule Periodic Reviews",
                content: "Choose weekly or monthly intervals to assess your budget’s performance."
            },
            {
                id: 4,
                title: "Receive Custom Alerts",
                content: "Get notifications when you're nearing your budget limits or hitting savings milestones."
            }
        ]
    },
    {
        id: 4,
        title: "Track, Analyze & Optimize",
        description: "Monitor your progress through intuitive dashboards and detailed reports. Use these insights to adjust your spending and maximize your savings.",
        image: "chart_4.png",
        lists: [
            {
                id: 1,
                title: "Visualize Your Data",
                content: "Use intuitive dashboards to monitor your spending and savings trends."
            },
            {
                id: 2,
                title: "Review Detailed Reports",
                content: "Dive into analytics that break down your income, expenses, and progress over time."
            },
            {
                id: 3,
                title: "Get Actionable Insights",
                content: "Receive recommendations to fine-tune your spending habits."
            },
            {
                id: 4,
                title: "Receive recommendations to fine-tune your spending habits.",
                content: "Modify your budgets and goals based on real-time feedback to optimize financial health."
            }
        ]
    }
]
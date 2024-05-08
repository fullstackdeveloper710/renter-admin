import { AppConstants } from './appConstants';
export const routeConfig = [
  {
    title: AppConstants.sidebarConstants.dashboard,
    link: 'dashboard',
    path: '/src/pages/app',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageUsers,
    link: 'manage-users',
    path: '/src/pages/manageUsers/index',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: 'Add User',
    link: 'manage-users/add-user',
    path: '/src/pages/manageUsers/add-user.jsx',
    show: false,
  },
  {
    title: 'Add Employee',
    link: 'manage-employees/add-employees',
    path: '/src/pages/manage-employees/add-employee.jsx',
    show: false,
  },
  {
    title: 'User details',
    link: 'manage-users/user-details',
    path: '/src/pages/manageUsers/user-details',
    show: false,
  },
  {
    title: AppConstants.sidebarConstants.manageEmployees,
    link: 'manage-employees',
    path: '/src/pages/manage-employees',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.rolesAndPremission,
    link: 'roles-permission',
    path: './pages/rolePermissions',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.propertyManagement,
    link: 'property-management',
    path: './pages/propertyManagement',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.reviewRating,
    link: 'review-rating',
    path: './pages/reviewRating',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.financialPerformance,
    link: 'financial-performance',
    path: './pages/financialPerformance',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageTransactions,
    link: 'manage-transactions',
    path: './pages/manageTransactions',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.managePayouts,
    link: 'manage-payouts',
    path: './pages/managePayouts',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.activityLog,
    link: 'activity-log',
    path: './pages/activityLog',
    role: ['superAdmin'],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageChat,
    link: 'roles-permission',
    path: './pages/manageEmployees',
    role: ['superAdmin'],
    show: true,
  },
];

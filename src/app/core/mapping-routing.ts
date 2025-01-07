export const mapping = {
  signIn: '/authenticate/sign-in',
  forgotPasswordVerification: '/authenticate/forgot-password/verification',
  forgotPasswordResetCode: '/authenticate/forgot-password/reset-code',
  forgotPasswordDefineNewPassword: '/authenticate/forgot-password/new-password',

  registerAccount: '/authenticate/register/home',
  registerAccountOrganisation: '/authenticate/register/new-organisation',
  entreprise: '/authenticate/register/entreprise',

  administrators: {
    dashboard: '/administrators/dashboard',
    budgetPalList: '/administrators/noteFrais/list',
    budgetPalCreate: '/administrators/noteFrais/create',

    employedList: '/administrators/employe/list',
    employedCreate: '/administrators/employe/create',

    usersList: '/administrators/users/list',
    usersCreate: '/administrators/users/create',
    editAdmin: '/administrators/users/edit',


    enterpriseList: '/administrators/comptes/list-entreprise',
    particularList: '/administrators/comptes/list-particulier',
    addAcomptes: '/administrators/comptes/add-comptes',


    profilList:'/administrators/profil/profil',
    permissionlList:'/administrators/permissions/list',
  },
  enterprises: {
    budgetPalList: '/enterprises/list',
    budgetPalAdd: '/enterprises/add',

    listAccount: '/enterprises/listAccount',
    addAccount: '/enterprises/addAccount',
    link: '/enterprises/link',
    repayment: '/enterprises/repayment',
  },

};

export const portalRouteMap = {
  home: '/portal/home',
  price: '/portal/price',
  partner: '/portal/partner',
  about: '/portal/about-us',
  features: '/portal/features',
  contact: '/portal/contact',
  detailFeature: '/portal/features-details',
};

export const userProfileRouteMap = {
  expenseReport: {
    list: 'users/expenses-report',
    create: 'users/expenses-report/create',
    edit: 'users/expenses-report/edit',
  },
};

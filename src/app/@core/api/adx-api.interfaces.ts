import {
  IdName,
  Advertiser,
  Agency,
  BillingHistory,
  Campaign,
  Constants,
  Organization,
  Organization2,
  Payment,
  Profile,
  Report,
  User,
} from '../models';

export interface GetAdvertisersInterface {
  count: number;
  data: Advertiser[];
}

export interface GetAgenciesInterface {
  count: number;
  data: Agency[];
}

export interface GetBillingInterface {
  response: {
    data: BillingHistory[];
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetCampaignsInterface {
  count: number;
  data: Campaign[];
}

export interface GetConstantsInterface {
  count: number;
  data: Constants;
}

export interface GetOrganizationsInterface {
  count: number;
  data: Organization[];
}

export interface GetOrganizationInterface2 {
  response: {
    data: Organization2[];
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetPaymentNewInterface {
  response: {
    data: {
      utype: Object;
    };
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetPaymentsInterface {
  response: {
    data: Payment[];
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetReportsInterface {
  count: number;
  data: Report[];
}

export interface GetRtbNewInterface {
  response: {
    data: {
      active_type: IdName[];
      subdommains: IdName[];
      supply_type: IdName[];
      test_mode: IdName[];
      test_mode_new: IdName[];
    };
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetRtbEndpointsInterface2 {
  response: {
    data: Organization2[];
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetCurrentUserInterface2 {
  response: {
    data: User;
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface GetSettingsProfileInterface {
  response: {
    data: Profile;
  }
  messasge: string;
  success: boolean;
  totalCount: number;
}

export interface UpdateProfileInterface {
  response: {
    data: {
      success: string;
    };
  };
  messasge: string;
  success: boolean;
  totalCount: number;
}

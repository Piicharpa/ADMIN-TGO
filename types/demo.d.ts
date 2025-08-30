/* FullCalendar Types */
import Verifier from "@/app/(main)/pages/menu/verifier/page";
import { EventApi, EventInput } from "@fullcalendar/core";

/* Chart.js Types */
import { ChartData, ChartOptions } from "chart.js";

type InventoryStatus = "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";

type Status = "DELIVERED" | "PENDING" | "RETURNED" | "CANCELLED";

export type LayoutType = "list" | "grid";
export type SortOrderType = 1 | 0 | -1;

export interface CustomEvent {
  name?: string;
  status?: "Ordered" | "Processing" | "Shipped" | "Delivered";
  date?: string;
  color?: string;
  icon?: string;
  image?: string;
}

interface ShowOptions {
  severity?: string;
  content?: string;
  summary?: string;
  detail?: string;
  life?: number;
}

export interface ChartDataState {
  barData?: ChartData;
  pieData?: ChartData;
  lineData?: ChartData;
  polarData?: ChartData;
  radarData?: ChartData;
}
export interface ChartOptionsState {
  barOptions?: ChartOptions;
  pieOptions?: ChartOptions;
  lineOptions?: ChartOptions;
  polarOptions?: ChartOptions;
  radarOptions?: ChartOptions;
}

export interface AppMailProps {
  mails: Demo.Mail[];
}

export interface AppMailSidebarItem {
  label: string;
  icon: string;
  to?: string;
  badge?: number;
  badgeValue?: number;
}

export interface AppMailReplyProps {
  content: Demo.Mail | null;
  hide: () => void;
}

declare namespace Demo {
  interface Task {
    id?: number;
    name?: string;
    description?: string;
    completed?: boolean;
    status?: string;
    comments?: string;
    attachments?: string;
    members?: Member[];
    startDate?: string;
    endDate?: string;
  }

  interface Member {
    name: string;
    image: string;
  }

  interface DialogConfig {
    visible: boolean;
    header: string;
    newTask: boolean;
  }

  interface Mail {
    id: number;
    from: string;
    to: string;
    email: string;
    image: string;
    title: string;
    message: string;
    date: string;
    important: boolean;
    starred: boolean;
    trash: boolean;
    spam: boolean;
    archived: boolean;
    sent: boolean;
  }

  interface User {
    id: number;
    name: string;
    image: string;
    status: string;
    messages: Message[];
    lastSeen: string;
  }

  interface Message {
    text: string;
    ownerId: number;
    createdAt: number;
  }

  //ProductService
  type Product = {
    id?: string;
    code?: string;
    name: string;
    description: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    rating?: number;
    orders?: ProductOrder[];
    [key: string]:
      | string
      | string[]
      | number
      | boolean
      | undefined
      | ProductOrder[]
      | InventoryStatus;
  };

  type ProductOrder = {
    id?: string;
    productCode?: string;
    date?: string;
    amount?: number;
    quantity?: number;
    customer?: string;
    status?: Status;
  };

  type Payment = {
    name: string;
    amount: number;
    paid: boolean;
    date: string;
  };

  //CustomerService
  type Customer = {
    id?: number;
    name?: string;
    country?: ICountryObject;
    company?: string;
    date: Date;
    status?: string;
    activity?: number;
    balance?: number | string;
    verified?: boolean;
    amount?: number;
    price?: number;
    rating?: number;
    image?: string;
    orders?: Demo.Customer[];
    inventoryStatus?: string;
    representative: {
      name: string;
      image: string;
    };
  };

  interface Event extends EventInput {
    location?: string;
    description?: string;
    tag?: {
      name: string;
      color: string;
    };
  }

  // PhotoService
  type Photo = {
    title: string;
    itemImageSrc?: string | undefined;
    thumbnailImageSrc?: string | undefined;
    alt?: string | undefined;
  };

  type Country = {
    name: string;
    code: string;
  };

  // IconService
  type Icon = {
    icon?: {
      paths?: string[];
      attrs?: [{}];
      isMulticolor?: boolean;
      isMulticolor2?: boolean;
      grid?: number;
      tags?: string[];
    };
    attrs?: [{}];
    properties?: {
      order?: number;
      id: number;
      name: string;
      prevSize?: number;
      code?: number;
    };
    setIdx?: number;
    setId?: number;
    iconIdx?: number;
  };

  type Product = {
    productId: number;
    productNameTh: string;
    productNameEn: string;
    scope: string;
    FUValue: number | null;
    PUValue: number | null;
    saleRatio: string;
    productTechinfo: string | null;
    verifyStatus: string;
    submittedRound: string;
    submittedDate: string;
  };

  type Company = {
    id: number;
    name: string;
    address: string;
    provinceId: number;
    contactNo?: string | null;
    industrialId?: number | null;
    districtId?: number | null;
    subdistrictId?: number | null;
    zipcode?: string | null;
    products: Product[];
  };

  type Round = {
    id: number;
    quarter: string;
    start: string;
    end: string;
    status: number;
  };

  type Unit = {
    product_unit_id: number;
    product_unit_name_th: string;
    product_unit_name_en: string;
    product_unit_abbr_th: string;
    product_unit_abbr_eng: string;
  };

  type Industrial = {
    industrial_id: number;
    industrial_name: string;
    required_cbam: number;
  };

  type Ef = {
    ef_id: number;
    item: string;
    item_detail: string;
    unit: string;
    ef: string;
    ef_source_ref: string;
    tgo_updated: string;
    tgo_ef_subcat_id: number;
    created_date: string;
    updated_date: string;
    tgo_ef_cat_name: string;
    tgo_ef_subcat_name: string;
    tgo_ef_cat_id: number;
  };

  type EfCategories = {
    tgo_ef_cat_id: number;
    tgo_ef_cat_name: string;
    created_date: string;
    updated_date: string;
  };

  type EfSubcategories = {
    tgo_ef_subcat_id: number;
    tgo_ef_subcat_name: string;
    tgo_ef_cat_id: number;
    created_date: string;
    updated_date: string;
  };

  type PCR = {
    id: number;
    pcr_name: string;
    approval_date: string;
    pcr_type: string;
    pcr_type_id: number;
  };

  type CompanyDetail = {
    company_id: number;
    user_id: number;
    name: string;
    address: string;
    province_id: number;
    contact_no: string | null;
    industrial_id: number | null;
    created_date: string;
    updated_date: string;
    district_id: number | null;
    subdistrict_id: number | null;
    zipcode: string | null;
    industrial_name: string | null;
    product_count: number;
  };

  type Dashboard = {
    company_total: number;
    product_total: number;
    company_detail: CompanyDetail[];
  };

  type Verifier = {
    auditor_id: number;
    user_id: number;
    name: string;
    register_id: string;
    description: string;
    expertise: string;
    organization: string;
    address: string;
    subdistrict_id: number;
    district_id: number;
    province_id: number;
    zipcode: number;
    phone_number: string;
    registration_date: string;
    created_date: string;
    updated_date: string;
    prefix_name: string;
  };
}

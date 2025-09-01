/* FullCalendar Types */
import Verifier from "@/app/(main)/pages/menu/verifier/page";
import { EventApi, EventInput } from "@fullcalendar/core";

/* Chart.js Types */
import { ChartData, ChartOptions } from "chart.js";

{

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

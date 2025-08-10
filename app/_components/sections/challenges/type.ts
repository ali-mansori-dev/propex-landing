export interface BaseResponse {
  success: boolean;
  message: string;
  status: number; // 200, 201, 400, 401, 404, 500
}

export interface ResponseType<T> extends BaseResponse {
  data: T[]; // single object
}
export interface AttributeType {
  name: string | null;
  value: string | null;
  description: string | null;
}
export interface ChallengesType {
  id: number;
  title: string;
  plan_type: string;
  price: number;
  price_with_discount: number;
  short_description: string;
  description: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  attributes: AttributeType[];
  order_method: "purchase";
  balance: number;
}
export interface ChallengesResponseType {
  challenge_type: string;
  label: string;
  plans: ChallengesType[];
}


export interface FooterProps {
  locale: string;
}

export interface FooterLink {
  id: number;
  title: string;
  link: string;
  isRoute: boolean;
}

export interface FooterProps {
  locale: string;
}

export interface FooterType {
  id: number;
  link: string;
  title: {
    rendered: string;
  };
}

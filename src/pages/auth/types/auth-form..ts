export interface IAuthFormProps {
  type: TTypeForm;
  toggleType: (type: TTypeForm) => void;
}

export type TTypeForm = "login" | "register";

export interface LoginResponse {
  email: string;
  access_token: string;
  id: string;
  name: string;
  emblems: any[];
}

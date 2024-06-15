export interface IAuthFormProps {
  type: TTypeForm;
  toggleType: (type: TTypeForm) => void;
}

export type TTypeForm = "login" | "register";

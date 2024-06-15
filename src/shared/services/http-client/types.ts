// generic if unknown type extends any

export type ResponseAPIFailure = {
  success: false;
  message: string;
  code?: number;
  invalidFields: {
    field: string;
    messages: string;
  }[];
};
export type ResponseAPI<T = unknown> =
  | {
      success: true;
      data: T;
    }
  | ResponseAPIFailure;

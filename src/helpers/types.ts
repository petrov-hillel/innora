export interface IAction {
  name: string
  description?: string
  id: string
  completed: boolean
  createdAt?: string
}

export interface FormState {
  name: string;
  description: string;
}

export interface FormErrors {
  name: string;
  description: string;
}
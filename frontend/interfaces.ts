

export interface INotifyApp {
  error: (message: string) => void;
  success: (message: string) => void;
  info: (message: string) => void;
}


export interface IAppConfig {
  title: string;
}
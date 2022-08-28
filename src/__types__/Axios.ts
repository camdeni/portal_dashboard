import { Method, AxiosResponse } from 'axios';

export interface AxiosService<Data> {
  method: Method;
  uri: string;
  data?: Data;
  onSuccess: (response: AxiosResponse<any>) => void;
  onError: (response: AxiosResponse<any>) => void;
  onUploadProgress?: (value: number) => void;
  onDownloadProgress?: (value: number) => void;
  contentType?: 'application/json' | 'multipart/form-data';
}

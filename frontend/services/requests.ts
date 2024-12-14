import { IAppConfig } from "@/interfaces";
import axios from "axios";

const api_host = "http://localhost:5000";

export const appConfigFetcher = async (api: string): Promise<IAppConfig> => {
  return (await axios.get<IAppConfig>(`${api_host}${api}`)).data;
}
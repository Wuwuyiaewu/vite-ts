import type { ApiResponse } from "@/models/api-response";
import http from "./api/http";
export const getFake = async () => {
    try {
      const response = await http.get<ApiResponse<string>>(
        "/fake/"
      );
      return response.data;
    } catch (error) {
      console.error("fake error: ", error);
      return null;
    }
  };
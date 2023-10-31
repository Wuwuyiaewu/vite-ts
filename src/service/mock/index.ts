import Mock from "mockjs"
import type { ApiResponse } from "@/models/api-response";
import type { Body } from "@/models/mock/mock-req"
const Random = Mock.Random

const tableList = [
  { id: "1234ewqewq" },
  { id: "fe1231wfew" }
]

Mock.mock("api/cockGetList", "get", () => {
  return {
    code: "0",
    data: tableList
  }
})

Mock.mock("/api/add", "post", (params: ApiResponse<Body>) => {
  const newData = JSON.parse(params.data?.name ?? "")
  newData.id = Random.guid();
  tableList.push(newData)
  return {
    code: "0",
    message: "success",
    data: tableList
  }
})
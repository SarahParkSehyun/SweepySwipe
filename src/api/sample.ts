import {
  RequestCreateSample,
  RequestGetSampleList,
  RequestUpdateSample,
  ResponseCreateSample,
  ResponseDeleteSample,
  ResponseGetSample,
  ResponseGetSampleList,
  ResponseUpdateSample,
} from "@/types/sample";
import instance from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

const API = {
  getList: async (params: RequestGetSampleList) =>
    await instance.get<ResponseGetSampleList>("/sample/list", { params }),
  getInfo: async (id: number) =>
    await instance.get<ResponseGetSample>(`/sample/${id}`),
  createSample: async (body: RequestCreateSample) =>
    await instance.post<ResponseCreateSample>("/sample", body),
  updateSample: async (p: { id: number; body: RequestUpdateSample }) =>
    await instance.put<ResponseUpdateSample>(`/sample/${p.id}`, p.body),
  deleteSample: async (id: number) =>
    await instance.delete<ResponseDeleteSample>(`/sample/${id}`),
};

const KEY = {
  getList: (payload: RequestGetSampleList) => ["/sample/list", payload],
  getInfo: (lineId: number) => ["/sample", lineId],
};

export function useGetSampleList(params: RequestGetSampleList) {
  return useQuery(KEY.getList(params), async () => await API.getList(params), {
    enabled: false,
  });
}

export function useGetInfo(id: number) {
  return useQuery(KEY.getInfo(id), async () => await API.getInfo(id), {
    enabled: id > 0,
  });
}

export function useCreateSample() {
  return useMutation(API.createSample);
}

export function useUpdateSample() {
  return useMutation(API.updateSample);
}

export function useDeleteSample() {
  return useMutation(API.deleteSample);
}

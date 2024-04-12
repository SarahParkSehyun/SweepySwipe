// 프로젝트에 적용하고 나면 삭제해도 됨
export type RequestGetSampleList = {
  p1: number;
  p2: string;
};

export type ResponseGetSampleList = {
  total: number;
  list: SampleInfo[];
};

export type SampleInfo = {
  info1: number;
};

export type ResponseGetSample = SampleDetail;

export type SampleDetail = {
  detail1: number;
};

export type RequestCreateSample = {
  c1: number;
  c2: string;
};

export type ResponseCreateSample = {};

export type RequestUpdateSample = {
  id: number;
  c1: number;
  c2: string;
};

export type ResponseUpdateSample = {};

export type ResponseDeleteSample = {};

export type WaitTimesInput = {};

export type WaitTimesResponse = {
  ok: boolean;
  message?: string;
  waitTimes?: number;
};

export type UpdateWaitTimesInput = {
  waitTimes: number;
};

export type UpdateWaitTimesResponse = {
  ok: boolean;
  message?: string;
};

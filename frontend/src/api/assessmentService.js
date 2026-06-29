import client from "./client";

export const createAssessment = () => {
  console.log("[API REQUEST] POST /api/v1/assessment/");
  return client.post("/api/v1/assessment/").then((res) => {
    console.log("[API RESPONSE] POST /api/v1/assessment/ Status: 200", res);
    return res;
  });
};

export const submitFlow1 = (assessmentId, payload) => {
  console.log(`[API REQUEST] POST /api/v1/assessment/${assessmentId}/flow1`, payload);
  return client.post(`/api/v1/assessment/${assessmentId}/flow1`, payload).then((res) => {
    console.log(`[API RESPONSE] POST /api/v1/assessment/${assessmentId}/flow1 Status: 200`, res);
    return res;
  });
};

export const submitFlow2 = (assessmentId, payload) => {
  console.log(`[API REQUEST] POST /api/v1/assessment/${assessmentId}/flow2`, payload);
  return client.post(`/api/v1/assessment/${assessmentId}/flow2`, payload).then((res) => {
    console.log(`[API RESPONSE] POST /api/v1/assessment/${assessmentId}/flow2 Status: 200`, res);
    return res;
  });
};

export const submitFlow3 = (assessmentId, payload) => {
  console.log(`[API REQUEST] POST /api/v1/assessment/${assessmentId}/flow3`, payload);
  return client.post(`/api/v1/assessment/${assessmentId}/flow3`, payload).then((res) => {
    console.log(`[API RESPONSE] POST /api/v1/assessment/${assessmentId}/flow3 Status: 200`, res);
    return res;
  });
};

export const submitFlow4 = (assessmentId, payload) => {
  console.log(`[API REQUEST] POST /api/v1/assessment/${assessmentId}/flow4`, payload);
  return client.post(`/api/v1/assessment/${assessmentId}/flow4`, payload).then((res) => {
    console.log(`[API RESPONSE] POST /api/v1/assessment/${assessmentId}/flow4 Status: 200`, res);
    return res;
  });
};

export const calculateRetirement = (assessmentId, payload) => {
  console.log(`[API REQUEST] POST /api/v1/calculate/${assessmentId}`, payload);
  return client.post(`/api/v1/calculate/${assessmentId}`, payload).then((res) => {
    console.log("==================================================");
    console.log("[CALCULATED VALUES FROM BACKEND (RAW JSON)]:", JSON.stringify(res, null, 2));
    console.log("==================================================");
    return res;
  });
};

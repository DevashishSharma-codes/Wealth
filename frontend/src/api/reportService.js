import client from "./client";

export const generateReport = (assessmentId) => {
  console.log(`[API REQUEST] POST /api/v1/report/${assessmentId}/generate`);
  return client.post(`/api/v1/report/${assessmentId}/generate`).then((res) => {
    console.log("==================================================");
    console.log("[REPORT GENERATION RESPONSE (RAW JSON)]:", JSON.stringify(res, null, 2));
    console.log("==================================================");
    return res;
  });
};

export const getDownloadUrl = (assessmentId, reportId) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiBase = import.meta.env.VITE_API_URL || "";
  return `${apiBase}/api/v1/report/${assessmentId}/download/${reportId}?api_key=${apiKey}`;
};

export const checkReportStatus = (assessmentId, jobId) => {
  return client.get(`/api/v1/report/${assessmentId}/status/${jobId}`);
};

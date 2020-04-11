import { get, post, put, del, getQueryString, patch } from './utils';

const PREFIX = '/offline/admin';

export async function getAllDataApi({
  resource,
  query = '',
  customURL,
  prefix = PREFIX,
}) {
  return get(`${prefix}/${resource}${query}`, null, customURL);
}

export async function getDataByIdApi({ resource, id, customURL }) {
  return get(`${PREFIX}/${resource}${id ? `/${id}` : ''}`, null, customURL);
}

export async function deleteDataApi({ resource, customURL }) {
  return del(`${PREFIX}/${resource}`, null, customURL);
}

export async function deleteDataByIdApi({ resource, id, customURL }) {
  return del(`${PREFIX}/${resource}${id ? `/${id}` : ''}`, null, customURL);
}

export async function postDataApi({
  prefix = PREFIX,
  resource,
  data,
  customURL,
  headers,
}) {
  return post(`${prefix}/${resource}`, data, customURL, headers);
}

export async function putDataApi({
  prefix = PREFIX,
  resource,
  id,
  data,
  customURL,
  headers,
}) {
  return put(
    `${prefix}/${resource}${id ? `/${id}` : ''}`,
    data,
    customURL,
    headers,
  );
}

export async function patchDataApi({
  prefix = PREFIX,
  resource,
  id,
  data,
  customURL,
}) {
  return patch(`${prefix}/${resource}${id ? `/${id}` : ''}`, data, customURL);
}

export async function exportExcelApi({ resource, data, customURL }) {
  return get(`${PREFIX}/${resource}/exportExcel`, data, customURL);
}

export const uploadPhoto = async (request) => {
  try {
    const data = new FormData();
    data.append('file', request.file);
    const response = await post(
      '/admin/logo',
      data,
      process.env.REACT_APP_API_UPLOAD_IMAGE,
    );
    request.onSuccess(response.data);
  } catch (error) {
    request.onError(error);
  }
};

export const exportExcel = (resource, query) => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `${
      process.env.REACT_APP_SERVER_URL
    }api/v1/${resource}/exportExcel?${getQueryString(query)}`,
  );
  request.setRequestHeader(
    'Authorization',
    localStorage.getItem('sessionToken'),
  );
  request.responseType = 'arraybuffer';
  request.onload = () => {
    if (request.status === 200) {
      // Try to find out the filename from the content disposition `filename` value
      const disposition = request.getResponseHeader('Content-Disposition');
      const matches = disposition.substring(
        disposition.indexOf('filename=') + 9,
        disposition.length,
      );
      const filename =
        matches != null && matches !== '' ? matches : `${resource}.xlsx`;
      // The actual download
      const blob = new Blob([request.response], {
        type: request.getResponseHeader('content-type'),
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  request.send();
};

/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import config from '@payload-config';
import '@payloadcms/next/css';
import {
  REST_DELETE,
  REST_GET,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from '@payloadcms/next/routes';

const allowedOrigin = 'https://hci-2025-26-beta.vercel.app';

function withCORS(handler) {
  return async (req, res) => {
    const response = await handler(req, res);
    if (response && response.headers) {
      response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
    return response;
  };
}

export const GET = withCORS(REST_GET(config));
export const POST = withCORS(REST_POST(config));
export const DELETE = withCORS(REST_DELETE(config));
export const PATCH = withCORS(REST_PATCH(config));
export const PUT = withCORS(REST_PUT(config));

export const OPTIONS = async (req, res) => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
};

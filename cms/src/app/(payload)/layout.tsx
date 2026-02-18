import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import { UploadHandlersProvider } from '@payloadcms/ui'
import React from 'react'

import { getImportMap } from './admin/importMap.client.js'
import './custom.scss'

type Args = {
  children: React.ReactNode
}


const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  const importMap = await getImportMap();
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
}


const Layout = async ({ children }: Args) => {
  const importMap = await getImportMap();
  return (
    <UploadHandlersProvider>
      <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
        {children}
      </RootLayout>
    </UploadHandlersProvider>
  );
}

export default Layout

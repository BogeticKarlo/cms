"use client"

export async function getImportMap() {
  const [{ S3ClientUploadHandler }, { CollectionCards }] = await Promise.all([
    import('@payloadcms/storage-s3/client'),
    import('@payloadcms/next/rsc'),
  ]);
  return {
    "@payloadcms/storage-s3/client#S3ClientUploadHandler": S3ClientUploadHandler,
    "@payloadcms/next/rsc#CollectionCards": CollectionCards,
  };
}

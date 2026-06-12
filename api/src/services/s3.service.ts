import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, S3_BUCKET } from "../config/s3.js";
import { randomUUID } from "crypto";

export async function uploadResumeToS3(
  fileBuffer: Buffer,
  originalName: string,
  candidateId: string,
): Promise<{ s3Key: string; fileName: string }> {
  const fileName = originalName;
  const s3Key = `resumes/${candidateId}/${randomUUID()}-${fileName}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: s3Key,
      Body: fileBuffer,
      ContentType: "application/pdf",
    }),
  );

  return { s3Key, fileName };
}

export async function getPresignedUrl(s3Key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: S3_BUCKET,
    Key: s3Key,
  });

  // URL expires in 1 hour
  return getSignedUrl(s3Client, command, { expiresIn: 3600 });
}

export async function deleteResumeFromS3(s3Key: string): Promise<void> {
  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: S3_BUCKET,
      Key: s3Key,
    }),
  );
}

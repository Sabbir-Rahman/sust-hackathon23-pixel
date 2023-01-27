import S3 from 'aws-sdk/clients/s3'
import config from 'config'
import fs from 'fs'

const bucketName = config.get<string>('awsBucketName')
const region = config.get<string>('awsRegion')
const accessKeyId = config.get<string>('awsAccessKeyId')
const secretAccessKey = config.get<string>('awsSecretAccessKey')

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
})

// upload a file s3
function uploadFile(file: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  }

  return s3.upload(uploadParams).promise()
}

function getFileStream(fileKey: any) {
  const downloadParam = {
    Key: fileKey,
    Bucket: bucketName,
  }

  return s3.getObject(downloadParam).createReadStream()
}

export default {
  uploadFile,
  getFileStream,
}

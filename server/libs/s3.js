/**
 * Loading Credentials in Node.js from the Shared Credentials File
 * You can keep your AWS credentials data in a shared file used by SDKs and the command line interface.
 * When the SDK for JavaScript loads, it automatically searches the shared credentials file, which is named "credentials".
 * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
 */
const AWS = require("aws-sdk")
AWS.config.update({ region: "us-east-1" })

const s3 = new AWS.S3({ apiVersion: "2006-03-01" })

s3.listBuckets((err, data) => {
    if (err) {
        console.log(`S3 Error ${err}`)
    }
    else {
        console.log(data.Buckets)
    }
})

module.exports = s3
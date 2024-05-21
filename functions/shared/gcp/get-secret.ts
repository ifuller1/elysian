import { SecretManagerClient } from "../type/google/secret-manager";

const getSecret = async (secretName: string, client: SecretManagerClient) => {
    const response = await client.accessSecretVersion({
        name: `projects/${process.env.GCP_PROJECT}/secrets/${secretName}/versions/latest`,
    });

    const [version] = response;

    const secretPayload = version.payload?.data?.toString();
    return secretPayload;
};

export { getSecret };

interface SecretManagerClient {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    accessSecretVersion: (arg0: { name: string }) => Promise<any>;
}

export { SecretManagerClient };

export function getEnvironmentVariable(name: string): string {
    const environmentVariable = process.env[name];
    if (!environmentVariable) {
        throw new Error(`No environment variable exists with name ${name}`);
    }

    return environmentVariable;
}

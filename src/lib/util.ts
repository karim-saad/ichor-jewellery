export function getEnvironmentVariable(name: string): string {
    const variable = process.env[name];
    if (!variable) {
        throw new Error(`No environment variable: ${name}`);
    }

    return variable;
}

export function parsePrice(price: number): string {
    return `$${(price / 100).toFixed(2)}`;
}

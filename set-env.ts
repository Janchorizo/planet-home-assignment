/**
 * set-env.ts - Generates an enviornments.ts file using the system's environment
 * 
 * A much safer and customizable solution for setting parameters in the app. The
 * variables are supplied from the system environment and copied to a file located
 * in environmentFilePath.
 * 
 * Inspired from: https://medium.com/swlh/environment-variables-in-angular-ionic-8aa1698f2cc5
 * 
 * Currently used environment variables:
 * - PLANET_API_ENDPOINT
 * - PLANET_API_TOKEN
 * - PRODUCTION
 */
import { writeFile } from 'fs';

// Edit the following two variables to change the configuration
const environmentFilePath = './src/environments/environment.ts';
const envVariablesMapping = {
    api_endpoint: 'PLANET_API_ENDPOINT',
    api_token: 'PLANET_API_TOKEN',
    production: 'PRODUCTION'
};

// 1. Missing environment variables check
const envVariableOrNull = (key: string) => process.env?.[key] || null;

Object.values(envVariablesMapping).forEach((key: string) => {
    if (envVariableOrNull(key) === null) {
        console.warn(`Missing environment variable: '${key}'.`);
    }
});

// 2. Environment file contents creation
/**
 * Converts the string representation to the correct type.
 * Add new conditions to expand the supported formats.
 * @param s The string representation of the environment variable
 * @return [any] The environment variable in the original type
 */
function toType(s: string | null): any{
    // each condition returns a type and whether it was set or not
    const conditions = [
        (d: any) => d == 'true' ? [true, true] : [d, false],
        (d: any) => d == 'false' ? [false, true] : [d, false],
        (d: any) => +d !== NaN ? [d, true] : [d, false],
        (d: any) => d === null ? [d, true] : [d, false],
        (d: any) => d !== null ? [d, true] : [d, false],
    ]

    const [value, set] = conditions.reduce(
        ([value, set], condition) => set === true ? [value, true] : condition(value), [s, false]
    );

    return value;
}

const envVariables = Object.entries(envVariablesMapping)
    .map(([name, key]) => [name, toType(envVariableOrNull(key))])
    .reduce((ac: object, [name, value]) => ({...ac, [name]: value}),{});

const enfFileEntries = Object.entries(envVariables)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(',\n\t');

const envFileContents = 'export const environment = {\n\t' + enfFileEntries + '\n};';

// 3. Environment file creation
writeFile(environmentFilePath, envFileContents, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.ts file generated.`);
    }
});

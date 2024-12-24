type EnvVar = string | undefined

const getString = (envVar: EnvVar): string => {
    return envVar ?? ''
}

const getNumber = (envVar: EnvVar): number => {
    return parseInt(getString(envVar))
}

const getBoolean = (envVar: EnvVar): boolean => {
    return getString(envVar).toLowerCase() === 'true'
}

export { getBoolean, getNumber, getString }

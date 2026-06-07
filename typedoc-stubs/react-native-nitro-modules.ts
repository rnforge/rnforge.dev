// TypeDoc stub — minimal type surface for react-native-nitro-modules.
// Not a real implementation; only exists so TypeDoc can resolve
// package source imports without the RN build environment.

export type HybridObject<_T extends Record<string, string>> = object

export const NitroModules = {
  createHybridObject: <T>(_name: string): T => ({} as T),
} as const

export default NitroModules

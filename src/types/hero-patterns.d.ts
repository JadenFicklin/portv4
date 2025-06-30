declare module 'hero-patterns' {
  type PatternFunction = (color: string, opacity?: number) => string

  export const circuitBoard: PatternFunction
  export const topography: PatternFunction
  export const architect: PatternFunction
  export const charlie: PatternFunction
  export const morphingDiamonds: PatternFunction
  export const hideout: PatternFunction
}

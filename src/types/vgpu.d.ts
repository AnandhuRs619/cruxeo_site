declare module 'vgpu' {
  export interface InitOptions {
    powerPreference?: 'low-power' | 'high-performance';
  }

  export function init(options?: InitOptions): Promise<any>;
  export function surface(instance: any, canvas: HTMLCanvasElement, options?: any): any;
  export function sampler(instance: any, options?: any): any;
  export function target(instance: any, options?: any): any;
  export function uniforms(instance: any, values: any): any;
  export function storage(instance: any, byteLength: number, access: string): any;
  export function draw(instance: any, options: any): any;
  export function effect(instance: any, shader: string, options?: any): any;
  export function frame(instance: any, callback: (current: any) => void): void;
  export const clock: any;
  export const timer: any;
  export const visibility: any;
  export const texture: any;
  export const geometry: any;
  export const compute: any;
  export const bundle: any;
  export const Uniform: any;
  export const Geometry: any;
  export const VGPUError: any;
  export const frameLoop: any;
  export const pingPong: any;
  export const pingPongStorage: any;
  export const initFromDevice: any;
  export const isShaderFunctionExport: any;
}


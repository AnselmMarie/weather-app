import { ReactElement } from 'react';

export type GenericNonReturnFn = (...params: any) => void;
export type GenericBooleanReturnFn = (...params: any) => boolean;
export type GenericStringReturnFn = (...params: any) => string;
export type GenericElementReturnFn = (...params: any) => ReactElement;
export type GenericStringArrayReturnFn = (...params: any) => Array<string>;
export type GenericObjectReturnFn = (...params: any) => Record<string, unknown>;

import { moduleMetadata } from '@storybook/angular';

export type FunctionArg<T> = T extends (...args: [infer U, ...any[]]) => any ? U : never;
export type StorybookMetadata = FunctionArg<typeof moduleMetadata>;

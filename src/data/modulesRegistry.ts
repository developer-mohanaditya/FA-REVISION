import { ModuleContent } from '../types';
import { module1Data } from '../content/module1';
import { module2Data } from '../content/module2';
import { module3Data } from '../content/module3';
import { module4Data } from '../content/module4';
import { module5Data } from '../content/module5';
import { module6Data } from '../content/module6';
import { module7Data } from '../content/module7';
import { module8Data } from '../content/module8';

export const ALL_MODULES: Record<string, ModuleContent> = {
  'module-1': module1Data,
  'module-2': module2Data,
  'module-3': module3Data,
  'module-4': module4Data,
  'module-5': module5Data,
  'module-6': module6Data,
  'module-7': module7Data,
  'module-8': module8Data
};

export const getModuleById = (id: string): ModuleContent | undefined => {
  return ALL_MODULES[id];
};

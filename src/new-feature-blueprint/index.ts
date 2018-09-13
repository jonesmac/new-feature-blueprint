import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import { testRule } from './test-rule';

export function newFeatureBlueprint(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // testRule(null);
    tree.create('src/app/app.module.ts', 'file contents');
    return tree;
  };
}

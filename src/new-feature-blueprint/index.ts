import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
// import { testRule } from './test-rule';

export function newFeatureBlueprint(_options: any): Rule {
  return chain([
    (tree: Tree, _context: SchematicContext) => {
      tree.create(`src/app/test/${_options.name || 'myfile'}.ts`, 'some content');
      return tree
    }
  ]);
}

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function testRule(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('.', 'myNewFile');
    return tree;
  };
}

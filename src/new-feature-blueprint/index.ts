import { Rule, SchematicContext, Tree, chain, mergeWith, template, url, branchAndMerge, move, apply} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NewFeatureBlueprintOptions } from './schema';

export function newFeatureBlueprint(_options: NewFeatureBlueprintOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (_options.basic) {
      tree.create(`src/app/${_options.name || 'basic'}.ts`, `console.log('Hello World');`);
      return tree;
    } else {
      // Take a set of files and apply a series of rules to them
      const templateSource = apply(url('./files'), [
        template({
          // Helpful methods for manipulating the name of the schema (dasherize, classify, etc.)
          ...strings,
          ..._options
        }),
        move(_options.path || 'src/app')
      ]);
    
      const rule = chain([
        branchAndMerge(chain([
          mergeWith(templateSource)
        ]))
      ]);

      return rule(tree, context);
    }
  }
}
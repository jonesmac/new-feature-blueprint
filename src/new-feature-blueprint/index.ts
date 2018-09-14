import { Rule, SchematicContext, Tree, chain, mergeWith, template, url, branchAndMerge, move, apply} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NewFeatureBlueprintOptions } from './schema';

export function newFeatureBlueprint(_options: NewFeatureBlueprintOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      // filterTemplates(_options),
      template({
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

// function filterTemplates(options: NewFeatureBlueprintOptions): Rule {
//   if (options.dataService) {
//     return filter(path => !path.match(/\.service\.ts$/) && !path.match(/\.bak$/));
//   }
//   return filter(path => !path.match(/\.bak$/));
// }
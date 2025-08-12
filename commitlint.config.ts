import hceShared from "@halospv3/hce.shared-config/commitlintConfig";

const scopes = {
  commitlint: 'Affects "./commitlint.config.ts".',
  deps: 'Affects any runtime dependencies.',
  'deps-dev': 'Affects dependencies not included at runtime.',
  release: 'Only for commits made by @semantic-release/git.',
  sample: 'Affects "./src/GroupBox.Avalonia.Sample/**/*".'
};

hceShared.rules["scope-enum"] = [
  2,
  'always',
  Reflect.ownKeys(scopes)
    .map(key => String(key)) as (keyof typeof scopes)[]
];

export default hceShared;

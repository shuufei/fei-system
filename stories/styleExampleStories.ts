import { storiesOf, moduleMetadata } from '@storybook/angular';

import { FeiComponentsModule } from '../dist/fei-components';
import { StorybookMetadata } from './util';

const defaultMetadata = {
  declarations: [],
  imports: [
    FeiComponentsModule
  ]
};

export class StyleExampleStories {
  static category = 'Style Example';

  constructor() {}

  importStories(metadata: StorybookMetadata = defaultMetadata) {
    storiesOf(`${StyleExampleStories.category}/Color`, module)
      .addDecorator(moduleMetadata(metadata))
      .add('List', () => ({
        template: `<fei-color></fei-color>`
    }));

    storiesOf(`${StyleExampleStories.category}/Typography`, module)
      .addDecorator(moduleMetadata(metadata))
      .add('List', () => ({
        template: `<fei-typography></fei-typography>`
    }));

    storiesOf(`${StyleExampleStories.category}/Shadow`, module)
      .addDecorator(moduleMetadata(metadata))
      .add('List', () => ({
        template: `<fei-shadow></fei-shadow>`
    }));

    storiesOf(`${StyleExampleStories.category}/Round`, module)
      .addDecorator(moduleMetadata(metadata))
      .add('List', () => ({
        template: `<fei-round></fei-round>`
    }));
  }
}

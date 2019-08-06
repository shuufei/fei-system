import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

// import { FeiComponentsModule } from '../dist/fei-components';
// import { AtomsModule } from '../projects/fei-components/src/lib/atoms/atoms.module';
import { FeiComponentsModule } from '../projects/fei-components/src/lib/fei-components.module';

const metadata = {
  declarations: [],
  imports: [
    FeiComponentsModule
    // AtomsModule
  ]
};

storiesOf('My Button', module)
 .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

const category = 'Atoms';

storiesOf(`${category}/Button`, module)
  .addDecorator(moduleMetadata(metadata))
  .add('default', () => ({
    template: `
    <fei-button></fei-button>`
  }));

storiesOf(`${category}/Label`, module)
  .addDecorator(moduleMetadata(metadata))
  .add('default', () => ({
    template: `
    <fei-label></fei-label>
    `
  }));

storiesOf(`${category}/Tooltip`, module)
  .addDecorator(moduleMetadata(metadata))
  .add('default', () => ({
    template: `<fei-tooltip></fei-tooltip>`
  }));

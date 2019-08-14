import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FeiComponentsModule } from '../dist/fei-components';
import { StorybookMetadata } from './util';
import { TooltipPosition } from '../projects/fei-components/src/lib/atoms/tooltip/tooltip.component';
import { PullButtonDirection } from '../projects/fei-components/src/lib/molecules/pull-button/pull-button.component';

const defaultMetadata = {
  declarations: [],
  imports: [
    FeiComponentsModule,
    ReactiveFormsModule
  ]
};

export class MoleculesStories {
  static category = 'Molecules';

  constructor() {}

  importStories(metadata: StorybookMetadata = defaultMetadata) {
    storiesOf(`${MoleculesStories.category}/Checkbox Wrapper`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-checkbox-wrapper>
            <span>text</span>
          </fei-checkbox-wrapper>
        `
    }));

    const tooltipPosition: { [k in TooltipPosition]: TooltipPosition } = {
      top: 'top',
      right: 'right',
      bottom: 'bottom',
      left: 'left'
    };

    storiesOf(`${MoleculesStories.category}/Tooltip Wrapper`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div style="padding: 40px 80px;">
            <fei-tooltip-wrapper [label]="label" [position]="position">
              <fei-icon icon='calendar'></fei-icon>
            </fei-tooltip-wrapper>
          </div>
        `,
        props: {
          label: text('label', 'tooltip'),
          position: select('position', tooltipPosition, 'top')
        }
    }));

    const pullButtonDirection: { [k in PullButtonDirection]: PullButtonDirection } = {
      right: 'right',
      left: 'left'
    };
    storiesOf(`${MoleculesStories.category}/Pull Button`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-pull-button [direction]="direction"></fei-pull-button>
        `,
        props: {
          direction: select('direction', pullButtonDirection, 'left')
        }
    }));

    storiesOf(`${MoleculesStories.category}/Calendar`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-calendar [checkedDateList]="checkedDateList" (clickedDate)="onClickedDate($event)"></fei-calendar>
        `,
        props: {
          checkedDateList: [new Date()],
          onClickedDate: action('Clicked Date')
        }
    }));
  }
}

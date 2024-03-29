import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FeiComponentsModule } from '../dist/fei-components';
import { StorybookMetadata } from './util';
import { TooltipPosition } from '../projects/fei-components/src/lib/atoms/tooltip/tooltip.component';
import { PullButtonDirection } from '../projects/fei-components/src/lib/molecules/pull-button/pull-button.component';
import { IconNames } from 'projects/fei-components/src/lib/atoms/icon/icon.component';

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

    storiesOf(`${MoleculesStories.category}/Calendar Button`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-calendar-button></fei-calendar-button>
        `,
        props: {
          date: new Date()
        }
      }))
      .add('label enable', () => ({
        template: `
          <fei-calendar-button [date]="date"></fei-calendar-button>
        `,
        props: {
          date: new Date()
        }
    }));

    storiesOf(`${MoleculesStories.category}/Account List Item`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-account-list-item [name]="name" [img]="img"></fei-account-list-item>
        `,
        props: {
          name: text('name', 'tarou_tanaka'),
          img: text('img', 'assets/images/default-account.png')
        }
    }));

    storiesOf(`${MoleculesStories.category}/Dialog`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-dialog [open]="open">
            <div header>
              <p class="fei-subtitle fei-color-black500">Dialog Title</p>
            </div>
            <div contents style="width: 100%; height: 1000px;">
              <p class="fei-base fei-color-black400">dialog contents</p>
            </div>
            <div buttonGroup>
              <fei-button></fei-button>
              <fei-button role="cancel" label="close"></fei-button>
            </div>
          </fei-dialog>
        `,
        props: {
          open: boolean('open', true)
        }
      }))
      .add('None Header & Footer', () => ({
        template: `
          <fei-dialog [open]="open" [hideHeader]="true" [hideFooter]="true">
            <div contents style="width: 100%; height: 1000px;">
              <p class="fei-base fei-color-black400">dialog contents</p>
            </div>
          </fei-dialog>
        `,
        props: {
          open: boolean('open', true)
        }
    }));

    const iconNames: { [k in IconNames]: IconNames } = {
      calendar: 'calendar',
      calendarEdit: 'calendarEdit',
      close: 'close',
      logOut: 'logOut',
      timeSpan: 'timeSpan',
      users: 'users',
      arrow: 'arrow',
      arrowTop: 'arrowTop',
      arrowBottom: 'arrowBottom',
      arrowRight: 'arrowRight',
      arrowLeft: 'arrowLeft'
    };
    storiesOf(`${MoleculesStories.category}/Action Panel Tab`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div class="fei-pl-20">
            <fei-action-panel-tab
              [icon]="icon"
              [label]="label"
              [active]="active"
              [first]="first"
              [last]="last"
            ></fei-action-panel-tab>
          </div>
        `,
        props: {
          icon: select('icon', iconNames, 'users'),
          label: text('label', 'icon'),
          active: boolean('active', false),
          first: boolean('first', false),
          last: boolean('last', false)
        }
      }));

    storiesOf(`${MoleculesStories.category}/Action Panel Contents`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div style="width: 300px; height: 600px;">
            <fei-action-panel-contents title="Contents Title">
              <div contents class="fei-bg-color-white" style="height: 1000px;">
                <p class="fei-base fei-color-black400">contents</p>
              </div>
              <div buttonGroup class="d-flex justify-content-end">
                <fei-button></fei-button>
              </div>
            </fei-action-panel-contents>
          </div>
        `,
        props: {
        }
      }))
      .add('None Header & Footer', () => ({
        template: `
          <div style="width: 300px; height: 600px;">
            <fei-action-panel-contents [hideFooter]="true">
              <div contents class="fei-bg-color-white" style="height: 1000px;">
                <p class="fei-base fei-color-black400">contents</p>
              </div>
            </fei-action-panel-contents>
          </div>
        `,
        props: {
        }
      }));
  }
}

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FeiComponentsModule } from '../dist/fei-components';
import { ButtonSize, ButtonRole } from '../projects/fei-components/src/lib/atoms/button/button.component';
import { IconNames } from '../projects/fei-components/src/lib/atoms/icon/icon.component';
import { StorybookMetadata } from './util';
import { TooltipPosition } from '../projects/fei-components/src/lib/atoms/tooltip/tooltip.component';

const defaultMetadata = {
  declarations: [],
  imports: [
    FeiComponentsModule,
    ReactiveFormsModule
  ]
};

export class AtomsStories {
  static category = 'Atoms';

  constructor() {}

  importStories(metadata: StorybookMetadata = defaultMetadata) {
    const buttonSize: { [k in ButtonSize]: ButtonSize } = {
      s: 's',
      m: 'm',
      l: 'l'
    };
    const buttonRoles: { [k in ButtonRole]: ButtonRole } = {
      default: 'default',
      cancel: 'cancel',
      danger: 'danger'
    };
    storiesOf(`${AtomsStories.category}/Button`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `<fei-button [label]='label' [size]='size' [role]='role' (click)="onClick($event)"></fei-button>`,
        props: {
          label: text('label', 'button'),
          size: select('size', buttonSize, 'm'),
          role: select('role', buttonRoles, 'default'),
          onClick: action('Clicked Button.')
        }
      }))
      .add('disable', () => ({
        template: `<fei-button [label]='label' [size]='size' [role]='role' [disabled]="true" (click)="onClick($event)"></fei-button>`,
        props: {
          label: text('label', 'button'),
          size: select('size', buttonSize, 'm'),
          role: select('role', buttonRoles, 'default'),
          onClick: action('Not called never.')
        }
      }))
      .add('full', () => ({
        template: `<fei-button [label]='label' [size]='size' [role]='role' [full]="true" (click)="onClick($event)"></fei-button>`,
        props: {
          label: text('label', 'button'),
          size: select('size', buttonSize, 'm'),
          role: select('role', buttonRoles, 'default'),
          onClick: action('Clicked Button.')
        }
    }));

    storiesOf(`${AtomsStories.category}/Label`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `<fei-label [label]='label' [isNum]='isNum'></fei-label>`,
        props: {
          label: text('label', '2019/07/09'),
          isNum: boolean('isNum', false)
        }
    }));

    const iconNames: { [k in IconNames]: IconNames } = {
      calendar: 'calendar',
      calendarEdit: 'calendarEdit',
      close: 'close',
      logOut: 'logOut',
      timeSpan: 'timeSpan',
      users: 'users',
      arrow: 'arrow'
    };
    storiesOf(`${AtomsStories.category}/Icon`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div [style.background]="white ? '#202020' : '#ffffff'" style="padding:4px; display:inline-block;">
            <fei-icon [icon]="icon" [size]="size" [white]="white"></fei-icon>
          </div>
        `,
        props: {
          icon: select('icon', iconNames, 'calendar'),
          size: number('size', 24),
          white: boolean('white', false)
        }
    }));

    storiesOf(`${AtomsStories.category}/Loading`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div style='margin-bottom:12px;'><fei-loading size='s'></fei-loading></div>
          <div style='margin-bottom:12px;'><fei-loading size='m'></fei-loading></div>
          <div style='margin-bottom:12px;'><fei-loading size='l'></fei-loading></div>
        `
    }));

    const tooltipPosition: { [k in TooltipPosition]: TooltipPosition } = {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left'
    };
    storiesOf(`${AtomsStories.category}/Tooltip`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-tooltip [label]='label' [position]='position'><fei-icon icon='calendar'></fei-icon></fei-tooltip>
        `,
        props: {
          label: text('label', 'tooltip'),
          position: select('position', tooltipPosition, 'top')
        }
    }));

    storiesOf(`${AtomsStories.category}/Input Text`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-input-text [placeholder]='placeholder' [full]='full'></fei-input-text>
        `,
        props: {
          placeholder: text('placeholder', '入力してください'),
          full: boolean('full', false)
        }
    }));

    storiesOf(`${AtomsStories.category}/Textarea`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-textarea [placeholder]='placeholder' [full]='full'></fei-textarea>
        `,
        props: {
          placeholder: text('placeholder', '入力してください'),
          full: boolean('full', false)
        }
    }));

    const fcOfCheckbox = new FormControl(true);
    storiesOf(`${AtomsStories.category}/Checkbox`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-checkbox ngDefaultControl [formControl]='formControl'></fei-checkbox>
        `,
        props: {
          formControl: fcOfCheckbox
        }
    }));

    const fcOfSelect = new FormControl(2);
    storiesOf(`${AtomsStories.category}/Select`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-select ngDefaultControl [formControl]='formControl' [selectOptions]='selectOptions' [full]='full' [shadow]='shadow'>
          </fei-select>
        `,
        props: {
          formControl: fcOfSelect,
          selectOptions: [{value: 1, label: 'value1'}, {value: 2, label: 'value2' }, {value: 3, label: 'value3'}],
          full: boolean('full', false),
          shadow: boolean('shadow', false),
        }
    }));
  }
}

import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';

import { FeiComponentsModule } from '../dist/fei-components';
import { ButtonSize, ButtonRole } from '../projects/fei-components/src/lib/atoms/button/button.component';
import { IconNames } from '../projects/fei-components/src/lib/atoms/icon/icon.component';
import { StorybookMetadata } from './util';

const defaultMetadata = {
  declarations: [],
  imports: [
    FeiComponentsModule
  ]
};

export class AtomsStories {

  // tslint:disable-next-line: variable-name
  private _category = 'Atoms';
  get category() { return this._category; }

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
    storiesOf(`${this.category}/Button`, module)
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

    storiesOf(`${this.category}/Label`, module)
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
    storiesOf(`${this.category}/Icon`, module)
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

    storiesOf(`${this.category}/Loading`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div style='margin-bottom:12px;'><fei-loading size='s'></fei-loading></div>
          <div style='margin-bottom:12px;'><fei-loading size='m'></fei-loading></div>
          <div style='margin-bottom:12px;'><fei-loading size='l'></fei-loading></div>
        `
      }));
  }
}

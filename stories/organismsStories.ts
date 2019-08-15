import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FeiComponentsModule } from '../dist/fei-components';
import { StorybookMetadata } from './util';

const defaultMetadata = {
  declarations: [],
  imports: [
    FeiComponentsModule,
    ReactiveFormsModule
  ]
};

export class OrganismsStories {
  static category = 'Organisms';

  constructor() {}

  importStories(metadata: StorybookMetadata = defaultMetadata) {
    storiesOf(`${OrganismsStories.category}/Accounts Group Accordion`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-accounts-group-accordion
            [groupName]="groupName"
            [accounts]="accounts"
            (changeGroupCheck)="onChangeGroupCheck($event)"
          ></fei-accounts-group-accordion>
        `,
        props: {
          groupName: 'Group AAAAAAAAAAA',
          accounts: [
            { name: 'tarou_tanaka', formControl: new FormControl(false) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) }
          ],
          onChangeGroupCheck: action('Change Group Check')
        }
      }))
      .add('width:150px', () => ({
        template: `
          <div style="width:150px;">
            <fei-accounts-group-accordion [groupName]="groupName" [accounts]="accounts"></fei-accounts-group-accordion>
          </div>
        `,
        props: {
          groupName: 'Group AAAAAAAAAAA',
          accounts: [
            { name: 'tarou_tanaka', formControl: new FormControl(false) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) }
          ]
        }
    }));
  }
}

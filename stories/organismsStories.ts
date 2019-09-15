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
            (added)="onAdded($event)"
            (removed)="onRemoved($event)"
          ></fei-accounts-group-accordion>
        `,
        props: {
          groupName: 'Group AAAAAAAAAAA',
          accounts: [
            { name: 'tarou_tanaka', formControl: new FormControl(false) },
            { name: 'hanako_hanazawa', formControl: new FormControl(true) },
            { name: 'katuo_isono', formControl: new FormControl(true) }
          ],
          onAdded: action('Added'),
          onRemoved: action('Removed'),
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

    storiesOf(`${OrganismsStories.category}/Dialog - Logout`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <fei-dialog-logout [open]="open" (logout)="onLogout()" (cancel)="onCancel()"></fei-dialog-logout>
        `,
        props: {
          open: boolean('open', true),
          onLogout: action('Logout'),
          onCancel: action('Cancel')
        }
    }));

    storiesOf(`${OrganismsStories.category}/Navigation Bar`, module)
    .addDecorator(moduleMetadata(metadata))
    .addDecorator(withKnobs)
    .add('default', () => ({
      template: `
        <div style="height: 600px;">
          <fei-navigation-bar (logout)="onLogout()"></fei-navigation-bar>
        </div>
      `,
      props: {
        onLogout: action('Logout')
      }
    }));

    storiesOf(`${OrganismsStories.category}/Action Panel`, module)
      .addDecorator(moduleMetadata(metadata))
      .addDecorator(withKnobs)
      .add('default', () => ({
        template: `
          <div style="height: 600px; position: absolute; top: 8%; right: 8%;">
            <fei-action-panel [open]="open">
              <ng-container users>
                <p class="fei-base fei-color-black400 fei-py-4" style="text-align:center;">users</p>
              </ng-container>
              <ng-container bulkUpdate>
                <p class="fei-base fei-color-black400 fei-py-4" style="text-align:center;">calendarEdit</p>
              </ng-container>
              <ng-container workingDetail>
                <p class="fei-base fei-color-black400 fei-py-4" style="text-align:center;">timeSpan</p>
              </ng-container>
            </fei-action-panel>
          </div>
        `,
        props: {
          open: boolean('open', false)
        }
      }))
      .add('use action-panel-contents', () => ({
        template: `
          <div style="height: 600px; position: absolute; top: 8%; right: 8%;">
            <fei-action-panel [open]="open">
              <fei-action-panel-contents users title="users">
                <div contents class="fei-bg-color-white" style="height: 1000px;">
                  <p class="fei-base fei-color-black400">contents</p>
                </div>
                <div buttonGroup class="d-flex justify-content-end">
                  <fei-button></fei-button>
                </div>
              </fei-action-panel-contents>
              <fei-action-panel-contents bulkUpdate title="calendarEdit">
                <div contents class="fei-bg-color-white" style="height: 1000px;">
                  <p class="fei-base fei-color-black400">contents</p>
                </div>
                <div buttonGroup class="d-flex justify-content-end">
                  <fei-button></fei-button>
                </div>
              </fei-action-panel-contents>
              <fei-action-panel-contents workingDetail title="timeSpan">
                <div contents class="fei-bg-color-white" style="height: 1000px;">
                  <p class="fei-base fei-color-black400">contents</p>
                </div>
                <ng-container buttonGroup class="d-flex justify-content-end">
                  <fei-button></fei-button>
                </ng-container>
              </fei-action-panel-contents>
            </fei-action-panel>
          </div>
        `,
        props: {
          open: boolean('open', false)
        }
    }));
  }
}

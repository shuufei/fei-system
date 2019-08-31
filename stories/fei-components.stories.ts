import { storiesOf } from '@storybook/angular';

import { StyleExampleStories } from './styleExampleStories';
import { AtomsStories } from './atomsStories';
import { MoleculesStories } from './moleculesStories';
import { OrganismsStories } from './organismsStories';

const styleExampleStories = new StyleExampleStories();
styleExampleStories.importStories();

const atomsStories = new AtomsStories();
atomsStories.importStories();

const moleculesStories = new MoleculesStories();
moleculesStories.importStories();

const organismsStories = new OrganismsStories();
organismsStories.importStories();

storiesOf('License', module)
  .add('list', () => ({
    template: `
    Feather <br>
    ======================== <br>
    The MIT License (MIT) <br><br>

    Copyright (c) 2013-2017 Cole Bemis <br><br>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions: <br><br>

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software. <br><br>

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE. <br><br>
    `
  }));

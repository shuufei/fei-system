import { AtomsStories } from './atomsStories';

import { FeiComponentsModule } from '../projects/fei-components/src/lib/fei-components.module';

const metadata = {
  declarations: [],
  imports: [
    FeiComponentsModule
  ]
};

const atomsStories = new AtomsStories();
atomsStories.importStories(metadata);

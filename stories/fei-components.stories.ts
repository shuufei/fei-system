import { StyleExampleStories } from './styleExampleStories';
import { AtomsStories } from './atomsStories';
import { MoleculesStories } from './moleculesStories';

const styleExampleStories = new StyleExampleStories();
styleExampleStories.importStories();

const atomsStories = new AtomsStories();
atomsStories.importStories();

const moleculesStories = new MoleculesStories();
moleculesStories.importStories();

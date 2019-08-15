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

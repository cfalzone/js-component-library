import { Tabs } from './components/tabs';
import { Example } from './components/example';

// Get the app Element
const app = document.querySelector('#app');

// Create New Tab Examples
const tabsData1 = [
  {
    title: 'Tab One',
    content: 'Tab One Content: Veniam culpa nisi id ad incididunt laborum occaecat ad ea sit amet fugiat ea nostrud.'
  },
  {
    title: 'Tab Two',
    content: 'Tab Two Content: Commodo non aute magna consequat adipisicing laboris esse officia.'
  },
  {
    title: 'Tab Three',
    content: 'Tab Three Content: Et culpa eiusmod magna proident labore duis commodo mollit minim ut eu minim.'
  },
];
const tabs1 = new Tabs(tabsData1);
const tabsEx1 = new Example("Tabs 1", tabs1.generateTabsMarkup());

const tabsData2 = [
  {
    title: 'Tab 1',
    content: 'Tab 1 Content: Incididunt nulla ut nisi incididunt magna.'
  },
  {
    title: 'Tab 2',
    content: 'Tab 2 Content: Enim pariatur aliqua ad est ut culpa est aliqua dolore tempor velit esse nisi.',
    current: true
  },
  {
    title: 'Tab 3',
    content: 'Tab 3 Content: Magna nisi reprehenderit Lorem duis.'
  },
];
const tabs2 = new Tabs(tabsData2);
const tabsEx2 = new Example("Tabs 2", tabs2.generateTabsMarkup());

// Add the tabs examples to the page
app.insertAdjacentHTML('beforeend', tabsEx1.generateExampleMarkup());
app.insertAdjacentHTML('beforeend', tabsEx2.generateExampleMarkup());

// Initialize the tab examples
tabs1.init();
tabs2.init();

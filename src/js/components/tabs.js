// Tabs Component Constructor
export function Tabs(data) {
  this.data = data;

  // Set the current tab if not set
  let currentTabList = this.data.filter(item => item.current === true);
  if (currentTabList.length > 0) {
    this.data[0].current = true;
  }
}

// Generates the HTML Markup for the tabs
Tabs.prototype.generateTabsMarkup = function() {
  let markup = `<div class="tabs-container">`;

  let tabAnchors = `<ul>`;
  let tabContents = ``;
  for (let i = 0; i < this.data.length; i++) {
    let item = this.data[i];
    let current = '';
    if (item.current === true) {
      current = ' current'
    }
    tabAnchors += `<li><a class="tab${current}">${item.title}</a></li>`;
    tabContents += `<div class="tab-body${current}">${item.content}</div>`;
  }
  tabAnchors += `</ul>`;

  markup += `${tabAnchors}${tabContents}</div>`;

  return markup;
};
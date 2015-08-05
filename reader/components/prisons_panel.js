'use strict';

var $$ = React.createElement;
var _ = require("substance/helpers");
var EntitiesPanel = require("./entities_panel");

class PrisonsPanel extends EntitiesPanel {

  constructor(props) {
    super(props);
    this.entityType = "prison";
  }

  // Event handlers
  // -----------------

  // handleClick(e) {
  //   e.preventDefault();
  //   var commentId = e.currentTarget.dataset.id;

  //   this.context.app.replaceState({
  //     contextId: "show-comment",
  //     commentId: commentId
  //   });
  // }

  render() {
    return $$("div", {className: "panel prisons-panel-component"},
      $$('div', {className: 'panel-content'},
        $$('div', {className: 'prisons entities'},
          // entityNodes
          $$('div', null, "LOCATIONS GO HERE!")
        )
      )
    );
  }
}

PrisonsPanel.displayName = 'Prisons';

PrisonsPanel.contextId = "prisons";
PrisonsPanel.icon = "fa-location-arrow";

module.exports = PrisonsPanel;
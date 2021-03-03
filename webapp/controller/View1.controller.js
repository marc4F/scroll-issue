sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.scroll.controller.View1", {
		onInit: function() {
					var model = new sap.ui.model.json.JSONModel();
					model.setData({
						list: [{description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"}]
					});
					this.getView().setModel(model);
				},
				onFilterChangeApplyFilters: function() {
					this.getView().getModel().setData({
						list: [{description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"},
							  {description: "test"}]
					});
				}
	});
});
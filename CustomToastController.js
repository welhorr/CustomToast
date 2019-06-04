({
    doInit : function(cmp, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : cmp.get("v.title"),
            message: cmp.get("v.message"),
            duration: cmp.get("v.duration"),
            key: 'info_alt',
            type: cmp.get("v.type"),
            mode: cmp.get("v.mode")
        });
        toastEvent.fire();
    },
})

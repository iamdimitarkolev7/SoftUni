let receiptService = (() => {
    
    function getActiveReceipt(userId) {
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }
    
    function getEntriesById(receiptId) {
        let endpoint = `entries?query={"receiptId":"${receiptId}"}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function addEntry(productName, quantity, pricePerUnit) {
        let rcpData = {
            productName,
            quantity,
            pricePerUnit
        };

        return requester.post('appdata', 'entries', 'kinvey', rcpData);
    }
    
    function deleteEntry(entryId) {
        let endpoint = `entries/${entryId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }
    
    function getAllReceipts(userId) {
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }
    
    function receiptDetails() {
        
    }
    
    function commitReceipt() {
        
    }

    return {
        getActiveReceipt,
        getEntriesById,
        addEntry,
        deleteEntry,
        getAllReceipts
    }
})();
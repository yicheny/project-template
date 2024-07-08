import { IndexedDBLogger } from 'indexeddb-logger';

class ExtendedIndexedDBLogger extends IndexedDBLogger {
    constructor(options) {
        super(options);
    }

    getLogsByAction(action, callback) {
        if (!this.dbReady) {
            setTimeout(() => this.getLogsByAction(action, callback), 100);
            return;
        }

        const transaction = this.db.transaction([this.storeName], 'readonly');
        const store = transaction.objectStore(this.storeName);
        const index = store.index('action');
        const request = index.getAll(IDBKeyRange.only(action));

        request.onsuccess = () => {
            callback(request.result);
        };

        request.onerror = (event) => {
            console.error('Error getting logs by action:', event.target.errorCode);
        };
    }
}

export default ExtendedIndexedDBLogger;

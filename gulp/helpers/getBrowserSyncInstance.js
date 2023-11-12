const browserSync = require('browser-sync');


module.exports = browserSyncInstance = browserSync.has('markupPdfServer') ?
    browserSync.get('markupPdfServer') :
    browserSync.create('markupPdfServer');

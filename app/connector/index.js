module.exports=class Connector{
    constructor(app){
        this.app=app;
    }
    connet(argv,cb){
        cb(null, argv);
    }
    close(argv,cb){
        cb(null, argv);
    }
}
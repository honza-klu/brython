$B.make_class = function(class_obj){
    // class_obj has at least an attribute "name", and possibly an attribute
    // init

    function factory(){
        var res = {__class__: factory.$dict}
        if(class_obj.init){
            class_obj.init.apply(null, 
                [res].concat(Array.prototype.slice.call(arguments)))
        }
        return res
    }

    factory.__class__ = $B.$factory

    factory.$dict = {
        $factory: factory,
        __class__: $B.type,
        __name__: class_obj.name
    }
    factory.$dict.__mro__ = [object.$dict]

    return factory
}

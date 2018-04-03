function Observer(obj, key, value){
    var dep = new Dep();
    // 如果属性值还是一个对象就递归绑定
	if (Object.prototype.toString.call(value) === '[object Object]') {
		Object.keys(value).forEach(function(key){
			new Observer(value, key, value[key])
		})
	};

	Object.defineProperty(obj, key, {
		enumerable: true,
    	configurable: true,
    	get: function(){
            // 有生成监听对象的时候
    		// if (Dep.target) {
    			dep.addSub(Dep.target);
            // };
    		return value;
    	},
    	set: function(newVal){
    		value = newVal;
    		dep.notify();
    	}
	})
}

function Dep(){
	this.subs = [];

	this.addSub = function (watcher) {
		this.subs.push(watcher);
	}

	this.removeSub = function (watcher) {
		var index = this.subs.indexOf(watcher);
		if (index > -1) {
			this.subs.splice(index, 1);
		};
	}

	this.notify = function(){
		this.subs.forEach(function(watcher){
			watcher.update();
		});
    }
    log('this sub', this.subs)
}

function Watcher(fn){
	this.update = function(){
		// Dep.target = this;
		fn();
		// Dep.target = null;
	}
	this.update();
}
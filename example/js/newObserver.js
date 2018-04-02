// 观察者
function Observer(obj, key, value) {
    var control = new Controller()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function(value) {
            return value
        },
        set: function(newVal) {

            control.addEvent()
            // 通知有改动
            control.notify()
        }
    })
}

// 监听到变化做相应的 fn 动作
function Watcher(fn) {
    this.update = function() {
        fn()
    }
    this.update()
}

// 控制中心
function Controller() {
    // 监听列表
    this.event = []

    this.addEvent = function(target) {
        this.event.push(target)
    }
    this.notify = function() {
        log('notify')
        // 告诉 watcher 要做变化了
        thi.event.array.forEach(element => {

        });
    }
}

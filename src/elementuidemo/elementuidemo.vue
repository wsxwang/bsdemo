new Vue({
    el:"#elementuidemo",
    data:function(){
        return {
            message:'使用elementui的demo',
            chosenPanel:'1',
            progress:60,
            progressStatus:'',
            startButtonText:'启动',
            intervalid:0,
        };
    },
    methods:{
        OnChange:function(activeNames) {
            console.log(activeNames);
        },
        increseProgress:function(){
            this.progress += parseInt(Math.random()*10+1);
            this.progress %= 100;
        },
        startProgress:function(key){
            if (this.startButtonText == '启动')
            {
                this.startButtonText="停止";
                this.interval = window.setInterval(this.increseProgress, 1000);
            }
            else
            {
                this.startButtonText="启动";
                window.clearInterval(this.interval);
            }
        },
        resetProgress:function (key) {
            if (this.startButtonText == '停止')
            {
                this.startButtonText="启动";
                window.clearInterval(this.interval);
            }
            this.progress = 0;
        }
    },
});
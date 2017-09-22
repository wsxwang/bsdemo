new Vue({
    el:"#elementuidemo",
    data:function(){
        return {
            message:'使用elementui的demo',
            chosenPanel:'1',
            progress:60,
            progressStatus:'',
            startButtonText:'启动',
        };
    },
    methods:{
        OnChange:function(activeNames) {
            console.log(activeNames);
        },
        startProgress:function(key){
            if (startButtonText == '启动')
            {
                startButtonText="停止";
            }
            else
            {
                startButtonText="启动";
            }
        },
    },
});